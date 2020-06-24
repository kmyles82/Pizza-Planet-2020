/* eslint-disable prettier/prettier */
/* eslint-disable */

<template>
  <div class="login_wrapper">
    <form>
      <div>
        <label for="email">Email address</label>
        <input type="email" id="email" placeholder="Enter email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" v-model="password" />
      </div>
      <button type="button" class="btn_green" @click.prevent="signIn">Sign In</button>
    </form>
  </div>
</template>

<script>
import { firebaseAuth } from "../firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async signIn() {
      try {
        const email = this.email;
        const password = this.password;
        await firebaseAuth.signInWithEmailAndPassword(
          email,
          password
        );
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        if(errorCode === 'auth/wrong-password'){
          alert('Wrong password')
        } else {
          alert(errorMessage)
        }
      }
    }
  }
};
</script>

<style>
</style>