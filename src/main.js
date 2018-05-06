import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
Vue.config.productionTip = false

import {Input} from 'element-ui'
Vue.use(Input)

new Vue({
  render: h => h(App)
}).$mount('#app')
