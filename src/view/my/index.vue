<template>
  <div class="head-wrap">
    <h1 class="head-name d-flex-cent-cent">我的</h1>
    <div class="d-flex-bet-cent">
      <div class="d-flex-i-cent">
        <img class="icon-tx" src="@myImg/icon-tx.png" />
        <div>
          <div class="head-title">风吹麦浪</div>
          <div class="head-desc">欢迎来到东南亚大事件</div>
        </div>
      </div>
      <van-icon name="arrow" size="18" />
    </div>
  </div>

  <div class="content-wrap">
    <div class="release-content">
      <div class="release-title">我的发布</div>
      <div class="release-list d-flex-bet-cent">
        <div class="release-item" v-for="(item, idx) in releaseData" :key="idx">
          <img class="release-img" :src="getAssetsFile(`myImg/${item.icon}.png`)" />
          <div class="">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="link-list">
      <div class="link-item d-flex-bet-cent" v-for="(item, idx) in linkData" :key="idx" @click="navigateTo(item.url)">
        <div class="d-flex-i-cent">
          <img class="link-img" :src="getAssetsFile(`myImg/${item.icon}.png`)" />
          <div>{{ item.name }}</div>
        </div>
        <van-icon name="arrow" color="#A8A8A8" />
      </div>
    </div>
    <van-button round block @click="quitFun">退出登录</van-button>
  </div>
</template>

<script setup lang="ts">
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import { releaseData, linkData } from './data'
import { showConfirmDialog } from 'vant'
import 'vant/es/dialog/style'
const { navigateTo, navigateBack } = useRouterNavigation()

const quitFun = () => {
  showConfirmDialog({
    message: '您确认退出登录吗？'
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
      // on cancel
    })
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
