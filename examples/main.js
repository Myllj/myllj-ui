import Vue from 'vue'
import App from './App.vue'
// import lljUi  from '../packages/index'
import { Button, Dialog } from '../packages/index.js'
import '../packages/fonts/font.scss'

// Vue.use(lljUi)
Vue.use(Button)
Vue.use(Dialog)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
