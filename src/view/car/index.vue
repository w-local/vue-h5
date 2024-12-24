<template>
  <div>
  <div class="head-wrap">
    <div class="d-flex-bet-cent">
      <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
      <h1 class="head-name">车辆</h1>
      <div class="d-flex-i-cent switch-content ellipsis-one">
        <img class="switch-icon" src="@commonImg/dizhi-icon.png" />
        <span class="switch-text">切换城市</span>
      </div>
    </div>
    <div class="head-list d-flex-bet-cent">
      <div>
        <img class="head-icon" src="@commonImg/icon-cheliang.png" />
        <div>租车</div>
        <div :class="type == '0' ? 'active' : ''"></div>
      </div>
      <div>
        <img class="head-icon" src="@commonImg/icon-maimai.png" />
        <div>买卖</div>
        <div :class="type == '1' ? 'active' : ''"></div>
      </div>
      <div @click="navigateTo('/publishCar')">
        <img class="head-icon" src="@commonImg/fbsj.png" />
        <div>发布</div>
      </div>
    </div>
  </div>
  <van-dropdown-menu>
    <van-dropdown-item title="价格">
      <div class="dropdown-conetnt">
        <div class="d-flex">
          <div class="dropdown-title">价格范围</div>
          <div class="price-range">¥{{ priceRange.join('-') }}</div>
        </div>
        <div class="d-flex-bet-cent price-txt">
          <span>¥0</span>
          <span>¥2000+</span>
        </div>
        <van-slider v-model="priceRange" :min="0" :max="2000" range>
          <template #button>
            <img src="@commonImg/slider-btn.png" />
          </template>
        </van-slider>
        <div class="d-flex-i-cent d-wrap">
          <div class="price-item" :class="selectPriceVal.includes(idx) ? 'active' : ''" v-for="(item, idx) in priceData" :key="idx" @click="selectPriceFun(idx)">
            <span>{{ item }}</span>
            <img v-show="selectPriceVal.includes(idx)" class="icon-selected" src="@commonImg/icon-selected.svg" />
          </div>
        </div>
      </div>
      <div class="btn-wrap d-flex-bet-cent">
        <van-button plain>清空</van-button>
        <van-button type="primary"> 查看房屋(193套可订) </van-button>
      </div>
    </van-dropdown-item>
    <van-dropdown-item title="车型">
      <div class="dropdown-conetnt">
        <div class="dropdown-title">车型</div>
        <div class="d-flex-i-cent d-wrap">
          <div class="modal-item" :class="selectModalVal.includes(idx) ? 'active' : ''" v-for="(item, idx) in carModalData" :key="idx" @click="selectModalFun(idx)">
            <span>{{ item }}</span>
            <img v-show="selectModalVal.includes(idx)" class="icon-selected" src="@commonImg/icon-selected.svg" />
          </div>
        </div>
      </div>
      <div class="btn-wrap d-flex-bet-cent">
        <van-button plain>清空</van-button>
        <van-button type="primary"> 查看车辆(88辆可订) </van-button>
      </div>
    </van-dropdown-item>
  </van-dropdown-menu>
  <div class="car-list">
    <div class="car-item" v-for="(item, idx) in dataData" :key="idx" @click="navigateTo('/carDetail?id='+item.id)">
      <img class="car-img" :src="getAssetsFile(`detailImg/${item.img}.png`)" />
      <div class="car-info">
        <div class="car-title ellipsis-one">{{ item.title }}</div>
        <div class="d-flex-bet-cent margin-tb">
          <div class="car-price">¥<span class="price-txt">4557</span></div>
          <div>
            <img class="phone-icon" src="@commonImg/phone-icon.png" />
            <span class="info-phone">{{ item.phone }}</span>
          </div>
        </div>
        <div class="d-flex-bet-cent">
          <div class="d-flex-i-cent">
            <div class="d-flex-i-cent">
              <img class="info-icon" src="@detailImg/icon-time.png" />
              <span class="info-text">4分钟前</span>
            </div>
            <div class="d-flex-i-cent">
              <img class="info-icon icon-eye" src="@detailImg/icon-eye.png" />
              <span class="info-text">浏览：298</span>
            </div>
          </div>
          <img class="icon-pinglun" alt="" src="@myImg/icon-pinglun.png" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import { priceData, carModalData, dataData } from './data'
import { useRoute } from 'vue-router'

const route = useRoute()
const type = ref(route.query.type)
const { navigateTo, navigateBack } = useRouterNavigation()
const selectPriceVal = ref<Array<number | null>>([])
const priceRange = ref<any>([])
const selectModalVal = ref<Array<number | null>>([])

const selectPriceFun = (idx: number) => {
  selectFun(idx, selectPriceVal.value)
}

const selectModalFun = (idx: number) => {
  selectFun(idx, selectModalVal.value)
}

const selectFun = (idx: number, type: any) => {
  const findIdx = type.findIndex((ele: number) => {
    return ele == idx
  })
  if (findIdx > -1) {
    type.splice(findIdx, 1)
  } else {
    type.push(idx)
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
