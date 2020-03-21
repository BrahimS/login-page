import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from 'firebase';
import 'firebase/auth';
import 'bootstrap/scss/bootstrap.scss';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAv57XfPe7W_mHCZcZb8YhVz3ou8243bQ",
  authDomain: "login-641b9.firebaseapp.com",
  databaseURL: "https://login-641b9.firebaseio.com",
  projectId: "login-641b9",
  storageBucket: "login-641b9.appspot.com",
  messagingSenderId: "31843875043",
  appId: "1:31843875043:web:5e7f4c8662b980a0bbadd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let app;

firebase.auth().onAuthStateChanged( user => {
  console.log(user);
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app"); 
  }
})
