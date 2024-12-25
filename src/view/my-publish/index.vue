<template>
  <div>
    <van-sticky>
  <div class="head-wrap d-flex-bet">
    <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
    <h1 class="head-name">我的发布</h1>
    <div class="d-flex">
      <img class="fabu-icon" src="@myImg/icon-fabu.png" />
      <span class="head-txt">快捷发布</span>
    </div>
  </div>
  <van-tabs v-model:active="active">
      <van-tab v-for="(item, idx) in dataData" :key="idx" :title="item.name">
      </van-tab>
    </van-tabs>
</van-sticky>
  <div class="publish-content">
    <div class="publish-item" v-for="(subItem, subIdx) in dataData[active].data" :key="subIdx">
          <div :class="subItem.imgs.length>1?'':'d-flex'">
            <div class="publish-title">{{ subItem.title }}</div>
            <!-- <div :class="subItem.imgs.length>1?'d-flex-bet-cent d-wrap':''"> -->
              <img class="publish-img" :class="subItem.imgs.length>1?'more-img':''"  v-for="(img, idx) in subItem.imgs" :key="idx" src="@myImg/test-img.png" />
            <!-- </div> -->
          </div>
          <div class="d-flex-bet-cent publish-operate">
            <div>
              <img class="operate-icon" src="@myImg/icon-shanchu.png" />
              <img  class="operate-icon" src="@myImg/icon-bianji.png" />
            </div>
            <div class="d-flex-i-cent">
              <div class="d-flex-i-cent">
                <img class="publish-icon hot-icon" src="@myImg/icon-huo.png" />
                <span class="publish-num">152</span>
              </div>
              <div class="d-flex-i-cent">
                <img class="publish-icon" src="@myImg/icon-pinglun.png" />
                <span class="publish-num">5</span>
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
const { navigateBack } = useRouterNavigation()
const active = ref(0)

const dataData = ref([
  {
    name: '闲聊',
    data: [
      {
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [''],
        hot: 152,
        comment: '5'
      },
      {
        title: '各位街友好，谁知道Rebuplque陈医生上不上班？',
        imgs: [''],
        hot: 152,
        comment: '5'
      },
      {
        title: '11月09号周六徒步 Chateau de Chamarande城堡及公园',
        imgs: ['', '', ''],
        hot: 152,
        comment: '5'
      }
    ]
  },
  {
    name: '公寓',
    data: [
      {
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [''],
        hot: 152,
        comment: '5'
      }
    ]
  },
  {
    name: '别墅',
    data: [
      {
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5'
      }
    ]
  },
  {
    name: '租车',
    data: [
      {
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5'
      }
    ]
  },
  {
    name: '买卖',
    data: [
      {
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5'
      }
    ]
  },
  {
    name: '招聘',
    data: [
      {
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5'
      }
    ]
  },
  {
    name: '二手',
    data: [
      {
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5'
      }
    ]
  },
  {
    name: '附近',
    data: [
      {
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5'
      }
    ]
  }
])
</script>

<style lang="less" scoped>
@import './index.less';
</style>
