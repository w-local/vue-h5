<template>
  <div v-if="store.loading" class="global-loading">
    <van-loading color="#1989fa" />
  </div>
  <!-- <router-view></router-view> -->
  <router-view v-slot="{ Component }">
    <!-- :name="router.customRouterData.transitionName" -->
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import {watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoadStore } from './store/index'

const store = useLoadStore()

const router:any = useRouter()
console.log(router,'route')

</script>

<style scoped>
  .slide_left-enter-active, .slide_left-leave-active, .slide_right-enter-active, .slide_right-leave-active {
    transition: all 0.3s;
    position: absolute !important;
    background-color: white;
    left: 0;
    right: 0;
    top :0;
    bottom: 0;
    z-index :1;
  }
 
  .slide_left-enter-from, .slide_right-leave-to {
    opacity: 1;
    transform: translateX(100%);
  }
 
  .slide_right-enter-from, .slide_left-leave-to {
    opacity: 1;
    transform: translateX(-100%);
  }
 
  .slide_left-leave-to, .slide_right-leave-to {
    opacity: 0.3;
  }
</style>
