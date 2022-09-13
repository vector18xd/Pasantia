import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './plugins/vuetify'
import './plugins/vuetify'
import './plugins/vuetify'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
