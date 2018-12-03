<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <img src="./assets/logo.png"> -->
    <router-view>

    </router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import Register from '@/components/Register'
export default {
  name: 'app',
  components: {
    HelloWorld
   // Register
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
