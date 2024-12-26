<template>
  <div>
    <van-sticky>
      <div class="head-wrap d-flex">
        <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
        <h1 class="head-name">发布民宿</h1>
      </div>
    </van-sticky>
    <div class="form-wrap">
      <div class="form-item d-flex-i-cent">
        <span>民宿</span>
        <div class="form-type">
          <span :class="modalVal == 'gy' ? 'active' : ''" @click="changeModal('gy')">公寓</span>
          <span :class="modalVal == 'bs' ? 'active' : ''" @click="changeModal('bs')">别墅</span>
        </div>
      </div>
      <van-field v-model="value1" label-width="5rem" label="标题" placeholder="请输入" />
      <van-field v-model="value1" label-width="5rem" label="价格" placeholder="请输入">
        <template #button>
          <span class="unit">元</span>
        </template>
      </van-field>
      <van-field v-model="value1" label-width="5rem" label="电话" placeholder="请输入" />
      <van-field v-model="value1" rows="2" :border="false" type="textarea" maxlength="200" placeholder="请填写介绍" show-word-limit />
      <div class="form-item">
        <div class="d-flex-bet-cent">
          <div class="d-flex-i-cent">
            <img class="required-icon" src="@commonImg/required-icon.png" />
            <span>图片</span>
          </div>
          <img class="add-icon" src="@commonImg/add-icon.png" />
        </div>
        <div class="img-content">
          <img class="img-item" v-for="idx in 18" :key="idx" src="@vicinityImg/test.png" />
        </div>
      </div>
      <div class="form-btn">
        <van-button type="primary" round block>发布</van-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'

const { navigateBack } = useRouterNavigation()
const value1 = ref()
const modalVal = ref('gy')

const changeModal = (type: string) => {
  modalVal.value = type
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
