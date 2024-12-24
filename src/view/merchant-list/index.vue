<template>
  <div>
  <div class="detail-wrap">
    <div class="head-wrap d-flex-bet">
      <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
      <h1 class="head-name">商家列表</h1>
      <div>
        <img class="share-icon" @click="showShare = true" src="@detailImg/icon-kefu.png" />
        <img class="share-icon" @click="showShare = true" src="@detailImg/fenxiang.png" />
      </div>
    </div>
    <div class="info-wrap">
      <div class="padding">
        <div class="d-flex-i-cent">
          <div class="d-flex-i-cent info-position">
            <span>曼谷</span>
            <van-icon name="play" size="9" color="#555555" />
          </div>
          <div>
            <div class="info-currency">泰铢 THB</div>
            <div class="currency-tip">价格以100外币计</div>
          </div>
        </div>
        <div class="d-flex-bet">
          <div class="date-list">
            <div class="date-item" :class="item == 1 ? 'active' : ''" v-for="item in 12" :key="item">
              <div class="date-num">11-25</div>
              <div class="date-txt">今天</div>
              <div class="date-tip">急</div>
            </div>
          </div>
          <div class="calendar">
            <img class="icon-rili" src="@commonImg/icon-rili.png" />
            <div>日期</div>
            <van-icon name="play" size="9" color="#BBBBBB" />
          </div>
        </div>
      </div>
      <van-dropdown-menu>
        <van-dropdown-item title="选择币种">
          <div class="dropdown-conetnt">
            <div class="dropdown-title">选择币种</div>
            <div class="d-flex-i-cent d-wrap">
              <div class="modal-item" :class="currencyVal == idx ? 'active' : ''" v-for="(item, idx) in ['人民币', '泰铢', 'USDT']" :key="idx" @click="receiveTypeFun(idx, '1')">
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
          <div class="btn-wrap d-flex-bet-cent">
            <van-button plain>取消</van-button>
            <van-button type="primary">确定</van-button>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="泰铢"></van-dropdown-item>
        <van-dropdown-item title="付款方式">
          <div class="dropdown-conetnt">
            <div class="dropdown-title">付款方式</div>
            <div class="d-flex-i-cent d-wrap">
              <div class="modal-item" :class="paymentVal == idx ? 'active' : ''" v-for="(item, idx) in ['微信', '支付宝', '现金']" :key="idx" @click="receiveTypeFun(idx,'3')">
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
          <div class="btn-wrap d-flex-bet-cent">
            <van-button plain>取消</van-button>
            <van-button type="primary">确定</van-button>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="收款方式">
          <div class="dropdown-conetnt">
            <div class="dropdown-title">收款方式</div>
            <div class="d-flex-i-cent d-wrap">
              <div class="modal-item" :class="receiveTypeVal == idx ? 'active' : ''" v-for="(item, idx) in ['微信', '支付宝', '现金']" :key="idx" @click="receiveTypeFun(idx,'4')">
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
          <div class="btn-wrap d-flex-bet-cent">
            <van-button plain>取消</van-button>
            <van-button type="primary">确定</van-button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="content-wrap">
      <div class="merchant-list">
        <div class="merchant-item d-flex-bet" v-for="(item, idx) in data" :key="idx">
          <div>
            <div class="merchant-name ellipsis-one">{{ item.name }}</div>
            <div class="merchant-city">{{ item.city }} | {{ item.position }}</div>
            <div class="merchant-time">{{ item.time }}</div>
            <div>
              <span class="merchant-ticket" v-if="item.isTicket">券</span>
              <span class="merchant-exchange" v-if="item.isExchangeRate">金钻专享汇率</span>
              <span class="merchant-urgent" v-if="item.isUrgentFee">金钻免加急费</span>
              <span class="merchant-ppurse" v-if="item.isCoinPurse">零钱包</span>
            </div>
            <div>
              <span class="day-free">当天免费退</span>
              <span class="refund-rule">退款规则</span>
            </div>
          </div>
          <div>
            <div class="discounted-price">{{ item.discountedPrice }}</div>
            <div class="original-price">{{ item.originalPrice }}</div>
            <div class="reservation">预订</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <van-share-sheet v-model:show="showShare" :options="options" @select="onSelect" />
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import { data } from './data'

const { navigateTo, navigateBack } = useRouterNavigation()

const value = ref(0)

const showShare = ref(false)
const options = [
  { name: '微信好友', icon: getAssetsFile('commonImg/icon-wechat.png') },
  { name: '朋友圈', icon: getAssetsFile('commonImg/icon-moments.png') }
]
const onSelect = (option: any) => {
  alert(option.name)
  showShare.value = false
}

const receiveTypeVal = ref(1)
const currencyVal = ref(1)
const paymentVal = ref(1)
const receiveTypeFun = (idx: number, type: string) => {
  switch (type) {
    case '1':
      currencyVal.value = idx
      break
    case '2':
      receiveTypeVal.value = idx
      break
    case '3':
      paymentVal.value = idx
      break
    case '4':
      receiveTypeVal.value = idx
      break
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
