<template>
  <div>
  <div class="detail-wrap">
    <div class="head-wrap d-flex-bet">
      <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
      <h1 class="head-name">职位详情</h1>
      <img class="share-icon" @click="showShare = true" src="@detailImg/fenxiang.png" />
    </div>
    <div class="info-content">
      <div class="info-data">
        <div class="info-name">点单日餐请串烧师傅，全工或半工，本人居留带 厨房热菜，有意者电话联系</div>
        <div class="d-flex-bet-cent">
          <div class="d-flex-i-cent">
            <img class="info-icon" src="@detailImg/icon-time.png" />
            <span class="info-text">4分钟前</span>
          </div>
          <div class="d-flex-i-cent">
            <img class="info-icon icon-eye" src="@detailImg/icon-eye.png" />
            <span class="info-text">浏览：298</span>
          </div>
          <div>
            <img class="phone-icon" src="@commonImg/phone-icon.png" />
            <span class="info-phone">+6629876543</span>
          </div>
        </div>
      </div>
      <div class="job-detail d-flex-i-cent">
        <div class="item-detail">
          <span>地区：</span>
          <span>曼谷</span>
        </div>
        <div class="item-detail">
          <span>供求：</span>
          <span>招聘</span>
        </div>
        <div class="item-detail">
          <span>性质：</span>
          <span>全工</span>
        </div>
        <div class="item-detail">
          <span>工种：</span>
          <span>洗碗/杂工，服杂工</span>
        </div>
      </div>
      <div class="job-desc">
        <div class="d-flex-i-cent">
          <img class="desc-icon" src="@detailImg/icon-jtms.png" />
          <span class="desc-name">图片介绍</span>
        </div>
        <div class="job-txt">点单日餐请串烧师傅，全工或半工，本人居留带处方热菜 有意者电话联系，也可通过微信和邮箱联系： GDG2132323123</div>
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
