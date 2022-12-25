<template>
  <div class="home">
    <RegisterComp />
  <nav>
  <div class="container"><img src="../assets/star-wars.svg" class="logosw"/>
  <p>- CacaoLast Edition -</p></div>

    <router-link to="/">Home</router-link> | 
    <router-link @click="getData" to="/list">Starships</router-link> |

  </nav>

  </div>
</template>

<script >
import RegisterComp from '../components/RegisterComp.vue'
import { mapActions } from 'vuex';

export default{
  name:'HomeView',
  components:{
    RegisterComp
  },
  methods:{
    ...mapActions(['getData'])
  }
  
}


</script>


