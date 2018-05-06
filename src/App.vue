<template>
  <div id="app">
    <img class="logo" src="./assets/logo.jpg">
    <Todo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>

<style>
textarea{
  font-size: 1.2rem !important;
  font-family: 'Segoe UI','微软雅黑' !important;
}
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.logo{
  width: 80px;
  height: 80px;
  border-radius: 80px;
}
</style>
