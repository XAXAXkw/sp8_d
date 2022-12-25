<template>
    <div class="logger">
        <div><h6 @click="show=!show">LOGIN</h6></div>
<div class="container border rounded-2 bg-dark border-warning w-50  " v-if="show">
<div class="container">

<div class="row">email :<input/></div>

<div class="row">password :<input/></div>



</div>



<div><button class="btn btn-sm btn-warning m-2">REGISTER</button></div>

<p>Or create  <a href="#">new user</a>.</p>
</div>

    </div>
</template>

<script>
    export default {
        name:'RegisterComp',
        data(){
            return{
                show:false
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