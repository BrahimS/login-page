<template>
  <div>
    <p>Login</p>
    <form @submit.prevent="handleSumbit">
    <div class="login">
      <input type="email" placeholder="email" v-model="email">
    </div>
    <div class="password">
      <input type="password" placeholder="password" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary mt-2"> Login</button>
    
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
  </div>
</template>

<script>
  import * as firebase from "firebase/app";
  import "firebase/auth";
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      async handleSumbit() {
        try {
          const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          console.log(val)
          this.$router.replace({ name: "Secret"})
          
        } catch (err) {
          console.log(err)
        }
        
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>