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
    path: '/localChartDetail', //本地闲聊详情
    component: () => import('../view/local-chart-detail/index.vue')
  },
  {
    path: '/publishChart', //发布本地闲聊
    component: () => import('../view/publish-chart/index.vue')
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
  {
    path: '/publishQuick', //快捷发布
    component: () => import('../view/publish-quick/index.vue')
  },
  {
    path: '/eventDetail', //事件详情
    component: () => import('../view/event-detail/index.vue')
  },
  {
    path: '/currencyExchange', //货币兑换
    component: () => import('../view/currency-exchange/index.vue')
  },
  {
    path: '/merchantList', //商家列表
    component: () => import('../view/merchant-list/index.vue')
  },
  {
    path: '/secondHand', //二手
    component: () => import('../view/second-hand/index.vue')
  },
  {
    path: '/secondDetail', //二手详情
    component: () => import('../view/second-detail/index.vue')
  },
  {
    path: '/publishSecond', //发布二手
    component: () => import('../view/publish-second/index.vue')
  },
  {
    path: '/search', //搜索页面
    component: () => import('../view/search/index.vue')
  },
  {
    path: '/customerCenter', //客服中心
    component: () => import('../view/customer-center/index.vue')
  },
  {
    path: '/customer', //客服中心
    component: () => import('../view/customer/index.vue')
  },
]


 

