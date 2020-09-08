/* eslint-disable prettier/prettier */
/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../components/Menu.vue";
// const Menu = () => import('../components/Menu.vue')
import Contact from "../components/Contact.vue";
// const Contact = () => import(/* webpackChunkName: "menuGroup" */ '../components/Contact.vue')
import About from "../components/About.vue";
// const About = () => import(/* webpackChunkName: "menuGroup" */ '../components/About.vue')
import History from "../components/History.vue";
import Delivery from "../components/Delivery.vue";
import OrderingGuide from "../components/OrderingGuide.vue";
import Admin from "../components/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }
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
      alert('This area is for authorised users only, please login to continue');
      next();
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
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return  { selector: to.hash } 
    }
  }
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
