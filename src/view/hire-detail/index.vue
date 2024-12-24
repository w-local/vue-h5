<template>
    <div>
  <div class="head-wrap">
    <div class="d-flex-i-cent">
      <img class="left-arrow" src="@commonImg/left-arrow.png"  @click="navigateBack()" />
      <h1 class="head-name">餐饮</h1>
    </div>
    <div class="head-search d-flex-bet-cent">
      <van-search v-model="value" placeholder="搜索关键词" />
      <div class="search-btn">搜索</div>
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="areaData" />
      <van-dropdown-item v-model="value2" :options="supplyDemandData" />
      <van-dropdown-item v-model="value2" :options="workTypeData" />
      <van-dropdown-item v-model="value2" :options="natureData" />
    </van-dropdown-menu>
  </div>

  <div class="content-wrap">
    <img class="banner-img" src="@hireImg/banner-img.png" />
    <div>
      <div class="info-item" v-for="(item, idx) in infoData" :key="idx"  @click="navigateTo('/jobDetail?id='+item.id)">
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
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation from '@config/utils'
import { areaData, supplyDemandData, workTypeData, natureData, infoData } from './data'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref(route.query.id)
console.log(id.value,'id')
const {navigateTo, navigateBack } = useRouterNavigation()
const value = ref('');
const value1 = ref(0)
const value2 = ref('a')
</script>

<style lang="less" scoped>
@import './index.less';
</style>
