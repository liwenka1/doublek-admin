import { createApp } from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //引入图标
import 'element-plus/dist/index.css' //引入样式
import 'virtual:svg-icons-register'
import 'uno.css'
import { createPinia } from 'pinia'
import router from '@/router'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.mount('#app')
