import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Accounting from 'accounting-js'

Vue.config.productionTip = false;

//creates a global filter
Vue.filter('currency', val => {
  return Accounting.formatMoney(val)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
