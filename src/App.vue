<template>
  <div id="app">
    <Header @titleChange="updateTitle" :title="title"/>
    <!--父组件向子组件传值 属性传值-->
    <users :gppusers="users"/>
    <Footer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import users from './components/users.vue'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  data(){
    return{
       users:[
        { word : "加油鸭！Vue3.0出来了", word2 : "继续学鸭",show:'false'},
        { word : "加油鸭！Vue3.0出来了", word2 : "继续学鸭",show:'false' },
        { word : "加油鸭！Vue3.0出来了", word2 : "继续学鸭",show:'false'},
        { word : "加油鸭！Vue3.0出来了", word2 : "继续学鸭",show:'false' },
        { word : "加油鸭！Vue3.0出来了", word2 : "继续学鸭",show:'false'},
      ],
      title: 'Vue 开始了'
    };

  },
  components: {
    HelloWorld,
    users,
    Header,
    Footer
  },
  methods:{
    updateTitle(updatedTitle){
      console.log(updatedTitle);
      this.title = updatedTitle;

    }
  }
  }
</script>

<style>

</style>
