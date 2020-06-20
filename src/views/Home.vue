<template>
  <div class="home">
    <appHeader />
    <appHome />
    <appMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import Home from "../components/Home";
import Menu from "@/components/Menu";

export default {
  name: "Home",
  components: {
    appHeader: Header,
    appHome: Home,
    appMenu: Menu
  }
};
</script>
