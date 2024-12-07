<template>
  <div v-if="store.loading" class="global-loading">
    <van-loading color="#1989fa" />
  </div>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { useLoadStore } from './store/index'

const store = useLoadStore()

</script>

<style scoped></style>
