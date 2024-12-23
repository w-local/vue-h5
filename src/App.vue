<template>
  <div v-if="store.loading" class="global-loading">
    <van-loading color="#1989fa" />
  </div>
    <!-- <router-view></router-view> -->
    <router-view class="router-view" v-slot="{ Component }">
      <transition name="slide-left">
        <div>
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
</template>

<script setup lang="ts">
import {watch} from 'vue'
import { useLoadStore } from './store/index'

const store = useLoadStore()

</script>

<style scoped>

.router-view{
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active{
    height: 100%;
    will-change: transform;
    transition: all 500ms cubic-bezier(.55,0,.1,1);
    position: absolute;
    backface-visibility: hidden;
}
.slide-right-enter-active{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
</style>
