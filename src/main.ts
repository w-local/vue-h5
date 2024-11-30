import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
const pinia = createPinia()
import './style/index.less'


const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')