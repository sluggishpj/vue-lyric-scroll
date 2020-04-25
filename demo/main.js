import Vue from 'vue'
import Demo from './Demo'
import plugin from '../src/index'

Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(Demo)
}).$mount('#app')
