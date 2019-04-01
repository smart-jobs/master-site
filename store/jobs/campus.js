import * as types from '@/store/.mutation.js';

const api = {
  simple: '/jobs/campus/simple_g',
  query: '/jobs/campus/query_g',
  fetch: '/jobs/campus/fetch',
  calendar: '/jobs/campus/calendar'
};
// initial state
export const state = () => ({
  tops: [],
  items: [],
  currents: null,
  total: 0,
});

// actions
export const actions = {
  async top({ commit }, paging = {}) {
    const { size = topSize } = paging;
    const params = { skip: 0, limit: size };
    const res = await this.$axios.$get(api.simple, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_TOP, res);
    }
    return res;
  },
  async query({ commit }, { paging = {} }) {
    const { page = 1, size = pageSize } = paging;
    const skip = Math.max(0, (page - 1) * size);
    const params = { skip, limit: size };
    const res = await this.$axios.$get(api.query, { params });
    if (res.errcode === 0) {
      commit(types.LOADED_LIST, res);
    }
    return res;
  },
  async fetch({ commit }, { id }) {
    const res = await this.$axios.$get(`${api.fetch}?id=${id}`);
    if (res.errcode === 0) commit(types.LOADED_DETAIL, res.data);
    return res;
  },
  async calendar({ commit }, { month }) {
    const res = await this.$axios.$get(`${api.calendar}?month=${month}`);
    return res;
  }
};

// mutations
export const mutations = {
  [types.LOADED_TOP](state, { data }) {
    state.tops = data;
  },
  [types.LOADED_LIST](state, { data, total }) {
    state.items = data;
    state.total = total;
  },
  [types.LOADED_DETAIL](state, payload) {
    state.currents = payload;
  },
};

export const namespaced = true;
