<template>
  <div class="login_wrapper">
    <form>
      <div>
        <label for="email">Email address</label>
        <input type="email" id="email" placeholder="Enter email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter password" />
      </div>
      <button type="button" class="btn_green">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>

<style scoped>
button {
  background: rgb(63, 145, 63);
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  border: none;
}

label {
  display: block;
  margin: 0 0 10px 0;
}

input{
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  background: rgb(254, 254, 252);
  border: solid 1px #f79e38;
}
</style>