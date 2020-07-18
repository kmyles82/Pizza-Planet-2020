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
    name: "home",
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
    name: "admin",
    beforeEnter: (to, from, next) => {
      alert('This is area is for authorized users only, please login to continue');
      next()
    }
  },
  {
    path: "/about",
    name: "about",
    component: About,
    children: [
      {
        path: "/history",
        component: History,
        name: "history"
      },
      {
        path: "/delivery",
        component: Delivery,
        name: "delivery"
      },
      {
        path: "/orderingGuide",
        component: OrderingGuide,
        name: "orderingGuide"
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

// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   if (to.path === '/admin') {
//     alert('navigation  triggered')
//     next()
//   }
//   next()
// })

export default router;
