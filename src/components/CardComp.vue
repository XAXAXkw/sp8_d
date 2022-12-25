<template>

    <div  v-if="show">
    <div class="bkg">
    <div class="container d-flex mt-4">        
  </div>
    
</div>
    <div class=" container  d-flex align-items-center p-4 ">

<div class="wrapper">
    <div class="card bg-warning" style="width: 18rem;">
   
 
  <div class="card-body">
   SPACESHIP <h1 class="card-title text-dark text-left" style="color:goldenrod;font-size:15px"> {{this.$store.state.SHIPS[$route.params.id].name}}</h1>


    <div class="container">
    
 <p class="card-text text-warning bg-dark rounded-3 m-1 p-1">{{this.$store.state.SHIPS[$route.params.id].manufacturer}}</p>
    <div class="row">
        <div class="col-12 col-md-6 col-sm-6 ">
        <p class="card-text text-dark">PASSENGERS :{{this.$store.state.SHIPS[$route.params.id].passengers}}</p>
    <p class="card-text text-dark">CLASS :{{this.$store.state.SHIPS[$route.params.id].starship_class}}</p>
    <p class="card-text text-dark">MODEL :{{this.$store.state.SHIPS[$route.params.id].model}}</p>
    <p class="card-text text-dark">CREW :{{this.$store.state.SHIPS[$route.params.id].crew}}</p>
    </div>
    <div class="col-12 col-md-4 col-sm-6 ">
       
    <p class="card-text text-dark">LENGTH :{{this.$store.state.SHIPS[$route.params.id].length}} feet</p>
    <p class="card-text text-dark">POWER :{{this.$store.state.SHIPS[$route.params.id].hyperdrive_rating}}</p>
    <p class="card-text text-dark">MGLT :{{this.$store.state.SHIPS[$route.params.id].MGLT}}</p>
    </div>
    
    
    </div>


    
    </div>


 <div class="bg-light m-2 border border-dark">
    <img :src="'https://starwars-visualguide.com/assets/img/starships/'+ $route.params.id +'.jpg'" class="card-img-top" />
     <img src="../assets/star-wars.svg" class="card-img-top" alt="...">
    </div>
    <router-link to="/list" > <button class="btn btn-sm btn-dark">BACK</button></router-link>
  
  </div>
</div>

</div>
    </div></div>
</template>

<script>
import { mapActions,mapMutations,mapState } from 'vuex';
    export default {
        name:'CardComp',
        data(){
            return{
                show:true
            }
        },
        created(){
            this.getData()
            
          
            
        },
  
        props:{src:String},
        computed:{
 
          
      
            ...mapState(['SHIPS'])
        },
        methods:{
            ...mapMutations(['nextPage','prevPage']),
            ...mapActions(['getData','getMoreData'])
        },
    }
</script>

<style lang="css" scoped>

.wrapper{
    margin: auto;
}
.bkg{
background-color: rgba(0, 0, 0, 0.855);
min-width:100%;
min-height:100%;
position:absolute;
margin:0;
}
h1{
    font-weight: bold;
}
</style>