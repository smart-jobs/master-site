/**
 * 字典数据处理插件
 */

import Vue from 'vue';
import _ from 'lodash';

const Plugin = {
  install(Vue, options) {
    // const store = this.$store;
    // const userinfo = _.get(store, 'state.login.userinfo');
    // console.log('init userinfo', userinfo);
    // if (!userinfo) {
    //   store.commit('login/USER_INIT');
    // }
    // 3. 注入组件
    Vue.mixin({
      created: function() {
        const store = this.$store;
        if (store) {
          const userinfo = _.get(store, 'state.login.userinfo');
          if (!userinfo) {
            store.commit('login/USER_INIT');
          }
        }
      },
    });
    // 4. 添加实例方法
    Vue.prototype.$platform = Vue.config.platform;
  },
};
export default () => {
  Vue.use(Plugin);
};
