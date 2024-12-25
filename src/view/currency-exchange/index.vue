<template>
  <div>
    <div class="detail-wrap">
      <van-sticky>
        <div class="head-wrap d-flex-bet">
          <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
          <h1 class="head-name">货币兑换</h1>
          <img class="share-icon" @click="showShare = true" src="@detailImg/fenxiang.png" />
        </div>
      </van-sticky>
      <div class="content-wrap">
        <div class="d-flex currency-content">
          <div>
            <div class="currency">{{ fieldValue1.value }}</div>
            <div class="d-flex-i-cent" @click="changeCurrency(0)">
              <span class="currency-txt">{{ fieldValue1.text }}</span>
              <van-icon size="10" name="play" />
            </div>
            <van-field v-model="value" type="number" />
            <div class="d-flex-i-cent" @click="showAreaPicker = true">
              <span class="currency-txt">{{ fieldValueArea.text }}</span>
              <van-icon size="10" name="play" />
            </div>
          </div>
          <div>
            <div class="currency">{{ fieldValue2.value }}</div>
            <div class="d-flex-i-cent" @click="changeCurrency(1)">
              <span class="currency-txt">{{ fieldValue2.text }}</span>
              <van-icon size="10" name="play" />
            </div>
            <van-field v-model="value" type="number" />
            <div class="d-flex-i-cent" @click="showDatePicker = true">
              <div class="currency-txt">
                <span>{{ fieldValueDate[0] }}月{{ fieldValueDate[1] }}日</span>
                <span class="date">今天</span>
              </div>
              <van-icon size="10" name="play" />
            </div>
          </div>
        </div>
        <van-button type="primary" block round @click="navigateTo('/merchantList')">查看商家</van-button>
        <div class="calculator-content">
          <div class="calculator-head" @click="changeShow">
            <img class="arrow-bottom" src="@currencyImg/icon.png" />
          </div>
          <div v-show="showCurrency" class="d-flex-bet-cent d-wrap calculator">
            <div class="d-flex-cent-cent calculator-img" v-for="(item, idx) in currencyData" :key="idx">
              <img :style="{ marginTop: idx == 14 ? '78px' : '0' }" :src="getAssetsFile(`currencyImg/${item}.png`)" />
            </div>
            <div class="calculator-img"></div>
          </div>
        </div>
      </div>
    </div>
    <van-share-sheet v-model:show="showShare" :options="options" @select="onSelect" />
    <!-- 货币选择 -->
    <van-popup v-model:show="showPicker" destroy-on-close round position="bottom">
      <van-picker v-model="currentCurrency" :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
    <!-- 地区选择 -->
    <van-popup v-model:show="showAreaPicker" destroy-on-close round position="bottom">
      <van-picker v-model="currentArea" :columns="areaColumns" @cancel="showPicker = false" @confirm="onConfirmArea" />
    </van-popup>
    <!-- 日期选择 -->
    <van-popup v-model:show="showDatePicker" destroy-on-close round position="bottom">
      <van-date-picker v-model="currentDate" title="选择日期" :columns-type="['month', 'day']" @confirm="onConfirmDate" />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref(route.query.id)
console.log(id.value, 'id')
const { navigateTo, navigateBack } = useRouterNavigation()

const value = ref(0)

const currencyData = ref(['7', '8', '9', 'jia', 'qingchu', '4', '5', '6', 'jian', 'c', '1', '2', '3', 'cheng', 'dengyu', '00', '0', 'dian', 'chu'])

const showCurrency = ref(false)
const changeShow = () => {
  showCurrency.value = !showCurrency.value
}

const showShare = ref(false)
const options = [
  { name: '微信好友', icon: getAssetsFile('commonImg/icon-wechat.png') },
  { name: '朋友圈', icon: getAssetsFile('commonImg/icon-moments.png') }
]
const onSelect = (option: any) => {
  alert(option.name)
  showShare.value = false
}

//货币选择
const currencyType = ref(0)
const fieldValue1 = ref({
  text: '人民币',
  value: 'CNY'
})
const fieldValue2 = ref({
  text: '泰铢',
  value: 'THB'
})
const columns = [
  { text: '人民币', value: 'CNY' },
  { text: '泰铢', value: 'THB' }
]
const currentCurrency = ref(['CNY'])
const showPicker = ref(false)
const changeCurrency = (type: number) => {
  currencyType.value = type
  currentCurrency.value = type == 1 ? [fieldValue2.value.value] : [fieldValue1.value.value]
  showPicker.value = true
}
const onConfirm = ({ selectedOptions }: any) => {
  showPicker.value = false
  if (currencyType.value == 1) {
    fieldValue2.value = selectedOptions[0]
  } else {
    fieldValue1.value = selectedOptions[0]
  }
}

//地区选择
const areaColumns = ref([
  { text: '中国', value: 'zg' },
  { text: '曼谷', value: 'mg' }
])
const showAreaPicker = ref(false)
const fieldValueArea = ref({
  text: '曼谷',
  value: 'mg'
})
const currentArea = ['mg']
const onConfirmArea = ({ selectedOptions }: any) => {
  showAreaPicker.value = false
  fieldValueArea.value = selectedOptions[0]
}

// 日期选择
const showDatePicker = ref(false)
const currentDate = ref(['12', '20'])
const fieldValueDate = ref(['12', '20'])
const onConfirmDate = ({ selectedValues }: any) => {
  showDatePicker.value = false
  fieldValueDate.value = selectedValues
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
