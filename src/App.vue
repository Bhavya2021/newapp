
<template>
  <div id="app">
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <DataBinding type="hover" /> -->
     <!-- <DataBinding type="hover1"/> -->
      <!-- <DataBinding type="hover2"/> -->
      <!-- <Api/> -->
      <!-- <Login /> -->
      <!-- <Register /> -->
      <!-- <Profile /> -->
      <Nav />
      <router-view :fav=favorite @addfav="addFav"></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DataBinding from './components/Databinding.vue'
// import Api from './components/api.vue'
// import Login from './components/login'
// import Register from './components/Register';
// import Profile from './components/profile'
import Nav from './components/Nav.vue'
export default {
  name: 'App',
 
  data(){
      return{
        favorite:[]
      }
  },
  methods:{
          addFav(e){
             console.log(e)
             this.favorite.push(e)
          }
  },
  components: {
    // HelloWorld,

    // DataBinding,
    // Api,
    // Login,
    // Register
    // Profile
    Nav
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
