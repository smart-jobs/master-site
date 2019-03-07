/* eslint-disable no-unused-vars */
import Vue from 'vue';
// import NafCore from 'naf-core';
// const { BusinessError } = NafCore.Error;
import util from '@/utils/user-util';

var vm = new Vue({})

export default function ({ $axios, redirect, app, store }) {
  $axios.onRequest(config => {
    if (process.browser) {
      const { isAuthenticated, unitcode, platform, access_token } = store.getters;
      config.headers['Authorization'] = util.token; // 设置config可以在本次请求生效
      // }
      vm.$loading()
    }
  })

  $axios.onResponse(response => {
    if (process.browser) {
      let load = vm.$loading();
      load.close();
      const res = response.data;
      if (res.errcode) {
        console.error(`请求发生错误：${res.errcode}, ${res.errmsg}`);
      }
    }
  })

  $axios.onError(error => {
    if (process.browser) {
      let load = vm.$loading();
      load.close();
    }
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    } else if (code === 403) {
      redirect('/login')
    }
  })

  // $axios.defaults.headers.common['x-tenant'] = 'demo';

}
