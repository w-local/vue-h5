<template>
  <div v-if="store.loading" class="global-loading">
    <van-loading color="#1989fa" />
  </div>
  <van-config-provider>
    <router-view></router-view>
  </van-config-provider>
</template>

<script setup lang="ts">
import { useLoadStore } from './store/index'

const store = useLoadStore()

</script>

<style scoped></style>
