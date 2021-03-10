<template>
    <div>
        <form @submit.prevent="submit">
            <div>
                <div>
                    <label for="">First Name</label>
                    <input type="text" v-model="FirstName" @keyup="check('firstname')">
                    <div v-if="firstErr">
                        <span>{{firstErr}}</span>
                    </div>
                </div>
                <div>
                    <label for="">Last Name</label>
                    <input type="text" v-model="LastName" @keyup="check('lastname')">
                    <div v-if="lastErr">
                        <span>{{lastErr}}</span>
                    </div>
                </div>
                <div>
                    <label for="">Email</label>
                    <input type="text" v-model="Email" @keyup="check('email')">
                    <div v-if="emailErr">
                        <span>{{emailErr}}</span>
                    </div>
                </div>
                <div>
                    <label for="">Mobile</label>
                    <input type="text" v-model="Mobile" @keyup="check('mobile')">
                    <div v-if="mblErr">
                        <span>{{mblErr}}</span>
                    </div>
                </div>
                <div>
                    <label for="">Password</label>
                    <input type="text" v-model=" Password" @keyup="check('password')">
                    <div v-if="passErr">
                        <span>{{passErr}}</span>
                    </div>
                </div>
                <div>
                    <label for="">Confirm Password</label>
                    <input type="text" v-model="ConfirmPassword" @keyup="check('cpassword')">
                    <div v-if="cpassErr">
                        <span>{{cpassErr}}</span>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name:"FormValidation",
        data(){
            return {
                FirstName:'',
                firstErr:'',
                LastName:'',
                lastErr:'',
                Email:'',
                emailErr:'',
                Mobile:'',
                mblErr:'',
                Password:'',
                passErr:'',
                ConfirmPassword:'',
                cpassErr:''
            }
        },
        methods:{
            check(type){
                let result;
                if(type === "firstname"){
                    let firstnameRegex = /([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}/;
                    result = firstnameRegex.test(this.FirstName)
                    result?this.firstErr="":this.firstErr="invalid firstname"
                }
                if(type === "lastname"){
                    let lastnameRegex = /^([a-zA-Z]{2,})/;
                    result = lastnameRegex.test(this.LastName)
                    result?this.lastErr="":this.lastErr="invalid lastname"
                }
                if(type === "email"){
                    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    result = emailRegex.test(this.Email.toLowerCase())
                    result?this.emailErr="":this.emailErr="invalid email"
                }
                if(type === "mobile"){
                    let mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
                    result = mobileRegex.test(this.Mobile)
                    result?this.mblErr="":this.mblErr="invalid mobile number"
                }
                if(type === "password"){
                    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                    result = passwordRegex.test(this.Password)
                    result?this.passErr="":this.passErr="invalid password"
                }
                if(type === "cpassword"){
                    if(this.Password == this.ConfirmPassword ){
                        this.cpassErr=""
                    }
                    else{
                        this.cpassErr="password doesn't match" 
                    }
                }

            },
            submit(){

            }
                 
        }
    }
</script>

<style  scoped>

</style>