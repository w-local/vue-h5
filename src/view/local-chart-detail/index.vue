<template>
  <div>
    <div class="detail-wrap">
      <van-sticky>
      <div class="head-wrap d-flex-bet">
        <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
        <h1 class="head-name">闲聊详情</h1>
        <img class="share-icon" @click="showShare = true" src="@detailImg/fenxiang.png" />
      </div>
    </van-sticky>
      <div class="content-wrap">
        <div class="d-flex-bet-end">
          <div class="d-flex-i-cent">
            <img class="header-img" src="@detailImg/test-img.png" />
            <div>
              <div class="nickname">泰国华侨</div>
              <div class="detail-time">7月10日</div>
            </div>
          </div>
          <div class="d-flex">
            <div class="d-flex-i-cent">
              <img class="publish-icon" src="@commonImg/location-h-icon.png" />
              <span class="publish-num">曼谷</span>
            </div>
            <div class="d-flex-i-cent">
              <img class="publish-icon icon-eye" src="@detailImg/icon-eye.png" />
              <span class="publish-num">298</span>
            </div>
            <div class="d-flex-i-cent">
              <img class="publish-icon hot-icon" src="@myImg/icon-huo.png" />
              <span class="publish-num">152</span>
            </div>
          </div>
        </div>
        <div class="content-title">友友们，颈椎有点扭伤了，两个多月了，吃药也 没好大家知道哪里能看吗？推荐下，谢谢！</div>
        <div class="content-desc">友友们，颈椎有点扭伤了，两个多月了，吃药也 没好大家知道哪里能看吗？推荐下，谢谢！</div>
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="idx in 4" ::key="idx">
            <img class="banner-img" src="@detailImg/test-img.png" />
          </van-swipe-item>
          <template #indicator="{ active, total }">
            <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
          </template>
        </van-swipe>
        <div class="comment-content">
          <div class="d-flex-i-cent">
            <img class="icon-qbpinglun" src="@detailImg/icon-qbpinglun.png" />
            <span class="all-comment">全部评论</span>
            <span class="comment-num">(101条)</span>
          </div>
          <div class="comment-list">
            <div class="comment-item" v-for="(item, idx) in commentData" :key="idx">
              <div class="d-flex">
                <img class="comment-icon" :src="getAssetsFile(`myImg/${item.icon}.png`)" />
                <div class="d-flex-bet comment-right">
                  <div>
                    <div class="comment-name">{{ item.name }}</div>
                    <div class="comment-txt">{{ item.comment }}</div>
                    <div class="d-flex">
                      <div class="comment-time">{{ item.time }}</div>
                      <div class="comment-location">{{ item.location }}</div>
                      <div class="comment-author" v-if="item.isAuthor">作者回复了</div>
                    </div>
                  </div>
                  <div class="text-right">
                    <img class="icon-like" src="@detailImg/icon-like.png" />
                    <div class="like-num">{{ item.likeNum ? item.likeNum : '首赞' }}</div>
                    <div class="comment-ta">回复Ta</div>
                  </div>
                </div>
              </div>
              <div class="d-flex sub-item" v-for="(subItem, subIdx) in item.data" :key="subIdx">
                <img class="comment-icon" :src="getAssetsFile(`myImg/${subItem.icon}.png`)" />
                <div class="d-flex-bet comment-right">
                  <div>
                    <div class="d-flex">
                      <div class="comment-name">{{ subItem.name }}</div>
                      <div class="comment-author" v-if="subItem.isAuthor">作者</div>
                    </div>

                    <div class="comment-txt">{{ subItem.comment }}</div>
                    <div class="d-flex">
                      <div class="comment-time">{{ subItem.time }}</div>
                      <div class="comment-location">{{ subItem.location }}</div>
                    </div>
                  </div>
                  <div class="text-right">
                    <img class="icon-like" src="@detailImg/icon-like.png" />
                    <div class="like-num">{{ subItem.likeNum ? subItem.likeNum : '首赞' }}</div>
                    <div class="comment-ta">回复Ta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="comment-tips">- 已经到底了呦 -</div>
        </div>
      </div>
      <div class="comment-bottom">
        <div class="d-flex">
          <van-field v-model="value" placeholder="写评论" />
          <div>
            <img class="comment-img" src="@detailImg/icon-tupian.png" />
            <img class="comment-img" src="@detailImg/icon-youjian.png" />
            <img class="comment-img" src="@detailImg/icon-biaoqing.png" />
          </div>
        </div>
        <div class="quick-reply d-flex-i-cent" >
          <span>快捷回复：</span>
          <div class="quick-list d-flex">
            <span class="quick-item">又劝我花钱</span>
            <span class="quick-item">又劝我花钱</span>
            <span class="quick-item">又劝我花钱</span>
            <span class="quick-item">又劝我花钱</span>
            <span class="quick-item">又劝我花钱</span>
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
import { useRoute } from 'vue-router'

const value = ref('')
const route = useRoute()
const id = ref(route.query.id)
console.log(id.value, 'id')

const { navigateBack } = useRouterNavigation()

const showShare = ref(false)
const options = [
  { name: '微信好友', icon: getAssetsFile('commonImg/icon-wechat.png') },
  { name: '朋友圈', icon: getAssetsFile('commonImg/icon-moments.png') }
]
const onSelect = (option: any) => {
  alert(option.name)
  showShare.value = false
}

const commentData = [
  {
    icon: 'test-img',
    name: '静呀爱旅游',
    comment: '曼谷有很好的医生，可以去看看',
    time: '11-04',
    location: '曼谷',
    likeNum: 1,
    isAuthor: true,
    data: [
      {
        icon: 'test-img',
        name: '静呀爱旅游',
        comment: '曼谷有很好的医生，可以去看看',
        time: '11-04',
        location: '曼谷',
        likeNum: 0,
        isAuthor: true
      }
    ]
  },
  {
    icon: 'test-img',
    name: '静呀爱旅游',
    comment: '小众城市',
    time: '11-04',
    location: '云南',
    likeNum: 1,
    isAuthor: false,
    data: []
  }
]
</script>

<style lang="less" scoped>
@import './index.less';
</style>
