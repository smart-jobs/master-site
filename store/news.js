import * as types from '@/store/.mutation.js';

const api = {
  query: '/cms/news/list',
  fetch: '/cms/news/fetch',
};
// initial state
export const state = () => ({
  items: [],
  currents: null,
  total: 0,
});

// actions
export const actions = {
  async query({ commit }, { page,pagesize,column }) {
    const skip = (page - 1) * pagesize;
    const params = { skip, limit: pagesize, column: column };
    const res = await this.$axios.$get(api.query, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_LIST, res);
    }
    return res;
  },
  async fetch({ commit }, { id }) {
    const res = await this.$axios.$get(`${api.fetch}?id=${id}`);
    if (res.errcode === 0) {
        commit(types.LOADED_DETAIL, res.data);
    }
    return res;
  },
};

// mutations
export const mutations = {
  [types.LOADED_LIST](state, { data, total }) {
    state.items = data;
    state.total = total;
  },
  [types.LOADED_DETAIL](state, payload) {
    state.currents = payload;
  },
};

export const namespaced = true;
