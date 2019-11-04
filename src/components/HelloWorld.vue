<template>
  <!-- 只能有一个根标签 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{tel}}</p>
    <h2>{{greeting()}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "美丽霸气小甜甜",
      tel:"18827556133"
    };
  },
  methods:{
    greeting(){
      return `大家好，我是${this.msg},我的电话是${this.tel}`
    }
  }
  // 属性传值
  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
