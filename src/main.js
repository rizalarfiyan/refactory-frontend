import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/css/style.css'
import LayoutsEngine from '@/components/global/LayousEngine.vue'
import Icon from '@/components/global/Icon.vue'

Vue.config.productionTip = false

Vue.component('LayoutsEngine', LayoutsEngine)
Vue.component('Icon', Icon)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
