<template>
  <div>
    <van-sticky>
      <div class="head-wrap d-flex">
        <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
        <h1 class="head-name">发布二手</h1>
      </div>
    </van-sticky>
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
      <van-field v-model="value1" rows="2" :border="false" type="textarea" maxlength="200" placeholder="在这里详细描述一下宝贝的品牌型号、转手原因、入手渠道、规格尺寸、新旧程度和使用感受吧～" show-word-limit />
      <div class="form-item">
        <div class="area d-flex-bet-cent">
          <div class="d-flex-i-cent">
            <img class="area-icon" src="@commonImg/location-h-icon.png" />
            <span class="area-name">所在地区</span>
          </div>
          <img class="area-arrow" src="@commonImg/right-arrow-s.png" />
        </div>
      </div>
      <van-field v-model="value1" label-width="5rem" label="价格" input-align="right" placeholder="请输入">
        <template #button>
          <span class="unit">元</span>
        </template>
      </van-field>
      <!-- </div> -->
      <van-field v-model="value1" label-width="5rem" label="电话" input-align="right" placeholder="请输入" />
      <van-field v-model="fieldValue" label="分类" placeholder="请选择"  is-link readonly input-align="right" @click="showPicker = true" />
      <div class="form-btn">
        <van-button type="primary" round block>发布</van-button>
      </div>
    </div>
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker :columns="columns" title="选择分类" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'

const { navigateBack } = useRouterNavigation()
const value1 = ref()
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
