import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './plugins/vuetify'
import './plugins/vuetify'
import './plugins/vuetify'
import './plugins/vuetify'
import './plugins/vuetify'
import VueTabs from "vue-nav-tabs/dist/vue-tabs.js";
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



library.add(faHatWizard,fas,far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueTabs);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
