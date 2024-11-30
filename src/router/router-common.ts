export default [
  {
    path: '/',
    component: () => import('../view/home/index.vue')
  },
  {
    path: '/vicinity',//附近
    component: () => import('../view/vicinity/index.vue')
  },
  {
    path: '/vicinityCatering', //附近
    component: () => import('../view/vicinity-catering/index.vue')
  },
  {
    path: '/publishMerchant', //发布商家
    component: () => import('../view/publish-merchant/index.vue')
  },
  {
    path: '/merchantDetail', //商家详情
    component: () => import('../view/merchant-detail/index.vue')
  },
  
]

