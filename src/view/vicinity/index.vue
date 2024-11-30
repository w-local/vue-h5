<template>
  <div class="head-wrap">
    <div class="d-flex-i-cent">
      <img class="left-arrow" src="@commonImg/left-arrow.png" />
      <h1 class="head-name">附近</h1>
    </div>
    <div class="head-list d-flex-bet-cent">
      <div>
        <img class="head-icon" src="@commonImg/fbsj.png" />
        <div>发布商家</div>
      </div>
      <div>
        <img class="head-icon" src="@commonImg/lxkf.png" />
        <div>联系客服</div>
      </div>
    </div>
    <div class="head-search d-flex-bet-cent">
      <div class="d-flex-i-cent">
        <img class="search-icon" src="@commonImg/search-icon.png" />
        <span>搜索关键词</span>
      </div>
      <div class="search-btn">搜索</div>
    </div>
  </div>

  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" :options="areaData" />
    <van-dropdown-item v-model="value2" :options="typeData" />
  </van-dropdown-menu>

  <div class="content-wrap">
    <img class="banner-img" src="@vicinityImg/banner-img.png" />
    <div>
      <div class="info-item d-flex" v-for="(item, idx) in infoData" :key="idx">
        <img class="info-img" :src="getAssetsFile(`vicinityImg/${item.img}.png`)" />
        <div class="info-right">
          <div class="d-flex-bet-cent">
            <div class="info-name">
              {{ item.name }}
            </div>
            <div class="info-location d-flex-i-cent">
              <img class="location-icon" src="@commonImg/location-icon.png" />
              <span>{{ item.location }}</span>
            </div>
          </div>
          <div class="info-region ellipsis-tow">{{ item.region }}</div>
          <div class="d-flex-bet-cent">
            <div class="info-type">{{ item.type }}</div>
            <div>
              <img class="phone-icon" src="@commonImg/phone-icon.png" />
              <span class="info-phone">{{ item.phone }}</span>
            </div>
          </div>
        </div>
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
