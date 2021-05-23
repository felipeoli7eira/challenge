import Vue from 'vue'
import App from './App.vue'
import './assets/bootstrap/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
