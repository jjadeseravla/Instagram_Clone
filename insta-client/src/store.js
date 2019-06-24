import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false,
    feed: [
      {
        id: 0,
        user_id: 0,
        display_name: 'Freddie Mercury',
        desc: 'fabulous darling',
        //image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjtseGNrPXiAhWZ8uAKHd-QB-YQjRx6BAgBEAU&url=https%3A%2F%2Fwww.looper.com%2F81585%2Ffreddie-mercury-biopic-bohemian-rhapsody-casts-queen-bandmates%2F&psig=AOvVaw0j9XlksjeSPTVMurowlWMz&ust=1561026781692347',
        timestamp: 1551052800000
      },
      {
        id: 1,
        user_id: 1,
        display_name: 'Brian May',
        desc: 'ble',
        //image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiQpZWbrPXiAhUS8uAKHRd-CS8QjRx6BAgBEAU&url=https%3A%2F%2Floudwire.com%2Fqueen-brian-may-defends-broken-timeline-bohemian-rhapsody%2F&psig=AOvVaw14B8lWMdLym1mr6fvjoj4X&ust=1561026819066364',
        timestamp: 1549065600000
      },
      {
        id: 2,
        user_id: 2,
        display_name: 'Roger Taylor',
        desc: 'bang',
        //image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwijq9ClrPXiAhUGkxQKHSU-DMAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.nme.com%2Fnews%2Fmusic%2Fqueen-roger-taylor-releases-political-new-solo-single-gangsters-running-world-2470626&psig=AOvVaw1OUpFV5UMYJJcnYOc62tb5&ust=1561026837345959',
        timestamp: 154569600000
      }
    ]
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
        console.log('router')
        console.log(router)
        router.push('/register')

        // console.log('worrrrrrrrrrrrk', this.$router);
        // this.$router.push('/');
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('jwt');
      router.push('/login')
      // this.$router.push('/login');
      }
    }
})
