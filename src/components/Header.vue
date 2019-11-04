<template>
    <div @click="changeTitle" class="header">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default{
  props:['title'],
  data(){
    return {
        // title:"Vue is Coming"
    }
  },
  methods:{
      changeTitle(){
        //   注册事件（子传父）参数一：事件名称 参数二...:值
          this.$emit("titleChange","高皮皮通过emit到app.vue修改title值");
      }
  },
//   生命周期函数
beforeCreate(){
    alert("这时实例还没有被创建，所以无法知道data,也不能用watch监听");
},
created(){
    alert("这时实例已经创建，可以得到data,调用watch，但是页面还是空白的");
},
beforeMount(){
    alert("页面挂载前，此时页面依然是空白的。这时render函数首次被调用。");
},
mounted(){
    alert("页面挂载了，这时可以看到页面的内容，也可以访问到dom");
},
beforeUpdate(){
    alert("数据更新之前，也就是虚拟DOM打补丁之前");
},
updated(){
    alert("数据已经更新完毕");
},
beforeDestroy(){
    alert("页面离开之前被调用，清除定时器或者第三方的一些Dom结构");
},
destroyed(){
    alert("页面被销毁");
}

}
</script>

<!-- 加scoped是表示样式只针对当前页面-->
 <style scoped>
.header{
    background-image: -webkit-linear-gradient(90deg,#39f1cf 0%, #0fd4b0 100%);
    height: 10vh;
}
h1{
    color:#ffffff;
    text-align: center;
    height: 10vh;
    line-height: 10vh;

}
</style>