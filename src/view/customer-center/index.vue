<template>
  <div>
    <div class="head-wrap">
      <div class="d-flex-i-cent">
        <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack" />
        <h1 class="head-name">客服中心</h1>
      </div>
      <div class="welcome-center">
        <img class="center-img" src="@commonImg/customer-img.png" />
        <span class="center-txt"> 欢迎来到东南亚大事件客服中心 </span>
      </div>
    </div>
    <div class="content-wrap">
      <div class="consult">您近期暂无咨询</div>
      <div class="release-list d-flex-bet-cent">
        <div class="release-item" v-for="(item, idx) in releaseData" :key="idx" @click="navigateTo(item.url)">
          <img class="release-img" :src="getAssetsFile(`myImg/${item.icon}.png`)" />
          <div class="">{{ item.name }}</div>
        </div>
      </div>
      <div class="link-list">
        <img class="guess-img" src="@commonImg/guess-img.png" />
        <van-tabs v-model:active="active">
          <van-tab v-for="(item, idx) in linkData" :key="idx" :title="item.name"> </van-tab>
        </van-tabs>
        <div class="link-item d-flex-bet-cent" v-for="(item, idx) in linkData[active].data" :key="idx" @click="navigateTo(item.url)">
          <div class="d-flex-i-cent">
            <div>{{ item.name }}</div>
          </div>
          <van-icon name="arrow" color="#A8A8A8" />
        </div>
        <div class="refresh">
          <img class="refresh-img" src="@commonImg/refresh-img.png" />
          <span>换一批</span>
        </div>
      </div>
    </div>
    <div>
      <div class="custom-list d-flex-bet-cent">
        <div class="custom-item d-flex-cent-cent">
          <img class="custom-img" src="@commonImg/icon-dianhua.png" />
          <span>电话客服</span>
        </div>
        <div class="custom-item  d-flex-cent-cent">
          <img class="custom-img" src="@commonImg/icon-zixun.png" />
          <span>在线客服</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import { releaseData, linkData } from './data'
import { showConfirmDialog } from 'vant'
import { useRouter } from 'vue-router'
import 'vant/es/dialog/style'
const { navigateTo, navigateBack } = useRouterNavigation()
const active = ref(0)

</script>

<style lang="less" scoped>
@import './index.less';
</style>
