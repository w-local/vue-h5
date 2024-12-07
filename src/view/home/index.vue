<template>
  <div class="banner-wrap">
    <h1 class="banner-name">东南亚大事件</h1>
    <van-sticky @change="stickyFun">
      <div ref="searchWrap" class="search-wrap d-flex-bet-cent">
        <div class="d-flex">
          <div>
            <p class="location">曼谷</p>
            <p class="weather">晴 4°C</p>
          </div>
          <img class="arrow" src="@homeImg/arrow-bottom.png" />
        </div>
        <div class="search d-flex-bet-cent">
          <div class="d-flex-i-cent">
            <img class="search-icon" src="@homeImg/search-icon.png" />
            <span>搜索关键词</span>
          </div>
          <div class="search-btn">搜索</div>
        </div>
        <img class="add-icon" src="@homeImg/add-icon.png" />
      </div>
    </van-sticky>
    <div class="banner-list d-flex-bet-cent">
      <div v-for="(item, idx) in bannerData" :key="idx">
        <img class="banner-icon" :src="getAssetsFile(`homeImg/${item.icon}.png`)" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
  <div class="content-wrap">
    <div class="type-list d-flex-i-cent">
      <div class="type-item" v-for="(item, idx) in typeData" :key="idx">
        <div class="item-wrap" :style="{ background: `linear-gradient( 180deg, ${item.bg[0]} 0%, ${item.bg[1]}  100%)` }">
          <img class="item-icon" :src="getAssetsFile(`homeImg/${item.icon}.png`)" />
          <div>{{ item.name }}</div>
        </div>
        <div class="item-wrap" v-for="(subItem, subIdx) in item.childrenData" :key="subIdx" :style="{ background: item.childrenBg }">
          <img class="item-icon" :src="getAssetsFile(`homeImg/${subItem.icon}.png`)" />
          <div class="sub-name">{{ subItem.name }}</div>
        </div>
      </div>
    </div>
    <img class="focus-img" src="@homeImg/banner.png" />
    <div class="tab-list d-flex-bet-cent">
      <!-- :style="{ backgroundImage: 'url(' + getAssetsFile('homeImg/' + item.img + '.png') + ')' }" -->
      <div class="tab-item" v-for="(item, idx) in tabData" :key="idx">
        <p class="tab-name">{{ item.name }}</p>
        <p class="tab-num">{{ item.num }}家</p>
        <p class="tab-btn" :style="{ background: `linear-gradient( 135deg, ${item.bg[0]} 0%, ${item.bg[1]}  100%)` }">去看看</p>
        <img class="tab-img" :src="getAssetsFile('homeImg/' + item.img + '.png')" />
      </div>
    </div>
    <div class="event-list">
      <div class="title-wrap">
        <img class="title-icon" src="@homeImg/title-icon.png" />
        <h3 class="title">大事件</h3>
        <span class="sub-title">最新最热资讯</span>
      </div>
      <div class="event-item d-flex" v-for="idx in 2" :key="idx">
        <div>
          <div class="event-name ellipsis-three">棋牌室棋牌室棋牌室棋牌室棋牌室棋牌棋牌室棋牌室棋牌室棋牌室棋牌室棋牌室棋牌室棋牌室棋牌室棋牌室棋牌室棋牌室棋牌室棋牌室室棋牌室</div>
          <div class="d-flex-bet-cent event-type">
            <span>gulong</span>
            <div class="d-flex-i-cent">
              <img class="event-icon" src="@commonImg/icon-eye.png" />
              <span>82</span>
            </div>
          </div>
        </div>
        <img class="event-img" src="/src/assets/homeImg/banner.png" />
      </div>
      <!-- <img class="event-img" src="@homeImg/event-img.png" />
      <img class="event-img" src="@homeImg/event-img.png" />
      <img class="event-img" src="@homeImg/event-img.png" /> -->
    </div>
  </div>
  <div>
    <div class="tabbar-wrap d-flex-bet-cent">
      <div class="tabbar-item active">
        <img src="@homeImg/home-active-icon.png" />
        <p>首页</p>
      </div>
      <div class="tabbar-item">
        <img src="@homeImg/chat-icon.png" />
        <p>闲聊</p>
      </div>
      <div class="tabbar-add">
        <img src="@homeImg/tabbar-add.png" />
      </div>
      <div class="tabbar-item">
        <img src="@homeImg/news-icon.png" />
        <p>消息</p>
      </div>
      <div class="tabbar-item">
        <img src="@homeImg/my-icon.png" />
        <p>我的</p>
      </div>
    </div>
    <div class="round"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile } from '@config/utils'
const bannerData = [
  {
    icon: 'bdxl',
    name: '本地闲聊'
  },
  {
    icon: 'hbdh',
    name: '货币兑换'
  },
  {
    icon: 'bdcx',
    name: '本地出行'
  },
  {
    icon: 'zxkf',
    name: '在线客服'
  }
]
const typeData = [
  {
    name: '民宿',
    icon: 'icon-minsu',
    bg: ['#EF5852', '#FA8655'],
    childrenBg: '#FFF6F1',
    childrenData: [
      {
        name: '公寓',
        icon: 'icon-gongyu'
      },
      {
        name: '别墅',
        icon: 'icon-bieshu'
      }
    ]
  },
  {
    name: '车辆',
    icon: 'icon-cheliang',
    bg: ['#4086F8', '#51AFF5'],
    childrenBg: '#F0F9FE',
    childrenData: [
      {
        name: '租车',
        icon: 'icon-zuche'
      },
      {
        name: '买卖',
        icon: 'icon-maimai'
      }
    ]
  },
  {
    name: '招聘',
    icon: 'icon-zhaopin',
    bg: ['#6580FB', '#68A4F2'],
    childrenBg: '#F2F4FF',
    childrenData: [
      {
        name: '招聘',
        icon: 'icon-zhaopin1'
      },
      {
        name: '求职',
        icon: 'icon-qiuzhi'
      }
    ]
  },
  {
    name: '二手',
    icon: 'icon-ershou',
    bg: ['#32C3B5', '#58D5B1'],
    childrenBg: '#ECFCF9',
    childrenData: [
      {
        name: '出售',
        icon: 'icon-chushou'
      },
      {
        name: '求购',
        icon: 'icon-qiugou'
      }
    ]
  },
  {
    name: '附近',
    icon: 'icon-fujin',
    bg: ['#FF8B3D', '#FDA545'],
    childrenBg: '#FFF6F1',
    childrenData: [
      {
        name: '吃喝',
        icon: 'icon-chihe'
      },
      {
        name: '玩乐',
        icon: 'icon-wanle'
      }
    ]
  }
]
const tabData = [
  {
    img: 'bdsj',
    name: '本地商家',
    num: 80,
    imgBg: '',
    bg: ['#FFAC4F', '#FF8533']
  },
  {
    img: 'essp',
    name: '二手商品',
    num: 90,
    bg: ['#5CB7FA', '#2780F8']
  },
  {
    img: 'tb',
    name: '贴吧',
    num: 60,
    bg: ['#22D0C2', '#18B8A9']
  }
]
const searchWrap = ref()
const stickyFun = (isFixed: boolean) => {
  console.log(isFixed, 'isFixed')
  searchWrap.value.style.backgroundColor = isFixed ? 'rgb(64, 134, 248)' : 'transparent'
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
