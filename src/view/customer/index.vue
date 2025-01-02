<template>
  <div>
    <div class="head-wrap">
      <div class="d-flex-i-cent">
        <img class="left-arrow" src="@commonImg/left-arrow.png" @click="navigateBack" />
        <h1 class="head-name">客服中心</h1>
      </div>
    </div>
    <iframe id="customer-iframe" src="https://chat.ssrchat.com/service/fshtp5"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useRouterNavigation from '@config/utils'
const { navigateBack } = useRouterNavigation()

// const iframe = document.getElementById('customer-iframe')
const headerWrap = document.getElementsByClassName('view_chat__header_gm4yy')
console.log(headerWrap,'headerWrap')
</script>

<style lang="less" scoped>
@import './index.less';
</style>
