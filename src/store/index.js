import { createStore } from 'vuex'
import axios from 'axios'




export default createStore({
  state: {
    
      SHIPS:[],shipUrl:'',nextUrl:'',user:{loggedIn:false,data:null},total:0
   
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
    
    
    ,
    setData(state, payload){
      
      //state.nextUrl=(payload.next.slice(-4).replace(/[^0-9]/g,''))-1;
      state.total = payload.count;
      for(let item in payload.results){

        if(state.SHIPS.length<state.total){
                state.SHIPS.push(payload.results[item]);
        }


      }
  

    },
    setNext(state, payload){
      state.nextUrl=payload.next;
      
    }},
  
    addData(state,payload){
      
    
      state.SHIPS = payload.results;
      console.log(state.SHIPS);
    },


  actions: {
    


    
    //async
    async getData( {commit} ){
      let data = await axios.get('https://swapi.py4e.com/api/starships');
      console.log(data);
      commit('setData', data.data);
      commit('setNext', data.data);
      
    },
    //async
    async getMoreData({ commit }) {
      if (this.state.nextUrl) {
 
        let data = await axios.get(this.state.nextUrl);
        console.log(data.data.results);
       
          commit('setData', data.data);
          commit('setNext', data.data);
       
      }else{
      
        let data = await axios.get('https://swapi.py4e.com/api/starships');
        console.log(data);
        commit('setData', data.data);
        commit('setNext', data.data);
        }
    
      
    },
    
  },
  modules: {
  }
})
