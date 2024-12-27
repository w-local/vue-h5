<template>
  <div>
    <van-sticky>
      <div class="head-wrap">
        <div class="d-flex-i-cent">
          <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
          <h1 class="head-name">二手</h1>
        </div>
        <div class="head-list d-flex-bet-cent">
          <div @click="navigateTo('/publishSecond')">
            <img class="head-icon" src="@commonImg/fbsj.png" />
            <div>发布二手</div>
          </div>
          <div>
            <img class="head-icon" src="@commonImg/lxkf.png" />
            <div>联系客服</div>
          </div>
        </div>
        <div class="head-search d-flex-bet-cent">
          <van-search v-model="value" placeholder="搜索关键词" />
          <div class="search-btn">搜索</div>
        </div>
      </div>
    </van-sticky>
    <div class="content-wrap">
      <div class="type-list d-flex-around-cent">
        <div class="type-item" v-for="(item, idx) in typeData" :key="idx" :class="idx == 0 ? 'active' : ''">
          <img class="type-img" :src="getAssetsFile(`secondImg/${item.icon}.png`)" />
          <div class="">{{ item.name }}</div>
        </div>
      </div>
      <img class="banner-img" src="@secondImg/banner-img1.png" />
      <div>
        <div class="d-flex-i-cent info-title">
          <img class="info-icon" src="@commonImg/new-icon.png" />
          <span>最新</span>
          <span class="info-tip">挑选您想要的</span>
        </div>
        <div class="d-flex-bet info-list">
          <div class="info-item" v-for="(item, idx) in infoData" :key="idx" @click="navigateTo('/secondDetail?id=' + item.id)">
            <div class="img-location">
              <img class="info-img" :src="getAssetsFile(`detailImg/${item.img}.png`)" />
              <div class="info-location d-flex-i-cent">
                <img class="location-icon" src="@commonImg/dizhi-icon.png" />
                <span>{{ item.location }}</span>
              </div>
            </div>
            <div class="info-name ellipsis-tow">{{ item.name }}</div>
            <div class="d-flex-bet-cent">
              <div class="info-price">
                <span>¥</span>
                <span class="price-txt">{{ item.price }}</span>
              </div>
              <div>
                <img class="phone-icon" src="@commonImg/phone-icon.png" />
                <span class="info-phone">{{ item.phone }}</span>
              </div>
            </div>
            <div class="d-flex-bet-cent mt">
              <div class="d-flex-i-cent">
                <img class="info-icon" :src="getAssetsFile(`detailImg/${item.icon}.png`)" />
                <div class="nick-name ellipsis-one">{{ item.nickname }}</div>
              </div>
              <div class="chat-btn">聊一聊</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import { typeData, infoData } from './data'

const { navigateTo, navigateBack } = useRouterNavigation()

const value = ref('')
</script>

<style lang="less" scoped>
@import './index.less';
</style>
