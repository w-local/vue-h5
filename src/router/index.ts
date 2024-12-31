import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routerCommon from './router-common'
// 引入扩展函数
import transitionExtend from "./transition-extend";
 

let routes: Array<RouteRecordRaw> = [
  ...routerCommon
];

let router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
      return { top: 0 }
  }
});
// router = transitionExtend(router)

 
// 对router对象扩展
export default router;