import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vant from './utils/vant'
import MyPlugin from './components/common/index'
import 'lib-flexible/flexible'

createApp(App).use(store).use(router).use(vant).use(MyPlugin).mount('#app')
