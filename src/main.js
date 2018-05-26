import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './css'

Vue.config.productionTip = false

import {Input, Dialog} from 'element-ui'
Vue.use(Input)
Vue.use(Dialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
