<template>
<b-container>
    <b-card class="card ">
        <h2 class="text mt-3">Sign in to Your Account</h2>
<b-row class="m-4">
Enter the email Addres:
<input type="email" placeholder="john@gmail.com" class="form-control px-5" v-model="email">
  </b-row>
  <b-row class="m-4">
Your password:
<input type="password" placeholder="password" class="form-control px-5" v-model="password">
  </b-row>
  <div class="mt-2">
    <h6 class="a">New user? <a @click="$router.push('/Register')">Register</a> </h6>
   
  </div>
  <div>
      <button class="btn mt-3" @click="check()">Login</button>
     <!-- <button class="btn  mt-3 ml-2" @click="$router.push('/Register')">Register</button> -->

  </div>

    </b-card>
</b-container>
    
</template>

<script>
// import Register from './Register'
export default {
      data(){
          return{
            email:'',
            password:''

          }
      },
      mounted(){
          console.log(this.$route)
      },
      methods:{
          check(){
              if(localStorage.getItem('email') === this.email && localStorage.getItem('password')===this.password){
                  this.$router.push('/api')
              }else{
                alert('you have entered wrong email or password')
              }
              }
          },
      
    //   methods:{
    //          check(){
                 
    // var storedemail = localStorage.getItem('email');
    // var storedpassword = localStorage.getItem('password');

    // var useremail = document.getElementById('useremail');
    // var userpassword = document.getElementById('userpassword');

    
    // if(useremail.value !== storedemail || userpassword.value !== storedpassword) {
    //     alert('ERROR');
    // }else {
    //     alert('You are loged in.');
    // }
    //          }
    //   },
    name:"Login",
   

   
    
    
}
</script>

<style scoped>
.card{
    height: 100%;
    width: 50%;
    /* background:green; */
    margin:250px;
}
.btn{
    background-color:rgb(13, 70, 70);
    color: white;
    font-weight: bolder;
    font-size: larger;
}
.text{
    /* color: white; */
    font-weight: bolder;
    
}
.a{
    /* color: white; */
    cursor: pointer;
}

</style>