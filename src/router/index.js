import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../components/Menu.vue";
import Contact from "../components/Contact.vue";
import About from "../components/About.vue";
import History from "../components/History.vue";
import Delivery from "../components/Delivery.vue";
import OrderingGuide from "../components/OrderingGuide.vue";
import Admin from "../components/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/admin",
    component: Admin,
    name: "admin"
  },
  {
    path: "/about",
    name: "about",
    component: About,
    children: [
      {
        path: "/history",
        component: History
      },
      {
        path: "/delivery",
        component: Delivery
      },
      {
        path: "/orderingGuide",
        component: OrderingGuide
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
