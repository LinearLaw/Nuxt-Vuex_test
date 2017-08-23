<template>
    <div id="additem">
        <h1>Add Item</h1>
        <form>
            Name: <input type="text" placeholder="Please input name" v-model="person.name">
            Age: <input type="text" placeholder="Please input age" v-model="person.age">
            Gender: <input type="text" placeholder="Please input gender" v-model="person.gender">
            <div v-if="text_shows" class="success_text">成功！</div>
            <button id="btn" @click.stop="sbt(person)">Submit</button>
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
            .success_text{
                color:green;
            }
        }
    }
</style>
<script>
    import {mapMutations,mapActions} from "vuex"
    export default{
        data:function(){
            return{
                person:{
                    name:"",
                    age:"",
                    gender:""
                },
                text_shows:false
            }
        },
        methods:{
            /**
             * @description  利用扩展运算符，可将actions/state/mutations的内容引入
             */
            ...mapMutations(["mutaSave"]),
            ...mapActions(["saveMsg"]),
            /**
             *  @desc mapActions中的方法可以将数据提交到mutations的方法中
             *          mapMutations的方法可以将数据更改到state中
             *          应该避免绕过mutations直接操作state，否则flux架构的引入没有了意义
             */
            sbt:function(obj){
                // this.$store.commit('mutaSave',obj);

                this.mutaSave(obj);     
                this.text_shows = true;
                setTimeout(()=>{
                    this.text_shows = false;
                },1000)
                return false;
            },
            delaySbt:function(obj){
                setTimeout(()=>{
                    //tips : dispatch和直接this调用二者等价
                    // this.$store.dispatch('saveMsg',obj);
                    this.saveMsg(obj);  
                },1000)
            }
        }
    }
</script>

