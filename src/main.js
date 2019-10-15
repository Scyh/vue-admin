import Vue from 'vue'

import 'normalize.css/normalize.css'
import '@/style/index.scss'
import ElementUI from 'element-ui'

import App from './App.vue'
import { router } from '@/router'
import store from './store/index'

import '@/icons'

Vue.component('countTo', () => import('@/components/countTo'))
Vue.component('v-chart', () => import('@/components/echart'))

Vue.use(ElementUI)

Vue.config.productionTip = false
import './errorlog'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
