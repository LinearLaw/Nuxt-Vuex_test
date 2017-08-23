<template>
<div id="table">
    <h1>Table</h1>
    <table id="table_content">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="tableData.length<=0">（No Data）暂无数据</tr>
            <tr v-if="tableData.length>0" v-for="key in tableData">
                <td>{{key.id}}</td>
                <td>{{key.name}}</td>
                <td>{{key.age}}</td>
                <td>{{key.gender}}</td>
            </tr>
        </tbody>
    </table>
</div>
    
</template>
<style lang="less" scoped>
    #table{
        >#table_content{
            th,td{
                width:200px;
                height:30px;
                text-align:center;
                border:1px solid #f0f0f0;
            }
            td:hover{
                background-color:skyblue;
                color:#fff;
                cursor:pointer;
            }
        }
    }
</style>
<script>
    import {mapState,mapGetters} from "vuex"
    export default{
        data:function(){
            return{
                // tableData:[
                //     {id:"1",name:"Jack",age:"18",gender:"male"},
                //     {id:"2",name:"Rose",age:"18",gender:"male"},
                //     {id:"3",name:"Michael",age:"18",gender:"male"},
                //     {id:"4",name:"Peter",age:"18",gender:"male"},
                //     {id:"5",name:"Mary",age:"18",gender:"male"},
                //     {id:"6",name:"Sunny",age:"18",gender:"male"},
                //     {id:"7",name:"Rebecca",age:"18",gender:"male"}
                // ]
            }
        },
        /**
         *  思路：vuex定义了一个state作为数据容器，而子组件都可以访问这个容器。
         *       因此，当在组件一里面提交内容后，可以将提交的数据保存到state中，
         *       当页面切换到了组件二中时，组件二的DOM元素完全加载后，
         *       组件二触发mounted钩子函数，取出state中的数据保存到其data中，
         *       同时，在执行完成之后，再将state中的数据进行重置初始化。

            ————通过这种方式，从而完成了组件一到组件二之间的通信
         */
        methods:{

        },
        computed:{
            /**
             * @description  利用mapState，将state的数据导入到当前组件
             */
            ...mapState(["msg"]),
            tableData:function(){
                return this.msg
            }
        },
        /**
         * @desc mounted，当页面DOM元素加载完成之后的回调函数，
                我们通过这个钩子函数来实现store里的数据和本组件数据的更新
         */
        mounted:function(){
            //获取store里的数据，访问state使用$store
            //  console.log(this.$store.state.msg);
            //  mounted时，msg还没有加载，在这里使用this.msg将会报错
        }
    }
</script>

