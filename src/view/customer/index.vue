<template>
  <div>
    <div class="head-wrap">
      <div class="d-flex-i-cent">
        <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack" />
        <h1 class="head-name">客服中心</h1>
      </div>
      <div class="welcome-center">
        <img class="center-img" src="@commonImg/customer-img.png" />
        <span class="center-txt"> 欢迎来到东南亚大事件客服中心 </span>
      </div>
    </div>
    <iframe src="https://chat.ssrchat.com/service/fshtp5"/>
  </div>
</template>

<script setup lang="ts">
import useRouterNavigation from '@config/utils'
const { navigateBack } = useRouterNavigation()

</script>

<style lang="less" scoped>
@import './index.less';
</style>
