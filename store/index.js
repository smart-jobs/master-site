import * as types from './.mutation';
import menu from './.menu';

export const state = () => ({
  menu: menu,
  page: '', // 一级栏目
  column: '',// 二级栏目
});

// actions
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req, app, error }) {
  }
}

export const mutations = {
  [types.SET_PAGE](state, payload) {
    state.page = payload || 'home';
  },
  [types.SET_COLUMN](state, payload) {
    state.column = payload;
  },
}

export const getters = {
  isAuthenticated: state => state.login.isAuthenticated,
  userinfo: state => state.login.userinfo,
  access_token: state => state.login.access_token,
}
