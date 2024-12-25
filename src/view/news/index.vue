<template>
  <div>
    <van-sticky>
      <div class="head-wrap">
        <h1 class="head-name d-flex-cent-cent">消息</h1>
      </div>
    </van-sticky>
    <div class="news-content">
      <div class="d-flex-bet-cent news-title">
        <span>消息列表</span>
        <img src="@commonImg/icon-del.png" />
      </div>
      <van-swipe-cell v-for="(item, idx) in dataArr" :key="idx">
        <div class="d-flex-bet news-info">
          <div class="d-flex">
            <div class="news-img">
              <img src="@detailImg/test-img.png" />
              <div class="dot" :class="item.isNews && 'active'"></div>
            </div>
            <div>
              <div class="d-flex">
                <div class="news-name">{{ item.name }}</div>
                <div class="company-name">{{ item.companyName }}</div>
              </div>
              <div class="news-txt">{{ item.txt }}</div>
            </div>
          </div>
          <div class="news-time">{{ item.time }}</div>
        </div>
        <template #right>
          <van-button square type="primary" text="标为未读" />
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
    <div>
      <div class="tabbar-wrap d-flex-bet-cent">
        <div class="tabbar-item" @click="navigateTo('/')">
          <img src="@homeImg/home-icon.png" />
          <p>首页</p>
        </div>
        <div class="tabbar-item" @click="navigateTo('/localChart')">
          <img src="@homeImg/chat-icon.png" />
          <p>闲聊</p>
        </div>
        <div class="tabbar-add" @click="navigateTo('/publishQuick')">
          <img src="@homeImg/tabbar-add.png" />
        </div>
        <div class="tabbar-item" @click="navigateTo('/news')">
          <img src="@homeImg/news-active-icon.png" />
          <p class="active">消息</p>
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
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import 'vant/es/dialog/style'
const { navigateTo, navigateBack } = useRouterNavigation()
const dataArr = [
  {
    img: 'test-img',
    name: '系统消息',
    txt: '嗨！在不在？',
    time: '14:09',
    isNews: true
  },
  {
    img: 'test-img',
    name: '福兴源家政',
    txt: '沟通方便，谢谢',
    time: '昨天',
    isNews: true
  },
  {
    img: 'test-img',
    name: '原装笔记本电脑',
    txt: '原装笔记本电脑',
    time: '6天前',
    isNews: false,
    companyName: 'xxx有限公司'
  },
  {
    img: 'test-img',
    name: '福兴源家政',
    txt: '沟通方便，谢谢',
    time: '昨天',
    isNews: true
  },
  {
    img: 'test-img',
    name: '原装笔记本电脑',
    txt: '原装笔记本电脑',
    time: '6天前',
    isNews: false,
    companyName: 'xxx有限公司'
  },
  {
    img: 'test-img',
    name: '福兴源家政',
    txt: '沟通方便，谢谢',
    time: '昨天',
    isNews: true
  },
  {
    img: 'test-img',
    name: '原装笔记本电脑',
    txt: '原装笔记本电脑',
    time: '6天前',
    isNews: false,
    companyName: 'xxx有限公司'
  }
  ,{
    img: 'test-img',
    name: '福兴源家政',
    txt: '沟通方便，谢谢',
    time: '昨天',
    isNews: true
  },
  {
    img: 'test-img',
    name: '原装笔记本电脑',
    txt: '原装笔记本电脑',
    time: '6天前',
    isNews: false,
    companyName: 'xxx有限公司'
  }
]
</script>

<style lang="less" scoped>
@import './index.less';
</style>
