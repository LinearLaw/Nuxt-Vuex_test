import Vue from "vue"
import Router from "vue-router"

import table from "../component/tableView.vue"
import tabadd from "../component/addItem.vue"


/**
 * @desc 注册路由
 */
Vue.use(Router)

export default new Router({
    routes:[
        {path:"/table",name:"tab",component:table},
        {path:"/add",name:"tab",component:tabadd}
    ]
})

