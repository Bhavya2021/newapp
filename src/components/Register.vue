<template>
<div class="">
<b-card class="card">
        <h1  class="text">News Update</h1>
  <!-- <div>  
<input type="email" placeholder="Fullname" class="px-5 py-2 mt-5">
  </div> -->
  <div>  
<input type="email" placeholder="Username" class="px-5 py-2 mt-2" v-model="email">
  </div>
  <div>
<input type="password" placeholder="password" class="px-5 py-2 mt-2"  v-model="password">
  </div>
  
  <div>

      <button class="btn  mt-3 ml-2" @click="registerUser">Register</button>
  </div>
    </b-card>
</div>
</template>

<script>
export default {
    data(){
        return{
            
                email:'',
                password:''
            
        }
    },
    methods:{
        registerUser(){
            // this.$store.dispatch('registerUser',this.registerInfo);
            localStorage.setItem('email',this.email)
            localStorage.setItem('password',this.password)
           
        }
    },
    name:"Register"
}
</script>

<style>
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