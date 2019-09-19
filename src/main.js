import Vue from 'vue'
import App from './App.vue'
import { router } from '@/router'
import store from './store/index'

import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'

import iconSvg from '@/components/iconSvg'

import '@/icons'

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
