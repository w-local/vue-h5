<template>
  <div class="head-wrap">
    <div class="d-flex-i-cent">
      <img class="left-arrow" src="@commonImg/left-arrow.png" />
      <h1 class="head-name">招聘</h1>
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


  <div class="content-wrap">
    <div class="type-list d-flex-i-cent">
      <div class="type-item" v-for="(item, idx) in typeData" :key="idx" :style="{ background: `${item.bg}` }">
        <img class="type-img" :src="getAssetsFile(`hireImg/${item.icon}.png`)" />
        <div class="">{{ item.name }}</div>
      </div>
    </div>
    <img class="banner-img" src="@hireImg/banner-img.png" />
    <div>
      <div class="d-flex-i-cent info-title">
      <img class="info-icon" src="@commonImg/new-icon.png" />
      <span>最新</span>
    </div>
      <div class="info-item" v-for="(item, idx) in infoData" :key="idx">
        <div class="info-name ellipsis-one">
          {{ item.name }}
        </div>
        <div class="d-flex-bet-cent mtb">
          <div class="d-flex-i-cent">
            <div class="work-item" v-for="(subItem, subIdx) in item.workType" :key="subIdx">
              {{ subItem }}
            </div>
          </div>
          <div class="info-location d-flex-i-cent">
            <img class="location-icon" src="@commonImg/location-icon.png" />
            <span>{{ item.location }}</span>
          </div>
        </div>
        <div class="d-flex-bet-cent">
          <div class="d-flex-i-cent">
            <div class="info-type" :class="item.type == '招聘' ? 'type-hire' : ''">{{ item.type }}</div>
            <span class="info-time">4分钟前</span>
          </div>
          <div>
            <img class="phone-icon" src="@commonImg/phone-icon.png" />
            <span class="info-phone">{{ item.phone }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile } from '@config/utils'
import { typeData, infoData } from './data'
// const value1 = ref(0)
// const value2 = ref('a')
</script>

<style lang="less" scoped>
@import './index.less';
</style>
