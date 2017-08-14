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
 * @desc actions里面原则上都写异步操作，如ajax
 */
const actions={
    // 外界传来的值将其保存到outerData这个变量中，提交给mutations进一步处理
    saveMsg({commit},outerData){
        commit('mutaSave',outerData)
    },
    initMsg(){
        commit('initMsg')
    }
}
/**
 * @desc mutations直接对state里面的数据进行操作
 */
const mutations={
    mutaSave(state,outerData){
        state.msg.push(outerData);
    },
    initMsg(){
        state.msg = [];
    }
}
/**
 * @desc getter用于将state的数据发送出去，外界调用其内部方法即可访问到state
 */
const getter = {
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