<template>
  <div>
    <van-sticky>
      <div class="head-wrap d-flex-i-cent">
        <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
        <div class="head-search d-flex-bet-cent">
          <van-search v-model="value" placeholder="搜索关键词" />
          <div class="search-btn">搜索</div>
        </div>
      </div>
    </van-sticky>
    <div class="content">
      <div class="d-flex-bet-cent">
        <div class="history-name">历史搜索</div>
        <van-icon name="delete-o" color="#666666" />
      </div>
      <div class="history-list d-flex-i-cent d-wrap" :style="{ height: visible ? 'auto' : '72px' }">
        <div class="history-item" v-for="(item, idx) in data" :key="idx">
          {{ item }}
        </div>
        <div class="history-item arrow" @click="visible = !visible">
          <van-icon :name="visible ? 'arrow-up' : 'arrow-down'" color="#262626" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation from '@config/utils'
const { navigateBack } = useRouterNavigation()

const value = ref('')
const visible = ref(false)

const data = ['民宿', '公寓', '租车', '买房', '洗衣', '洗衣', '招聘', '二手', '店铺', '别墅', '买卖', '买卖', '民宿', '民宿', '民宿', '民宿', '民宿', '民宿', '民宿', '民宿', '民宿', '民宿', '民宿', '民宿']
</script>

<style lang="less" scoped>
@import './index.less';
</style>
