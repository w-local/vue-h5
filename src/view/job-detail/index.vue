<template>
  <div>
  <div class="detail-wrap">
    <van-sticky>
    <div class="head-wrap d-flex-bet">
      <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
      <h1 class="head-name">职位详情</h1>
      <img class="share-icon" @click="showShare = true" src="@detailImg/fenxiang.png" />
    </div>
  </van-sticky>
    <div class="info-content">
      <div class="info-data">
        <div class="info-name">点单日餐请串烧师傅，全工或半工，本人居留带 厨房热菜，有意者电话联系</div>
        <div class="d-flex-bet-cent">
          <div class="d-flex-i-cent">
            <img class="info-icon" src="@detailImg/icon-time.png" />
            <span class="info-text">4分钟前</span>
          </div>
          <div class="d-flex-i-cent">
            <img class="info-icon icon-eye" src="@detailImg/icon-eye.png" />
            <span class="info-text">浏览：298</span>
          </div>
          <div>
            <img class="phone-icon" src="@commonImg/phone-icon.png" />
            <span class="info-phone">+6629876543</span>
          </div>
        </div>
      </div>
      <div class="job-detail d-flex-i-cent">
        <div class="item-detail">
          <span>地区：</span>
          <span>曼谷</span>
        </div>
        <div class="item-detail">
          <span>供求：</span>
          <span>招聘</span>
        </div>
        <div class="item-detail">
          <span>性质：</span>
          <span>全工</span>
        </div>
        <div class="item-detail">
          <span>工种：</span>
          <span>洗碗/杂工，服杂工</span>
        </div>
      </div>
      <div class="job-desc">
        <div class="d-flex-i-cent">
          <img class="desc-icon" src="@detailImg/icon-jtms.png" />
          <span class="desc-name">图片介绍</span>
        </div>
        <div class="job-txt">点单日餐请串烧师傅，全工或半工，本人居留带处方热菜 有意者电话联系，也可通过微信和邮箱联系： GDG2132323123</div>
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
                <div class="comment-right">
                  <div class="d-flex-bet">
                    <div>
                      <div class="comment-name">{{ item.name }}</div>
                      <div class="comment-txt">
                        {{ item.comment }}
                        <img v-if="item.expressionArr?.length" class="expression-icon" v-for="(img, idx) in item.expressionArr" :key="idx" :src="getAssetsFile(`detailImg/${img}.png`)" />
                      </div>
                      <div v-if="item.imgArr?.length" class="comment-imgs" v-for="(img, idx) in item.imgArr" :key="idx">
                        <img class="comment-img" :src="getAssetsFile(`detailImg/${img}.png`)" />
                      </div>
                    </div>
                    <div class="d-flex-column-center">
                      <img class="icon-like" src="@detailImg/icon-like.png" />
                      <div class="like-num">{{ item.likeNum ? item.likeNum : '首赞' }}</div>
                    </div>
                  </div>
                  <div class="d-flex-bet">
                    <div class="d-flex">
                      <div class="comment-time">{{ item.time }}</div>
                      <div class="comment-location">{{ item.location }}</div>
                      <div class="comment-author" v-if="item.isAuthor">作者回复了</div>
                    </div>
                    <div class="comment-ta">回复Ta</div>
                  </div>
                </div>
              </div>
              <div class="d-flex sub-item" v-for="(subItem, subIdx) in item.data" :key="subIdx">
                <img class="comment-icon" :src="getAssetsFile(`myImg/${subItem.icon}.png`)" />
                <div class="comment-right">
                  <div class="d-flex-bet">
                    <div>
                      <div class="d-flex">
                        <div class="comment-name">{{ subItem.name }}</div>
                        <div class="comment-author" v-if="subItem.isAuthor">作者</div>
                      </div>
                      <div class="comment-txt">
                        {{ subItem.comment }}
                        <img v-if="subItem.expressionArr?.length" class="expression-icon" v-for="(img, idx) in subItem.expressionArr" :key="idx" :src="getAssetsFile(`detailImg/${img}.png`)" />
                      </div>
                      <div v-if="subItem.imgArr?.length" class="comment-imgs" v-for="(img, idx) in subItem.imgArr" :key="idx">
                        <img class="comment-img" :src="getAssetsFile(`detailImg/${img}.png`)" />
                      </div>
                    </div>
                    <div class="d-flex-column-center">
                      <img class="icon-like" src="@detailImg/icon-like.png" />
                      <div class="like-num">{{ subItem.likeNum ? subItem.likeNum : '首赞' }}</div>
                    </div>
                  </div>
                  <div class="d-flex-bet">
                    <div class="d-flex">
                      <div class="comment-time">{{ subItem.time }}</div>
                      <div class="comment-location">{{ subItem.location }}</div>
                    </div>
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

const value = ref('')
const route = useRoute()
const id = ref(route.query.id)
console.log(id.value,'id')

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
</script>

<style lang="less" scoped>
@import './index.less';
</style>
