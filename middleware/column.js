'use strict'
import * as types from '@/store/.mutation';

// 从路由中提取栏目信息
export default function ({ route, store, redirect }) {
  const [, page, column] = route.path.split('/');
  store.commit(types.SET_PAGE, page);  
  store.commit(types.SET_COLUMN, column);  
}