import Vue from "vue"
import Vuex from "vuex"

/**
 * @desc 注册状态管理器
 */
Vue.use(Vuex);

const state={
    msg:[]
}
/**
 * @desc 外界要传值给store，则调用actions里的方法
 */
const actions={
    // 外界传来的值将其保存到outerData这个变量中，提交给mutations进一步处理
    saveMsg({commit},outerData){
        commit('mutaSave',outerData)
    }
}
/**
 * @desc mutations直接对state里面的数据进行操作
 */
const mutations={
    mutaSave(state,outerData){
        state.msg.push(outerData);
    }
}
/**
 * @desc getter用于将state的数据发送出去，外界调用其内部方法即可访问到state
 */
const getter={
    getMsg(state){
        console.log(state.msg)
    }
}
export default new Vuex.Store({
    state,
    getter,
    mutations,
    actions
})