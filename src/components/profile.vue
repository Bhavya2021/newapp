<template>
    <div>
        <b-card class="card mt-5">
            <b-row>
            <b-icon icon="arrow-left-square" font-scale="2" class="a ml-4 mt-2" @click="$router.push('./api')"></b-icon>
            <h1 class="a">Personal Information</h1>
            </b-row>

<div class="profile-icons" @click="uploaddiv" >
<b-icon icon="camera" font-scale="4" class="camera"  v-if="camicon"></b-icon>
 <input type="file" @change="Getimage" class="abc d-none" ref="inputfield" >
    <b-img :src="abc" alt="image" v-if="uploadimg"/>
</div>
<h3 class="a" >Profile pic</h3>


<b-row class="mt-5">
    <b-col class="a"> <h3>Full Name</h3></b-col>
    <b-col><input type=text class="form-control" placeholder="ryan" v-model="fullname"></b-col>
</b-row>

<b-row class="mt-3">
    <b-col class="a"> <h3>Email Address</h3></b-col>
    <b-col><input type=text class="form-control" placeholder="ryan@gamil.com" v-model="email"></b-col>
</b-row>

<b-row class="mt-3">
    <b-col class="a"> <h3>Password</h3></b-col>
    <b-col><input type="password" class="form-control" placeholder=".........." v-model="password"></b-col>
</b-row>

<b-row class="mt-3 mb-5">
    <b-col class="a"> <h3>Contact Number</h3></b-col>
    <b-col><input type=text class="form-control" placeholder="91-9821424950" v-model="phoneNumber"></b-col>
</b-row>
<b-row>
    <button class="button px-5 py-2" style="font-weight:bold" @click="store()">Submit</button>
</b-row>


<!-- <a href="#" @click.prevent="upload">upload</a> -->
        </b-card>
    </div>
</template>

<script>
export default {
    name:"Profile",
    data(){
         return{
             uploadimg:false,
             camicon:true,
             fullname:'',
             email:'',
             password:'',
             phoneNumber:''
         }
    },
    methods:{
        uploaddiv(){
            this.$refs.inputfield.click()
        },
        Getimage(e){
            let image = e.target.files[0]
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                
                this.abc=e.target.result
                this.uploadimg = true
                this.camicon=false
            }
        },
        store(){
            localStorage.setItem('fullname',this.fullname)
            localStorage.setItem('email',this.email)
            localStorage.setItem('password',this.password)
            localStorage.setItem('phoneNumber',this.password)
        }

        
}
}
</script>

<style scoped>
.card{
    width: 50%;
    height: 50%;
    background-image: url("../assets/profilepage.jpg") ;
    margin-left: 400px;
}
.profile-icons{
  width: 200px;
  height: 200px;
  background-color: #F3F3F3;
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin-left:320px;
  overflow: hidden;
}
.a{
    color: white;
}
h1{
    margin-left: 200px;
}
.camera{
  margin: 65px 65px;

}
.button{
    margin-left: 360px;
    border-radius: 6px;
}


</style>