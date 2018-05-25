import Vue from 'vue'
import Vuex from "vuex"
import App from "./App.vue"
import store from "./store.js"

/**
 * @desc 在这里， 为了提高main.js的可读性，
 * 因此不在这里引入router，而采用外联的方式
 * ./router，即为引入该文件夹内的所有js文件
 */
import router from "./router"
import "./less/common.less"

new Vue({
    el:"#app",
    router,
    store,
    render:h=>h(App)
})