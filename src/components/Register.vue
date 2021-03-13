<template>
<b-container>
<b-card class="card">
        <h2 class="text">Create your Account</h2>
  <b-row class="m-4">  
 Enter your FullName:
<input type="text" placeholder="FullName" class="form-control ml-2 px-5 py-2 "> 
  </b-row>

  <b-row class="m-4">  
Enter the Email Address:
<input type="email" placeholder="Username" class="form-control px-5 py-2 " v-model="email">
  </b-row>

  <b-row class="m-4">
Your password:
<input type="password" placeholder="password" class="form-control px-5 py-2"  v-model="password">
  </b-row>
  
  <div>

      <button class="btn  mt-3 ml-2" @click="store(),$router.push('/api')">Register</button>
  </div>
    </b-card>
</b-container>
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
        store(){
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
    height: 50%;
    width: 50%;
    
    margin: 250px;

}
.btn{
    background-color:rgb(13, 70, 70);
    color: white;
    font-weight: bolder;
    font-size: larger;
}
.text{
    /* color: white; */
    
}
 
</style>