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
  scrollBehavior(_, _1, savedPosition) {
    // 如果 `savedPosition` 存在，则表示这是通过浏览器的前进/后退按钮导航，此时返回保存的位置
    if (savedPosition) {
      return savedPosition
    } else {
      // 否则返回顶部
      return { top: 0 }
    }
  }
});
// router = transitionExtend(router)
 
// 对router对象扩展
export default router;