import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false
  },
  mutations: {
    isAuthenticated(state) {
      if(localStorage.getItem('jwt') != null) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    login(state, token) {
        state.isAuthenticated = true;
        localStorage.setItem('jwt', token);
        console.log('worrrrrrrrrrrrk', this.$router);
        this.$router.push('/');
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('jwt');
      this.$router.push('/login');
      }
    }
})
