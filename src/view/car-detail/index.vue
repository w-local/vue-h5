<template>
  <div>
  <div class="detail-wrap">
    <div class="head-wrap d-flex-bet">
      <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
      <h1 class="head-name">车辆详情</h1>
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
          <div class="car-price">¥<span class="price-txt">4557</span></div>
          <div class="car-modal">五座</div>
        </div>
      <div class="info-data d-flex-bet">
       
        <div class="info-name ellipsis-tow">【泰文司机包车】丰田通勤田通勤田田通勤田通勤田通勤田通通勤田通勤包车Toyota</div>
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
          <span class="introduce-name">车辆介绍</span>
        </div>
        <div class="introduce-txt" v-for="(item, idx) in detailData">
          {{ item }}
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
const detailData = ref(['周至少提前1天预订(提前24小时)', '用车全程司机中泰文服务，沟通顺畅，安心出行', '司机工作时长10小时/天(显谷市内、曼谷-外府)', '日包全包服务，费用已包含油费/高速费/停车费，不含 超时费/过'])
</script>

<style lang="less" scoped>
@import './index.less';
</style>
