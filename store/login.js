import * as types from './.mutation';
import Cookies from 'js-cookie';
import util from '@/utils/user-util';

const api = {
  qrcode: '/qrcode/create', // 创建二维码
  token: code => `/qrcode/${code}/token`, // 换取微信认证token
  login: '/mshp/login', // 尝试用微信登录
}

export const state = () => ({
  loading: false,
  isAuthenticated: false,
  userinfo: null,
  unit: null,
  access_token: null,
  qrcode: null,
  wxtoken: null,
});

// getters
export const getters = {
  userStatus: state => (state.userinfo || {}).status,
};

// actions
export const actions = {
  async qrcode({ commit}) {
    commit(types.SHOW_LOADING);
    try{
      const res = await this.$axios.$post(api.qrcode)
      if (res.errcode != undefined && res.errcode === 0) {
        commit(types.QRCODE_INIT, res.data);
      }
      return res;
    } finally {
      commit(types.HIDE_LOADING);
    }
  },
  async fetchToken({ commit, dispatch }, { qrcode }) {
    commit(types.SHOW_LOADING);
    try {
      const res = await this.$axios.$post(api.token(qrcode));
      if (res.errcode != undefined && res.errcode === 0) {
        commit(types.QRCODE_SUCCESS, res.token);
        // TODO: 尝试时候用绑定的微信进行登录
        await dispatch('login');
      }
      return res;
    } finally {
      commit(types.HIDE_LOADING);
    }
  },
  async login({ commit, dispatch, state }) {
    commit(types.SHOW_LOADING);
    try {
      let res = await this.$axios.$post(api.login)
      if (res.errcode && res.errcode !== 0) {
        commit(types.LOGIN_FAILURE);
      } else {
        // await dispatch('fetch', { username });
        commit(types.LOGIN_SUCCESS, res);
      }
      return res;
    } catch (err) {
      commit(types.LOGIN_FAILURE);
      return { errcode: -1, errmsg: 'error' };
    } finally {
      commit(types.HIDE_LOADING);
    }
  },
};

// mutations
export const mutations = {
  [types.SHOW_LOADING](state) {
    state.loading = true;
  },
  [types.HIDE_LOADING](state) {
    state.loading = false;
  },

  [types.LOGIN_SUCCESS](state, { userinfo, token }) {
    state.isAuthenticated = true;
    state.userinfo = userinfo;
    state.access_token = token;
    util.save({userinfo, token});
  },
  [types.LOGIN_FAILURE](state) {
    state.isAuthenticated = false;
  },
  [types.LOGOUT_SUCCESS](state) {
    state.isAuthenticated = false;
    state.userinfo = null;
    Cookies.remove("auth");
  },
  [types.USER_INIT](state) {
    state.userinfo = util.user;
    state.access_token = util.token;
    if (util.user) state.isAuthenticated = true;
  },
  [types.QRCODE_INIT](state, payload) {
    state.qrcode = payload;
  },
  [types.QRCODE_SUCCESS](state, payload) {
    state.wxtoken = payload;
    Cookies.set("wxtoken", payload);
  },

};
