<template>
  <div class="head-wrap d-flex">
    <img class="left-arrow" src="@commonImg/left-arrow.png" />
    <h1 class="head-name">发布职位</h1>
  </div>
  <div class="form-wrap">
    <div class="form-item">
      <div class="area d-flex-bet-cent">
        <div class="d-flex-i-cent">
          <img class="area-icon" src="@commonImg/location-h-icon.png" />
          <span>所在地区</span>
        </div>
        <img class="area-arrow" src="@commonImg/right-arrow-s.png" />
      </div>
    </div>
    <van-field v-model="value1" label="供求" placeholder="请选择" disabled is-link input-align="right" />
    <van-field v-model="value1" label="工种" placeholder="请选择" disabled is-link input-align="right" />
    <van-field v-model="value1" label="性质" placeholder="请选择" disabled is-link input-align="right" />
    <van-field v-model="value1" label="电话" placeholder="请输入" input-align="right" />
    <van-field
    v-model="value1"
    rows="2"
    autosize
    :border="false"
    type="textarea"
    maxlength="200"
    placeholder="请填写发布内容"
    show-word-limit
  />
    <div class="form-btn">
      <van-button type="primary" round block>发布</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile } from '@config/utils'
const value1 = ref('')
</script>

<style lang="less" scoped>
@import './index.less';
</style>
