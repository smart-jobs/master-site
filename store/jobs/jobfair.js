import * as types from '@/store/.mutation.js';

const topSize = 6;
const pageSize = 10;

const api = {
  simple: '/jobs/jobfair/simple_g',
  query: '/jobs/jobfair/query_g',
  fetch: '/jobs/jobfair/fetch',
  corp_list: '/jobs/jobfair/corp/list',
  calendar: '/jobs/jobfair/calendar'
};
// initial state
export const state = () => ({
  tops: [],
  items: [],
  current: null,
  total: 0,
  corp_list: [],
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
  async corplist({ commit }, { id }) {
    const res = await this.$axios.$get(`${api.corp_list}?fair_id=${id}`);
    if (res.errcode === 0) commit(types.LOADED_CORP_LIST, res.data);
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
    state.current = payload;
  },
  [types.LOADED_CORP_LIST](state, payload) {
    state.corp_list = payload;
  },
};

export const namespaced = true;
