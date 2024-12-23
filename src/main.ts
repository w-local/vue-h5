import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
const pinia = createPinia()
import './style/index.less'
import 'animate.css/animate.min.css' //引入动画


const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')