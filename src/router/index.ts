import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routerCommon from './router-common'

const routes: Array<RouteRecordRaw> = [
  ...routerCommon
];

const router = createRouter({
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
router.beforeEach((to:any, _, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as any
  }
  if (to.meta.content) {
    const head = document.getElementsByTagName('head')
    const meta:any = document.createElement('meta')
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', to.meta.content.keywords)
    document.querySelector('meta[name="description"]')?.setAttribute('content', to.meta.content.description)
    meta.content = to.meta.content
    head[0].appendChild(meta)
  }
  next()
})
export default router;