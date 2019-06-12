// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import store from './store'
import AppView from './App.vue'

var router = new Router({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
})
