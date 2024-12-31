<template>
  <div>
  <div class="d-flex-around-cent quick-list">
    <div class="quick-item" v-for="(item, idx) in data" :key="idx" @click="navigateTo(item.url)">
      <img :src="getAssetsFile(`homeImg/${item.icon}.png`)" />
      <div>{{ item.name }}</div>
    </div>
    <van-icon color="#999" size="32" name="close" @click="navigateBack()" />
  </div>
  <img class="quick-img" src="@homeImg/quick-img.png" />
</div>
</template>

<script setup lang="ts">
import { data } from './data'
import useRouterNavigation, { getAssetsFile } from '@config/utils'

const { navigateTo, navigateBack } = useRouterNavigation()
</script>

<style lang="less" scoped>
@import './index.less';
</style>
