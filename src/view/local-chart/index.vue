<template>
  <div>
    <van-sticky>
      <div class="head-wrap">
        <div class="d-flex-bet-cent">
          <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
          <h1 class="head-name">本地闲聊</h1>
          <div class="d-flex-i-cent switch-content ellipsis-one">
            <img class="switch-icon" src="@commonImg/dizhi-icon.png" />
            <span class="switch-text">切换城市</span>
          </div>
        </div>
        <div class="head-list d-flex-bet-cent">
          <div>
            <img class="head-icon" src="@commonImg/fbsj.png" />
            <div>发布闲聊</div>
            <div class="active"></div>
          </div>
          <div>
            <img class="head-icon" src="@commonImg/lxkf.png" />
            <div>联系客服</div>
          </div>
        </div>
      </div>
      <van-tabs v-model:active="active">
        <van-tab v-for="(item, idx) in dataData" :key="idx" :title="item.name"></van-tab>
      </van-tabs>
    </van-sticky>
    <div class="publish-content">
      <div class="publish-item" v-for="(subItem, subIdx) in dataData[active].data" :key="subIdx" @click="navigateTo(`/localChartDetail?id=${subItem.id}`)">
        <div :class="subItem.imgs.length > 1 ? '' : 'd-flex'">
          <div class="publish-title">{{ subItem.title }}</div>
          <img class="publish-img" :class="subItem.imgs.length > 1 ? 'more-img' : ''" v-for="(img, idx) in subItem.imgs" :key="idx" src="@myImg/test-img.png" />
        </div>
        <div class="d-flex-bet-cent publish-operate">
          <div class="d-flex-i-cent">
            <span class="publish-txt publish-nickname ellipsis-one">{{ subItem.nickname }}</span>
            <span class="publish-txt">{{ subItem.time }} 发布</span>
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
    <div>
      <div class="tabbar-wrap d-flex-bet-cent">
        <div class="tabbar-item" @click="navigateTo('/')">
          <img src="@homeImg/home-icon.png" />
          <p>首页</p>
        </div>
        <div class="tabbar-item" @click="navigateTo('/localChart')">
          <img src="@homeImg/chat-active-icon.png" />
          <p class="active">闲聊</p>
        </div>
        <div class="tabbar-add" @click="navigateTo('/publishQuick')">
          <img src="@homeImg/tabbar-add.png" />
        </div>
        <div class="tabbar-item" @click="navigateTo('/news')">
          <img src="@homeImg/news-icon.png" />
          <p>消息</p>
        </div>
        <div class="tabbar-item" @click="navigateTo('/my')">
          <img src="@homeImg/my-icon.png" />
          <p>我的</p>
        </div>
      </div>
      <div class="round"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
const { navigateTo, navigateBack } = useRouterNavigation()
const active = ref(0)

const dataData = ref([
  {
    name: '最新',
    data: [
      {
        id: '11',
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [''],
        hot: 152,
        comment: '5',
        nickname: '长乐未央2长乐未央',
        time: '半个小时前'
      },
      {
        id: '11',
        title: '各位街友好，谁知道Rebuplque陈医生上不上班？',
        imgs: [''],
        hot: 152,
        comment: '5',
        nickname: '长乐未央',
        time: '半个小时前'
      },
      {
        id: '11',
        title: '11月09号周六徒步 Chateau de Chamarande城堡及公园',
        imgs: ['', '', ''],
        hot: 152,
        comment: '5',
        nickname: '长乐未央长乐未央2',
        time: '半个小时前'
      }
    ]
  },
  {
    name: '最热',
    data: [
      {
        id: '11',
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [''],
        hot: 152,
        comment: '5',
        nickname: '长乐未央长乐未央2',
        time: '半个小时前'
      }
    ]
  }
])
</script>

<style lang="less" scoped>
@import './index.less';
</style>
