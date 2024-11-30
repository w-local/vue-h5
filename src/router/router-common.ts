export default [
  {
    path: '/',
    component: () => import('../view/home/index.vue')
  },
  {
    path: '/vicinityDetail',//附近详情
    component: () => import('../view/vicinity-detail/index.vue')
  },
  {
    path: '/vicinity', //附近
    component: () => import('../view/vicinity/index.vue')
  },
  {
    path: '/publishMerchant', //发布商家
    component: () => import('../view/publish-merchant/index.vue')
  },
  {
    path: '/merchantDetail', //商家详情
    component: () => import('../view/merchant-detail/index.vue')
  },
  {
    path: '/hire', //招聘
    component: () => import('../view/hire/index.vue')
  },
  {
    path: '/hireDetail', //招聘详情
    component: () => import('../view/hire-detail/index.vue')
  },
  {
    path: '/publishJob', //发布商家
    component: () => import('../view/publish-job/index.vue')
  }
]

