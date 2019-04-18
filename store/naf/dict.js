// import * as types from './.dict.js';
import { LOADED, PRESET } from './.dict.js';
import assert from 'assert';

const api = {
  listItem: (catg) => `/naf/code/${catg}/list`,
  listUnit: '/naf/unit/list',
  listXzqh: '/naf/code/xzqh/list',
}

// initial state
export const state = () => ({
  categories: [], // 字典分类
  items: {// 分项映射表
    status: [
      { code: '0', name: '正常' },
      { code: '1', name: '挂起' },
      { code: '2', name: '注销' },
    ],
    usage: [
      { code: '0', name: '正常' },
      { code: '1', name: '停用' },
    ],
  },
  codes: {// 代码映射表
    status: {
      '0': '正常',
      '1': '挂起',
      '2': '注销',
    },
    usage: {
      '0': '正常',
      '1': '停用',
    },
  },
});

// actions
export const actions = {
  async load({ state, commit }, payload) {
    assert(payload);

    if (state.items[payload]) {
      return { errcode: 0, errmsg: 'loaded' };
    }

    // LOAD PRESET DICT
    if (PRESET[payload]) {
      commit(LOADED, { category: payload, items: PRESET[payload] });
      return { errcode: 0, errmsg: 'ok' };
    }

    let res;
    if (payload === 'unit') {
      // LOAD UNIT DICT
      res = await this.$axios.$get(`${api.listUnit}`)
    } else if (payload === 'xzqh') {
      // LOAD XZQH DICT
      res = await this.$axios.$get(api.listXzqh, { params: { level: 1 } });
      if (res.errcode) return res;
      const rs1 = res.data;
      res = await this.$axios.$get(api.listXzqh, { params: { level: 2 } });
      if (res.errcode) return res;
      const rs2 = res.data;
      res = rs1.map((p) => {
        const prefix = p.code.substr(0, 2);
        const children = rs2.filter(c => c.code !== p.code && c.code.startsWith(prefix));
        return { ...p, children };
      });
      res = { errcode: 0, data: res };
    } else {
      // LOAD COMMONS DICT
      res = await this.$axios.$get(`${api.listItem(payload)}`)
    }

    if (res.errcode === 0) {
      commit(LOADED, { category: payload, items: res.data });
    }
    return res;
  },

};

// mutations
export const mutations = {
  [LOADED](state, { category, items }) {
    state.items[category] = items;
    state.codes[category] = items.reduce((acc, item) => {
      acc[item.code] = item.name;
      if (_.isArray(item.children) && item.children.length > 0) {
        _.forEach(item.children, (p) => { acc[p.code] = p.name; });
      }
      return acc;
    }, {});
  },
};
