<template>
    <div id="additem">
        <h1>Add Item</h1>
        <form>
            Name: <input type="text" placeholder="Please input name" v-model="person.name">
            Age: <input type="text" placeholder="Please input age" v-model="person.age">
            Gender: <input type="text" placeholder="Please input gender" v-model="person.gender">
            <button id="btn" @click="sbt(person)">Submit</button>
        </form>    
    </div>


</template>
<style lang="less" scoped>
    #additem{
        padding-left:30px;
        >form{
            margin-top:30px;
            >input{
                width:200px;
                height:30px;
                padding-left:15px;
                margin-left:30px;
                border:1px solid skyblue;
                display:block;
            }
            >#btn{
                width:50px;
                height:30px;
                margin-top:30px;
                margin-left:200px;
            }
        }
    }
</style>
<script>
    import {mapActions} from "vuex"
    export default{
        data:function(){
            return{
                person:{
                    name:"",
                    age:"",
                    gender:""
                }
            }
        },
        methods:{
            /**
             *  @desc mapActions中的方法可以将数据提交到状态管理器中
             */
            // ...mapActions({
            //     sbt:saveMsg
            // })
            sbt:function(obj){
                this.$store.dispatch('saveMsg');
                // alert("Successful!");
                return false;
            }
        }
    }
</script>

