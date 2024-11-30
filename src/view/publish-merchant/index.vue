<template>
  <div class="head-wrap d-flex">
    <img class="left-arrow" src="@commonImg/left-arrow.png" />
    <h1 class="head-name">发布商家</h1>
  </div>
  <div class="form-wrap">
    <div class="form-item">
      <div class="d-flex-bet-cent">
        <div class="d-flex-i-cent">
          <img class="required-icon" src="@commonImg/required-icon.png" />
          <span>图片</span>
        </div>
        <img class="add-icon" src="@commonImg/add-icon.png" />
      </div>
      <div>
        <img class="img-item" v-for="idx in 8" :key="idx" src="@vicinityImg/test.png" />
      </div>
    </div>
    <div class="form-item">
      <div class="area d-flex-bet-cent">
        <div class="d-flex-i-cent">
          <img class="area-icon" src="@commonImg/location-h-icon.png" />
          <span>所在地区</span>
        </div>
        <img class="area-arrow" src="@commonImg/right-arrow-s.png" />
      </div>
    </div>
    <van-field v-model="value1" label="标题" placeholder="请输入" input-align="right" />
    <van-field v-model="value1" label="地址" placeholder="请输入" input-align="right" />
    <van-field v-model="value1" label="电话" placeholder="请输入" input-align="right" />
    <van-field v-model="value1" label="分类" placeholder="请输入" disabled right-icon="arrow" input-align="right" />
    <div class="form-btn">
      <van-button type="primary" round block>发布</van-button>
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
