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
// import { store } from '../store/index'

export default {
  name: "login",
  data() {
    return {
      email: "kmyles82@gmail.com",
      password: "password"
    };
  },
  methods: {
    signIn() {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signIn', user)
    }
  }
};
</script>

<style>
</style>