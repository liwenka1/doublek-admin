import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css' //引入样式
import 'virtual:svg-icons-register' // 本地SVG图标
import 'uno.css'
import { createPinia } from 'pinia'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
