import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.onReady(() => {
  store.commit('isAuthenticated');
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      console.log("logged in");
      next();
    }
  } else {
    if(localStorage.getItem('jwt') != null) {
      next({
        path: '/',
        params: { nextUrl: '/' }
      })
    } else {
      console.log('does not require auth');
      next();
    }
  }
})

export default router;
