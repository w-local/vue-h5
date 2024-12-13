<template>
  <div class="head-wrap">
    <h1 class="head-name d-flex-cent-cent">我的</h1>
   
  </div>

</template>

<script setup lang="ts">
import useRouterNavigation, { getAssetsFile } from '@config/utils'
import 'vant/es/dialog/style'
const { navigateTo, navigateBack } = useRouterNavigation()

</script>

<style lang="less" scoped>
@import './index.less';
</style>
