import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvRcZVNveN0NPHe5Z5g3hYg_yh3M5eTnI",
  authDomain: "sprint8-b6122.firebaseapp.com",
  projectId: "sprint8-b6122",
  storageBucket: "sprint8-b6122.appspot.com",
  messagingSenderId: "318163370715",
  appId: "1:318163370715:web:6d367ce58ad58d5cd9c2fe"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
