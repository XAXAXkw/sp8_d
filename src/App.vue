<template>
  <RegisterComp />
  <nav>
  <div class="container"><img src="./assets/star-wars.svg" class="logosw"/>
  <p>- CacaoLast Edition -</p></div>

    <router-link to="/">Home</router-link> | 
    <router-link @click="getData" to="/list">Starships</router-link> |

  </nav>
  <router-view/>
</template>

<script >
import RegisterComp from './components/RegisterComp.vue'
import { mapActions } from 'vuex';

export default{
  name:'app',
  components:{
    RegisterComp
  },
  methods:{
    ...mapActions(['getData'])
  }
  
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: goldenrod;
}

h1,h2,h3{
  font-size: small !important;
}
h4,h5,h6,p{
    font-size: xx-small !important;
}

a{
  color:orange;
  text-shadow:1px 0px 10px red;
  text-decoration: none;
}
a:hover{
  color:yellow;
  text-shadow:1px 0px 10px red;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: goldenrod
}

nav a.router-link-exact-active {
  color: yellow;
}
.logosw{
  width:200px;
  margin:15px;
  margin-top: 10px;
}
</style>
