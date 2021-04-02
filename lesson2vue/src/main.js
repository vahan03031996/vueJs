// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mixin from './mixin'
import Global from './components/Global'

Vue.config.productionTip = false
Vue.component('Global', Global)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mixin,
  components: {App},
  template: '<App/>'
})
