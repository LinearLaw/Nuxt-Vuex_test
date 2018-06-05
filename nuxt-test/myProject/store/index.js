import Vue from 'vue'
import Vuex from 'vuex'

//nuxt.js自带了vuex的引用，因此只需要设置index.js的参数即可
Vue.use(Vuex)

const store = ()=>new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})

export default store
