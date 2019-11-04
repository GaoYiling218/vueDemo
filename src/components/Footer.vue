<template>
  <div class="footer">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "@高皮皮制作"
    };
  }
};
</script>

<!-- 加scoped是表示样式只针对当前页面-->
 <style scoped>
.footer {
  background: #444444;
  height: 5vh;
}
p {
  color: aliceblue;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
}
</style>