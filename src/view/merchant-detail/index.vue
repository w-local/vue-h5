<template>
  <div>
  <div class="detail-wrap">
    <van-sticky>
    <div class="head-wrap d-flex-bet">
      <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
      <h1 class="head-name">商家详情</h1>
      <img class="share-icon" @click="showShare = true" src="@detailImg/fenxiang.png" />
    </div>
    </van-sticky>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="idx in 4" ::key="idx">
        <img class="banner-img" src="@detailImg/test-img.png" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
    <!-- <img class="banner-img" src="@detailImg/test-img.png" /> -->
    <div class="content-wrap">
      <div class="info-data d-flex-bet">
        <div class="d-flex-bet-cent">
          <div class="info-name ellipsis-one">曼谷TKV</div>
          <div class="info-location d-flex-i-cent">
            <img class="location-icon" src="@commonImg/location-icon.png" />
            <span>曼谷</span>
          </div>
        </div>
        <div class="info-region ellipsis-tow">24rue Saint lazare75009，暹罗广场Siam Square 4F, Siam Square 4F…</div>
        <div class="d-flex-bet-cent">
          <div class="info-type">休闲娱乐</div>
          <div>
            <img class="phone-icon" src="@commonImg/phone-icon.png" />
            <span class="info-phone">+6629876543</span>
          </div>
        </div>
      </div>
      <div class="introduce-content">
        <div class="d-flex-i-cent">
          <img class="introduce-icon" src="@detailImg/introduce-icon.png" />
          <span class="introduce-name">图片介绍</span>
        </div>
        <img class="introduce-img" src="@detailImg/test-img1.png" />
      </div>
      <div ref="comment" class="comment-content">
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
        <div class="quick-reply d-flex-i-cent">
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
import {commentData} from './data'

const route = useRoute()
const id = ref(route.query.id)
console.log(id.value,'id')
const { navigateBack } = useRouterNavigation()
const value = ref('')
const showShare = ref(false)
const options = [
  { name: '微信好友', icon: getAssetsFile('commonImg/icon-wechat.png') },
  { name: '朋友圈', icon: getAssetsFile('commonImg/icon-moments.png') }
]
const onSelect = (option: any) => {
  alert(option.name)
  showShare.value = false
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
