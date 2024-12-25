<template>
  <div>
    <van-sticky>
    <div class="head-wrap d-flex">
      <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
      <h1 class="head-name">发布车辆</h1>
    </div>
  </van-sticky>
    <div class="form-wrap">
      <div class="form-item d-flex-i-cent">
        <span>车辆</span>
        <div class="form-type">
          <span :class="modalVal == 'zc' ? 'active' : ''" @click="changeModal('zc')">租车</span>
          <span :class="modalVal == 'mm' ? 'active' : ''" @click="changeModal('mm')">买卖</span>
        </div>
      </div>
      <van-field v-model="value1" label-width="5rem" label="标题" placeholder="请输入" />
      <div class="field">
        <van-field v-model="value1" label-width="5rem" label="价格" placeholder="请输入" />
        <span class="unit">元</span>
      </div>
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
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
  </van-popup>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'

const { navigateBack } = useRouterNavigation()
const value1 = ref()
const modalVal = ref('zc')
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

const changeModal = (type: string) => {
  modalVal.value = type
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
