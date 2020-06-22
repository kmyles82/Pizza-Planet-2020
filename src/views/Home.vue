<template>
  <div class="home">
    <appHeader />
    <appHome />
    <appAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Home from "../components/Home";
// import Menu from "@/components/Menu";
import Admin from "@/components/Admin";


export default {
  name: "Home",
  components: {
    appHeader: Header,
    appHome: Home,
    // appMenu: Menu,
    appAdmin: Admin
  }
};
</script>
