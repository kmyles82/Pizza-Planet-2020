/* eslint-disable */

import Vue from "vue";
import Vuex from "vuex";
import menu from './modules/menu'
import users from './modules/users'
import orders from './modules/orders'
import { vuexfireMutations } from 'vuexfire'

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    orders,
    menu,
    users,
  }
});