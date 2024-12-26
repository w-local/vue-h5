<template>
  <div>
    <div class="detail-wrap">
      <van-sticky>
        <div class="head-wrap d-flex-bet">
          <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
          <h1 class="head-name">二手详情</h1>
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
      <div class="content-wrap">
        <div class="d-flex-bet-cent">
          <div class="second-price">¥<span class="price-txt">4557</span></div>
          <!-- <div class="car-modal">五座</div> -->
          <div class="info-location d-flex-i-cent">
            <img class="location-icon" src="@commonImg/location-icon.png" />
            <span>曼谷</span>
          </div>
        </div>
        <div class="info-data d-flex-bet">
          <div class="info-name ellipsis-tow">95新 RedmiBook Pro 14 2022 16GB 512G SSD灰色</div>
          <div class="d-flex-bet-cent">
            <div class="d-flex-i-cent">
              <div class="d-flex-i-cent">
                <img class="info-icon" src="@detailImg/test-img.png" />
                <div class="nick-name ellipsis-one">灰色幽默95色幽</div>
              </div>
              <div class="chat-btn">聊一聊</div>
            </div>
            <div>
              <img class="phone-icon" src="@commonImg/phone-icon.png" />
              <span class="info-phone">+6629876543</span>
            </div>
          </div>
        </div>
        <div class="introduce-content">
          <div class="d-flex-i-cent">
            <img class="introduce-icon" src="@secondImg/icon-ershou.png" />
            <span class="introduce-name">二手介绍</span>
          </div>
          <div class="introduce-txt" v-for="(item, idx) in detailData">
            {{ item }}
          </div>
        </div>
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
import { commentData } from './data'

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

const detailData = ref(['游戏笔记本电脑 简约便携本轻薄本 商务本 游戏本', '坚持一机一检，机器实拍图参考如下!', '功能正常无暗病，详见右上角《验货报告》', '【售后保障】 签收当日起 支持7天无理由退换货(防拆标需保留完整，无私自拆装且不影响二次销售)', '支持1年质量保修(防拆标需保留完整。如人为损坏，进水，外力引起机器不开机，黑屏等，以及机器自然老化，损耗不在质保范围内)'])

const value = ref('')



</script>

<style lang="less" scoped>
@import './index.less';
</style>
