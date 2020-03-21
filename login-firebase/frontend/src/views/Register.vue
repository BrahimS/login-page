<template>
  <div class="container">
  <div v-if="error" class="error">{{error.message}}</div>
    <form action=""
      @submit.prevent="handleSubmit"
    >
      Register
      <div class="email">
       <input type="email" v-model="email" placeholder="email">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password">
      </div>
      <button type="submit" class="btn btn-primary mt-2">Register</button>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
  export default {
    methods: {
      async handleSubmit() {
        try{
         const user =  await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
         console.log(user)
         this.$router.replace({name: "Secret"});
          
        } catch (err){
          console.log(err)
        }
      }
    },
    data() {
      return {
        email: "",
        password: "",
        error: ""
      }
    }
    
  }
</script>

<style lang="scss" scoped>


</style>