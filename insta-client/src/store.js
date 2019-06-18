import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false
  },
  mutations: {
    isAuthenticated() {
      if(localStorage.getItem('jwt') != null) {
        state.isAuthenticated = false;
      } else {
        state.isAuthenticated = true;
      }
    },
    login(state, token) {
        state.isAuthenticated = true;
        localStorage.removeItem('jwt', token);
        this.$router.push('/');
      },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('jwt');
      this.$router.push('./login');
    //}
    }
  }
})
