<template>
  <section class="container">
    <div>
      <div><a href="/"> &lt; Back</a></div>
      <div><a href="/tab_1"> &lt; default</a></div>

      <div>
        <router-link :to="{name:'tab1-one'}">路由1</router-link>
      </div>
      <div>
        <router-link :to="{name:'tab1-two'}">路由2</router-link>
      </div>
      <div>
        <router-link :to="{name:'tab1-three'}">路由3</router-link>
      </div>
      <div>
        <nuxt-child/>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data:()=>{
    return{

    }
  },
  mounted:function(){
    console.log(this.$router);
    console.log(this.$route);
  }
}
</script>

<style>

</style>
