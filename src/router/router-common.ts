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
  },
  {
    path: '/jobDetail', //职位详情
    component: () => import('../view/job-detail/index.vue')
  },
  {
    path: '/my', //我的
    component: () => import('../view/my/index.vue')
  },
  {
    path: '/myPublish', //我的发布
    component: () => import('../view/my-publish/index.vue')
  },
  {
    path: '/myCollect', //我的收藏
    component: () => import('../view/my-collect/index.vue')
  },
  {
    path: '/myBrowse', //浏览记录
    component: () => import('../view/my-browse/index.vue')
  },
  {
    path: '/agreement', //用户协议
    component: () => import('../view/agreement/index.vue')
  },
  {
    path: '/localChart', //本地闲聊
    component: () => import('../view/local-chart/index.vue')
  },
  {
    path: '/news', //消息
    component: () => import('../view/news/index.vue')
  },
  {
    path: '/car', //车辆
    component: () => import('../view/car/index.vue')
  },
  {
    path: '/carDetail', //车辆
    component: () => import('../view/car-detail/index.vue')
  },
  {
    path: '/publishCar', //车辆
    component: () => import('../view/publish-car/index.vue')
  },
  {
    path: '/publishHomestay', //发布民宿
    component: () => import('../view/publish-homestay/index.vue')
  },
  {
    path: '/homestayDetail', //发布民宿
    component: () => import('../view/homestay-detail/index.vue')
  },
  {
    path: '/homestay', //民宿
    component: () => import('../view/homestay/index.vue')
  },
  
  
]

