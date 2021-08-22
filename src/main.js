import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/tailwind.css'
import LayoutsEngine from '@/components/global/LayousEngine.vue'

Vue.config.productionTip = false

Vue.component('LayoutsEngine', LayoutsEngine)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
