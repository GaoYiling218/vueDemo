import Vue from 'vue'
import App from './App.vue'
// // 注册全局组件
// // 1.引入组件
// import users from './components/users'

// // 2.注册全局组件
// Vue.component("users", users)
Vue.config.productionTip = false
// 实例化，挂载函数
new Vue({
  render: h => h(App),
}).$mount('#app')