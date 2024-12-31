<template>
  <div>
    <div class="banner-wrap">
      <h1 class="banner-name">东南亚大事件</h1>
      <van-sticky @change="stickyFun">
        <div ref="searchWrap">
          <div class="search-wrap d-flex-bet-cent">
            <div class="d-flex">
              <div>
                <p class="location">曼谷</p>
                <p class="weather">晴 4°C</p>
              </div>
              <img class="arrow" src="@homeImg/arrow-bottom.png" />
            </div>
            <div class="search" @click="navigateTo('/search')">
              <img class="search-bg" src="@homeImg/search-bg.png" />
              <div class="search-cont d-flex-bet-cent">
                <div class="d-flex-i-cent">
                  <img class="search-icon" src="@homeImg/search-icon.png" />
                  <span>搜索关键词</span>
                </div>
                <div class="search-btn">搜索</div>
              </div>
            </div>
            <img class="add-icon" src="@homeImg/add-icon.png" />
          </div>
          <div class="banner-list d-flex-bet-cent">
            <div v-for="(item, idx) in bannerData" :key="idx" @click="navigateTo(item.url)">
              <img class="banner-icon" :src="getAssetsFile(`homeImg/${item.icon}.png`)" />
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </van-sticky>
    </div>
    <div class="content-wrap">
      <div class="type-list d-flex-i-cent">
        <div class="type-item" v-for="(item, idx) in typeData" :key="idx">
          <div class="item-wrap" :style="{ background: `linear-gradient( 180deg, ${item.bg[0]} 0%, ${item.bg[1]}  100%)` }" @click="navigateTo(`${item.url}?type=${Math.random() < 0.5 ? 0 : 1}`)">
            <img class="item-icon" :src="getAssetsFile(`homeImg/${item.icon}.png`)" />
            <div>{{ item.name }}</div>
          </div>
          <div class="item-wrap" v-for="(subItem, subIdx) in item.childrenData" :key="subIdx" :style="{ background: item.childrenBg }" @click="navigateTo(subItem.url)">
            <img class="item-icon" :src="getAssetsFile(`homeImg/${subItem.icon}.png`)" />
            <div class="sub-name">{{ subItem.name }}</div>
          </div>
        </div>
      </div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="idx in 4" ::key="idx">
          <img class="banner-img" src="@homeImg/banner.png" />
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
      <!-- <img class="focus-img" src="@homeImg/banner.png" /> -->
      <div class="tab-list d-flex-bet-cent">
        <!-- :style="{ backgroundImage: 'url(' + getAssetsFile('homeImg/' + item.img + '.png') + ')' }" -->
        <div class="tab-item" v-for="(item, idx) in tabData" :key="idx">
          <p class="tab-name">{{ item.name }}</p>
          <p class="tab-num">{{ item.num }}家</p>
          <p class="tab-btn" :style="{ background: `linear-gradient( 135deg, ${item.bg[0]} 0%, ${item.bg[1]}  100%)` }" @click="navigateTo(item.url)">去看看</p>
          <img class="tab-img" :src="getAssetsFile('homeImg/' + item.img + '.png')" />
        </div>
      </div>
      <div class="event-list">
        <div class="title-wrap">
          <img class="title-icon" src="@homeImg/title-icon.png" />
          <h3 class="title">大事件</h3>
          <span class="sub-title">最新最热资讯</span>
        </div>
        <div class="event-item d-flex-bet" v-for="idx in 2" :key="idx" @click="navigateTo('/eventDetail?id=11')">
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
      </div>
    </div>
    <div>
      <div class="tabbar-wrap d-flex-bet-cent">
        <div class="tabbar-item" @click="tabbarFun('/')">
          <img src="@homeImg/home-active-icon.png" />
          <p class="active">首页</p>
        </div>
        <div class="tabbar-item" @click="tabbarFun('/localChart')">
          <img src="@homeImg/chat-icon.png" />
          <p>闲聊</p>
        </div>
        <div class="tabbar-add" @click="navigateTo('/PublishQuick')">
          <img src="@homeImg/tabbar-add.png" />
        </div>
        <div class="tabbar-item" @click="tabbarFun('/news')">
          <img src="@homeImg/news-icon.png" />
          <p>消息</p>
        </div>
        <div class="tabbar-item" @click="tabbarFun('/my')">
          <img src="@homeImg/my-icon.png" />
          <p>我的</p>
        </div>
      </div>
      <div class="round"></div>
    </div>
    <PublishQuick/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PublishQuick from '@/view/publish-quick/index.vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import { tabData, typeData, bannerData } from './data'
import { useRouter } from 'vue-router'

const { navigateTo } = useRouterNavigation()
const router = useRouter()
const searchWrap = ref()
const stickyFun = (isFixed: boolean) => {
  searchWrap.value.style.backgroundColor = isFixed ? '#0C95FD' : 'transparent'
}

const tabbarFun = (path: string) => {
  router.replace(path)
}

</script>

<style lang="less" scoped>
@import './index.less';
</style>
