/* eslint-disable no-param-reassign */
import Vue from 'vue'
import _ from 'lodash'
import moment from 'moment';

export default () => {
  Vue.filter('get', function (value, path) {
    if (!value || !path) return '';
    return _.get(value, path) || '';
  });

  Vue.filter('date', function (value, formmat) {
    if (!value) return '';
    return moment(value).format(formmat);
  });

  Vue.filter('dict',  function (value, codes) {
    if (!value) return '';
    value = value.toString();
    if (codes) {
      value = _.get(codes, [value]) || value;
    }
    return value;
  });
}
