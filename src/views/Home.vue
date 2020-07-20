<template>
  <div class="home">
    <appHome />
    <!-- <appAdmin /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "../components/Home";
// import Menu from "@/components/Menu";
// import Admin from "@/components/Admin";

export default {
  name: "Home",
  components: {
    appHome: Home,
    // appMenu: Menu,
    // appAdmin: Admin
  }
};
</script>
