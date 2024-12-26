<template>
  <div>
  <div class="head-wrap d-flex">
    <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
    <h1 class="head-name">发布职位</h1>
  </div>
  <div class="form-wrap">
    <div class="form-item">
      <div class="area d-flex-bet-cent">
        <div class="d-flex-i-cent">
          <img class="area-icon" src="@commonImg/location-h-icon.png" />
          <span class="area-name">所在地区</span>
        </div>
        <img class="area-arrow" src="@commonImg/right-arrow-s.png" />
      </div>
    </div>
    <van-field v-model="fieldValue" label="供求" placeholder="请选择" readonly is-link input-align="right" @click="showPicker = true" />
    <van-field v-model="fieldValue" label="工种" placeholder="请选择" readonly is-link input-align="right" @click="showPicker = true" />
    <van-field v-model="fieldValue" label="性质" placeholder="请选择" readonly is-link input-align="right" @click="showPicker = true" />
    <van-field v-model="value1" label="电话" placeholder="请输入" input-align="right" />
    <van-field v-model="value1" rows="2" autosize :border="false" type="textarea" maxlength="200" placeholder="请填写发布内容" show-word-limit />
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
import useRouterNavigation from '@config/utils'

const { navigateBack } = useRouterNavigation()
const value1 = ref('')

const fieldValue = ref('')
const showPicker = ref(false)

const columns = [
  { text: '酒店用品', value: 'jd' },
  { text: '餐厅用品', value: 'ct' },
  { text: '母婴用品', value: 'my' },
  { text: '汽车配件', value: 'qc' },
  { text: '家具家电', value: 'jj' },
  { text: '数码产品', value: 'sm' },
  { text: '女生用品', value: 'ns' },
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
