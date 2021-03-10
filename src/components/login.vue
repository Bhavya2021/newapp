<template>
<div>
    <b-card class="card">
        <h1  class="text">News Update</h1>
  <div>  
<input type="email" placeholder="Username" class="px-5 py-2 mt-5">
  </div>
  <div>
<input type="password" placeholder="password" class="px-5 py-2 mt-2">
  </div>
  
  <div>
      <button class="btn mt-3">Login</button>
     <button class="btn  mt-3 ml-2" @click="$router.push('/Register')">Register</button>
  </div>
    </b-card>
</div>
    
</template>

<script>
// import Register from './Register'
export default {
    name:"Login",
    components:{
        // Register
    }
    
    
}
</script>

<style scoped>
.card{
    height: 40%;
    width: 40%;
    background:green;
}
.btn{
    background-color:rgb(13, 70, 70);
    color: white;
    font-weight: bolder;
    font-size: larger;
}
.text{
    color: white;
    
}

</style>