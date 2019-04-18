/* eslint-disable no-param-reassign */
import Vue from 'vue';
import _ from 'lodash';
import moment from 'moment';
import assert from 'assert';

export default ({ store }) => {
  Vue.filter('get', function(value, path) {
    if (!value || !path) return '';
    return _.get(value, path) || '';
  });

  Vue.filter('date', function(value, formmat) {
    if (!value) return '';
    return moment(value).format(formmat);
  });

  Vue.filter('dict', function(value, category) {
    assert(_.isString(category));
    const state = store.state.naf.dict;
    if (!state) {
      throw new Error("can't find store for naf dict");
    }
    const codes = state.codes[category];
    if (!codes || codes.length == 0) {
      console.warn(`dict [${category}] not load!`);
    }
    if (!value) return '';
    value = value.toString();
    if (codes) {
      value = _.get(codes, [value]) || value;
    }
    return value;
  });
};
