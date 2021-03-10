
<template>
  <div id="app">
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <DataBinding type="hover" /> -->
     <!-- <DataBinding type="hover1"/> -->
      <!-- <DataBinding type="hover2"/> -->
      <!-- <Api/>
      <Login />
      <Register /> -->
      <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DataBinding from './components/Databinding.vue'
// import Api from './components/api.vue'
// import Login from './components/login'
// import Register from './components/Register';

export default {
  name: 'App',
  components: {
    // HelloWorld,

    // DataBinding,
    // Api,
    // Login,
    // Register
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
