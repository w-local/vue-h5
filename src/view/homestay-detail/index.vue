<template>
  <div>
  <div class="detail-wrap">
    <div class="head-wrap d-flex-bet">
      <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
      <h1 class="head-name">民宿详情</h1>
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
    <div class="content-wrap">
      <div class="d-flex-bet-cent">
          <div class="homestay-price">¥<span class="price-txt">4557</span></div>
          <div class="homestay-modal">四卧室</div>
        </div>
      <div class="info-data d-flex-bet">
        <div class="info-name ellipsis-tow">健康之地度假村及水疗中心</div>
        <div class="d-flex-bet-cent">
          <div class="d-flex-i-cent">
            <div class="score">4.6</div>
            <div class="d-flex-i-cent pinglun">
              <img class="icon-pinglun" alt="" src="@myImg/icon-pinglun.png" />
              <span>5</span>
            </div>
          </div>
          <div>
            <img class="phone-icon" src="@commonImg/phone-icon.png" />
            <span class="info-phone">+6629876543</span>
          </div>
        </div>
      </div>
      <div class="introduce-content">
        <div class="d-flex-i-cent">
          <img class="introduce-icon" src="@detailImg/icon-che.png" />
          <span class="introduce-name">民宿介绍</span>
        </div>
        <div class="introduce-txt">
          我的别墅在中天海边12巷，距离海边150米，位置非常好，内部配备了超大泳池，KTV，私人中文管家，当晚赠送一餐海鲜盛宴需要的请预约。
我的别墅在中天海边12巷，距离海边150米，位置非常好，内部配备了超大泳池，KTV，私人中文管家，当晚赠送一餐海鲜盛宴需要的请预约。
        </div>
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
