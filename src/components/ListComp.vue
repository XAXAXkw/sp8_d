<template>
    <div>

Total Starships : {{ total }}
<p>Loaded : {{  this.$store.state.SHIPS.length+1 }}</p>
<hr />


<ul>
<li v-for="(ship, index) in this.$store.state.SHIPS" :key="index" @click="show=!show">


    <router-link 
  :to="{path:'card/'+index,params:{id:index}}"
  >
<div class="capsule container bg-warning rounded-2 p-2 w-50 mt-2">
<div class="container d-flex align-content-center align-items-baseline">

{{ index+1 }} : <h1 class="text-dark">{{ ship.name }}</h1>
</div>
<div class="container bg-dark text-warning p-2 rounded-4 m-2 w-75">

<h6>Model :  {{ ship.model }}</h6>
</div>
</div>

</router-link>
</li>
</ul>


    </div>
</template>


<script>

import { mapActions,mapMutations,mapState } from 'vuex';
//import CardComp from '@/components/CardComp.vue';
//import ButtonNext from '@/components/ButtonNext.vue'


    export default {
        name:'ListComp',
        created(){
            this.getData()
        },
        mounted() {
    this.scrollMe()},

        data(){
            return{
                    src:'',show:true
            }
        },
        computed:{
            ...mapState(['counter','next','SHIPS','nextUrl','total'])
        },
        methods:{
            ...mapMutations(['nextPage','prevPage']),
            ...mapActions(['getData','getMoreData']),

            scrollMe(){
                window.onscroll = () => {
  let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

  if (bottomOfWindow && this.nextUrl) {
    this.getMoreData();
  }
};
            }
        },
        components:{

        }
    }
</script>



<style lang="css" scoped>

li{
    list-style: none;
}

</style>