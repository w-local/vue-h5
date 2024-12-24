<template>
  <div>
  <div class="detail-wrap">
    <div class="head-wrap d-flex-bet">
      <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
      <h1 class="head-name">商家详情</h1>
      <img class="share-icon" @click="showShare = true" src="@detailImg/fenxiang.png" />
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="idx in 4" ::key="idx">
        <img class="banner-img" src="@detailImg/test-img.png" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
    <!-- <img class="banner-img" src="@detailImg/test-img.png" /> -->
    <div class="content-wrap">
      <div class="info-data d-flex-bet">
        <div class="d-flex-bet-cent">
          <div class="info-name ellipsis-one">曼谷TKV</div>
          <div class="info-location d-flex-i-cent">
            <img class="location-icon" src="@commonImg/location-icon.png" />
            <span>曼谷</span>
          </div>
        </div>
        <div class="info-region ellipsis-tow">24rue Saint lazare75009，暹罗广场Siam Square 4F, Siam Square 4F…</div>
        <div class="d-flex-bet-cent">
          <div class="info-type">休闲娱乐</div>
          <div>
            <img class="phone-icon" src="@commonImg/phone-icon.png" />
            <span class="info-phone">+6629876543</span>
          </div>
        </div>
      </div>
      <div class="introduce-content">
        <div class="d-flex-i-cent">
          <img class="introduce-icon" src="@detailImg/introduce-icon.png" />
          <span class="introduce-name">图片介绍</span>
        </div>
        <img class="introduce-img" src="@detailImg/test-img1.png" />
      </div>
    </div>
  </div>
  <van-share-sheet v-model:show="showShare" :options="options" @select="onSelect" />
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref(route.query.id)
console.log(id.value,'id')
const { navigateBack } = useRouterNavigation()

const showShare = ref(false)
const options = [
  { name: '微信好友', icon: getAssetsFile('commonImg/icon-wechat.png') },
  { name: '朋友圈', icon: getAssetsFile('commonImg/icon-moments.png') }
]
const onSelect = (option: any) => {
  alert(option.name)
  showShare.value = false
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
