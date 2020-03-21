<template>
  <div>
    Logged in 
    <span v-if="loggin">Yes</span>
    <span v-else>No</span>
    <div>
      <button class="btn btn-primary"
        @click="handleSignout"
      >Sign out</button>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
  export default {
    created() {
      firebase.auth().onAuthStateChanged( user => {
        this.loggin = !user;
      })
    },
    data(){
      return {
        loggin : false
      }
    },
    methods: {
     async handleSignout() {
       try{
        const data = await firebase.auth().signOut();
        console.log(data)
        this.$router.replace({name: "Login"})
       }catch(err) {
         console.log(err)
       }
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>