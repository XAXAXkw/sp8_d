<template>
    <div class="logger">
        <div><h6 @click="show=!show">LOGIN</h6></div>
<div class="container border rounded-2 bg-dark border-warning p-2 " v-if="show">
<div class="container">

    <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>




</div>



<div><button class="btn btn-sm btn-warning m-2" @click="register">REGISTER</button></div>

<p>Or create  <a href="#">new user</a>.</p>
</div>

    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

    export default {
        name:'RegisterComp',
        data(){
            return{
                show:false,email:'', 
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
    margin:10px;

}

</style>
