<template>
    <div class="container mt-4">
    <div class="row">

<div class="col-4 register d-block ">
    <div class="loggerA" v-if="log=true">
        <div><h6 @click="show=!show">LOGIN</h6></div>
<div class="container border rounded-2 bg-dark border-warning p-2 " v-if="show">
<div class="container">

    <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>




</div>



<div><button class="btn btn-sm btn-warning m-2" @click="register">LOGIN</button></div>


</div>

    </div>

</div>

<div class="col-6"></div>



<div class="col-3 login">

    <div class="logger " v-if="log">
        <div><h6 @click="show=!show">REGISTER</h6></div>
<div class="container border rounded-2 bg-dark border-warning p-2 " v-if="show">
<div class="container">

    <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>




</div>



<div><button class="btn btn-sm btn-warning m-2" @click="register">REGISTER NEW USER</button></div>


</div>

    </div></div>


    
    </div></div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

    export default {
        name:'RegisterComp',
        data(){
            return{
                log:true,show:false,email:'', 
            password:''
            }
        },
        methods:{
            register(){
           
      createUserWithEmailAndPassword(getAuth(),this.email, this.password) 
      .then(() => {
       alert('Successfully registered!');

      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
            }
        }
    }
</script>

<style lang="css" scoped>

.logger{
    position:absolute;

    margin-left: 70%;

}
.loggerA{
    position:absolute;

}

</style>
