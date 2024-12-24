<template>
  <div>
  <div class="head-wrap d-flex-bet">
    <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
    <h1 class="head-name">我的收藏</h1>
    <div class="d-flex">
      <img class="fabu-icon" src="@myImg/icon-del.png" />
      <span class="head-txt">删除</span>
    </div>
  </div>
  <div class="publish-content">
    <van-tabs v-model:active="active">
      <van-tab v-for="(item, idx) in dataData" :key="idx" :title="item.name">
        <div class="publish-item" v-for="(subItem, subIdx) in item.data" :key="subIdx" @click="linkFun(item.url,subItem.id)">
          <div :class="subItem.imgs.length > 1 ? '' : 'd-flex'">
            <div class="publish-title">{{ subItem.title }}</div>
            <!-- <div :class="subItem.imgs.length>1?'d-flex-bet-cent d-wrap':''"> -->
            <img class="publish-img" :class="subItem.imgs.length > 1 ? 'more-img' : ''" v-for="(img, idx) in subItem.imgs" :key="idx" src="@myImg/test-img.png" />
            <!-- </div> -->
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
      </van-tab>
    </van-tabs>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
const {navigateTo, navigateBack } = useRouterNavigation()
const active = ref(0)

const linkFun=(url:string,id:string) =>{
  const pathUrl = url.includes('?')?url+'&id='+id:url+'?id='+id
  navigateTo(pathUrl)
}

const dataData = ref([
  {
    name: '闲聊',
    url: '/localChart',
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
    name: '公寓',
    url: '/homestay?type=0',
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
  },
  {
    name: '别墅',
    url: '/homestay?type=1',
    data: [
      {
        id: '1',
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5',
        nickname: '长乐未央长乐未央2',
        time: '半个小时前'
      }
    ]
  },
  {
    name: '租车',
    url: '/car?type=0',
    data: [
      {
        id: '1',
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5',
        nickname: '长乐未央长乐未央2',
        time: '半个小时前'
      }
    ]
  },
  {
    name: '买卖',
    url: '/car?type=1',
    data: [
      {
        id: '1',
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5',
        nickname: '长乐未央长乐未央2',
        time: '半个小时前'
      }
    ]
  },
  {
    name: '招聘',
    url: '/hire',
    data: [
      {
        id: '1',
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5',
        nickname: '长乐未央长乐未央2',
        time: '半个小时前'
      }
    ]
  },
  {
    name: '二手',
    url: '/hire',
    data: [
      {
        id: '1',
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
        hot: 152,
        comment: '5',
        nickname: '长乐未央长乐未央2',
        time: '半个小时前'
      }
    ]
  },
  {
    name: '附近',
    url: '/vicinity',
    data: [
      {
        id: '1',
        title: '巴黎地铁6号线车顶“冲浪”， 两人被捕',
        imgs: [],
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
