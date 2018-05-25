<template>
    <div id="app_vue">
        <section id="left_side" class="fl">
            <h1>Hello Vuex!</h1>
            <div>
                <router-link to="/table"><a href="javascript:void(0)">表单</a></router-link>
            </div>
            <div>
                <router-link to="/add"><a href="javascript:void(0)">功能添加</a></router-link>
            </div>
        </section>
        <section id="right_side" class="fl">
            <h1>Game Start!</h1>
            <router-view></router-view>
        </section>
    </div>
</template>
<style lang="less" scoped>
    #app_vue{
        width:100%;
        height:100%;
        padding-left:10px;
        >#left_side{
            width:15%;
            height:100%;
            border-right:1px solid #666;
        }
        >#right_side{

        }
    }

</style>
<script>
    export default{
        components:{

        },
        data:function(){
            return{

            }
        },
        methods:{

        }
    }
</script>