import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'
import './registerServiceWorker'
import Store from './store/store.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  Store,
}).$mount('#app')
