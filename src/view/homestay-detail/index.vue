<template>
  <div>
    <div class="detail-wrap">
      <van-sticky>
        <div class="head-wrap d-flex-bet">
          <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack()" />
          <h1 class="head-name">民宿详情</h1>
          <img class="share-icon" @click="showShare = true" src="@detailImg/fenxiang.png" />
        </div>
      </van-sticky>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="idx in 4" ::key="idx">
          <img class="banner-img" src="@detailImg/aa.png" />
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
      <div class="content-wrap">
        <div class="d-flex-bet-cent">
          <div class="homestay-price">¥<span class="price-txt">4557</span></div>
          <div class="homestay-modal">四卧室</div>
        </div>
        <div class="info-data d-flex-bet">
          <div class="info-name ellipsis-tow">健康之地度假村及水疗中心</div>
          <div class="d-flex-bet-cent">
            <div class="d-flex-i-cent">
              <div class="score">4.6</div>
              <div class="d-flex-i-cent pinglun" @click="linkComment">
                <img class="icon-pinglun" alt="" src="@myImg/icon-pinglun.png" />
                <span>5</span>
              </div>
            </div>
            <div>
              <img class="phone-icon" src="@commonImg/phone-icon.png" />
              <span class="info-phone">+6629876543</span>
            </div>
          </div>
        </div>
        <div class="introduce-content">
          <div class="d-flex-i-cent">
            <img class="introduce-icon" src="@detailImg/icon-che.png" />
            <span class="introduce-name">民宿介绍</span>
          </div>
          <div class="introduce-txt">我的别墅在中天海边12巷，距离海边150米，位置非常好，内部配备了超大泳池，KTV，私人中文管家，当晚赠送一餐海鲜盛宴需要的请预约。 我的别墅在中天海边12巷，距离海边150米，位置非常好，内部配备了超大泳池，KTV，私人中文管家，当晚赠送一餐海鲜盛宴需要的请预约。</div>
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
import { onMounted, ref } from 'vue'
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import { useRoute } from 'vue-router'
import {commentData} from './data'

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

const value = ref('')
const commentTop = ref(0)
const comment = ref<any>(null)

onMounted(() => {
  commentTop.value = comment.value.getBoundingClientRect().top - 92
})

const linkComment = () => {
  window.scrollTo({
    top: commentTop.value
  })
}


</script>

<style lang="less" scoped>
@import './index.less';
</style>
