<template>
  <div class="detail-wrap">
    <div class="head-wrap d-flex-bet">
      <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
      <h1 class="head-name">商家列表</h1>
      <div>
        <img class="share-icon" @click="showShare = true" src="@detailImg/icon-kefu.png" />
        <img class="share-icon" @click="showShare = true" src="@detailImg/fenxiang.png" />
      </div>
    </div>
    <div class="content-wrap">
      <div class="merchant-list">
        <div class="merchant-item" v-for="(item,idx) in data" :key="idx">

        </div>
      </div>
    </div>
  </div>
  <van-share-sheet v-model:show="showShare" :options="options" @select="onSelect" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import { useRoute } from 'vue-router'
import {data} from './data'

const route = useRoute()
const id = ref(route.query.id)
console.log(id.value, 'id')
const { navigateTo, navigateBack } = useRouterNavigation()

const value = ref(0)

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
