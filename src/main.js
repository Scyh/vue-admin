import Vue from 'vue'

import 'normalize.css/normalize.css'
import '@/style/index.scss'
import ElementUI from 'element-ui'


import App from './App.vue'
import { router } from '@/router'
import store from './store/index'


import '@/icons'

import countTo from '@/components/countTo'
import ECharts from 'vue-echarts'

Vue.component('countTo', countTo)
Vue.component('v-chart', ECharts)

// import 'element-ui/lib/theme-chalk/index.css'
// import { Button, Input } from 'element-ui'

// Vue.component(Button.name, Button)
// Vue.component(Input.name, Input)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
