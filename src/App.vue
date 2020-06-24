<template>
  <div id="app">
    <appHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    appHeader: Header
  }
};
</script>
<style>

</style>
