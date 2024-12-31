export const bannerData = [
  {
    icon: 'bdxl',
    name: '本地闲聊',
    url: '/localChart'
  },
  {
    icon: 'hbdh',
    name: '货币兑换',
    url: '/currencyExchange'
  },
  {
    icon: 'bdcx',
    name: '本地出行',
    url: '/car?type=0'
  },
  {
    icon: 'zxkf',
    name: '在线客服',
    url: '/localChart'
  }
]
export const typeData = [
  {
    name: '民宿',
    icon: 'icon-minsu',
    bg: ['#EF5852', '#FA8655'],
    childrenBg: '#FFF6F1',
    url: '/homestay',
    childrenData: [
      {
        name: '公寓',
        icon: 'icon-gongyu',
        url: '/homestay?type=0'
      },
      {
        name: '别墅',
        icon: 'icon-bieshu',
        url: '/homestay?type=1'
      }
    ]
  },
  {
    name: '车辆',
    icon: 'icon-cheliang',
    bg: ['#4086F8', '#51AFF5'],
    childrenBg: '#F0F9FE',
    url: '/car',
    childrenData: [
      {
        name: '租车',
        icon: 'icon-zuche',
        url: '/car?type=0'
      },
      {
        name: '买卖',
        icon: 'icon-maimai',
        url: '/car?type=1'
      }
    ]
  },
  {
    name: '招聘',
    icon: 'icon-zhaopin',
    bg: ['#6580FB', '#68A4F2'],
    childrenBg: '#F2F4FF',
    url: '/hire',
    childrenData: [
      {
        name: '招聘',
        icon: 'icon-zhaopin1',
        url: '/hire'
      },
      {
        name: '求职',
        icon: 'icon-qiuzhi',
        url: '/hire'
      }
    ]
  },
  {
    name: '二手',
    icon: 'icon-ershou',
    bg: ['#32C3B5', '#58D5B1'],
    childrenBg: '#ECFCF9',
     url: '/secondHand',
    childrenData: [
      {
        name: '出售',
        icon: 'icon-chushou',
        url: '/secondHand'
      },
      {
        name: '求购',
        icon: 'icon-qiugou',
        url: '/secondHand'
      }
    ]
  },
  {
    name: '附近',
    icon: 'icon-fujin',
    bg: ['#FF8B3D', '#FDA545'],
    childrenBg: '#FFF6F1',
    url: '/vicinity',
    childrenData: [
      {
        name: '吃喝',
        icon: 'icon-chihe',
        url: '/vicinity'
      },
      {
        name: '玩乐',
        icon: 'icon-wanle',
        url: '/vicinity'
      }
    ]
  }
]
export const tabData = [
  {
    img: 'bdsj',
    name: '本地商家',
    url: '/vicinity',
    num: 80,
    imgBg: '',
    bg: ['#FFAC4F', '#FF8533']
  },
  {
    img: 'essp',
    name: '二手商品',
    url: '/secondHand',
    num: 90,
    bg: ['#5CB7FA', '#2780F8']
  },
  {
    img: 'tb',
    name: '贴吧',
    url: '/vicinity',
    num: 60,
    bg: ['#22D0C2', '#18B8A9']
  }
]