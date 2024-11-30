<template>
  <div class="detail-wrap">
    <div class="head-content d-flex-bet-cent">
      <img class="left-arrow" src="@commonImg/left-arrow.png" />
      <h1 class="head-name">发布商家</h1>
      <img class="share-icon" src="@detailImg/fenxiang.png" />
    </div>
    <img class="banner-img" src="@detailImg/test-img.png" />
    <div class="content-wrap">
      <div class="info-data">
        <div class="d-flex-bet-cent">
          <div class="info-name">曼谷TKV</div>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile } from '@config/utils'
import { areaData, typeData, infoData } from './data'
const value1 = ref(0)
const value2 = ref('a')
</script>

<style lang="less" scoped>
@import './index.less';
</style>
