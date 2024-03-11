import Vue from 'vue'
import { vfmPlugin } from 'vue-final-modal/lib'
import Vuetify from 'vuetify/lib'

import App from './App.vue'

Vue.use(Vuetify)
Vue.use(vfmPlugin)

const vuetify = new Vuetify()

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
