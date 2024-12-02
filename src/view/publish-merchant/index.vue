<template>
  <div class="head-wrap d-flex">
    <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
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
      <div class="img-content">
        <img class="img-item" v-for="idx in 18" :key="idx" src="@vicinityImg/test.png" />
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
    <van-field v-model="fieldValue" label="分类" placeholder="请选择" readonly is-link input-align="right" @click="showPicker = true" />
    <div class="form-btn">
      <van-button type="primary" round block>发布</van-button>
    </div>
  </div>
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
  </van-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'

const { navigateBack } = useRouterNavigation()
const value1 = ref(0)
const fieldValue = ref('')
const showPicker = ref(false)

const columns = [
  { text: '餐厅', value: 'ct' },
  { text: '酒吧', value: 'jb' },
  { text: 'KTV', value: 'ktv' },
  { text: 'SPA', value: 'spa' },
  { text: '洗浴', value: 'xy' },
  { text: '理发', value: 'xf' },
  { text: '其他', value: 'qt' }
]

const onConfirm = ({ selectedOptions }: any) => {
  showPicker.value = false
  fieldValue.value = selectedOptions[0].text
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
