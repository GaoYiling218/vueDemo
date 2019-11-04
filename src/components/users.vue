<template>
  <div class="users">
    <ul>
      <li @click="user.show=!user.show" v-for="(user,index) in gppusers" :key="index">
        <h2>{{user.word}}</h2>
        <h2 v-show="user.show">{{user.word2}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  // 属性传值
  props:["gppusers"],
  // props:{
  //   gppusers:{
  //     type:Array,
  //     required:true
  //   }

  // },
  data(){
    return {
     
    }
  }

}
</script>

<!-- 加scoped是表示样式只针对当前页面-->
 <style scoped>
 .users{
   width:100%;
   max-width: 100%;
   margin: 40px auto;
   padding: 0 20px;
   box-sizing: border-box;
 }
 ul{
   display: flex;
   flex-wrap: wrap;
   list-style-type: none;
   padding: 0;
 }
 li{
   flex-grow: 1;
   flex-basis: 200px;
   text-align: center;
   padding: 30px;
   border: 1px solid #333;
   margin: 10px;
 }

</style>