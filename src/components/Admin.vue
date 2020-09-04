/* prettier/prettier *//* eslint-disable */
<template>
  <div class="admin_wrapper">
    <section v-if="currentUser !== null">
      <div class="current_user_wrapper">
        <span>Logged in as:</span>
        {{ currentUser }}
        <button type="button" class="btn_red" @click.prevent="signOut">
          Sign Out
        </button>
      </div>
      <NewPizza />
      <div class="menu_wrapper">
        <h3>Menu:</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Remove from menu</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in getMenuItems" :key="index">
            <tr>
              <td>{{ item.name }}</td>
              <td>
                <button type="button" class="btn_red" @click="removeMenuItem(item.id)">&times;</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="orders_wrapper">
        <h3>Current Orders ( {{ numberOfOrders }}):</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody v-for="(order, index) in getOrders" :key="index">
            <tr class="order_number">
              <th colspan="4">
                <strong>Order Number: {{ index+1 }}</strong>
                <button type="button" class="btn_red" @click="removeOrder(order.id)">&times;</button>
              </th>
            </tr>
            <tr v-for="(pizza, index) in order.pizzas" :key="pizza.id">
              <td>{{ pizza.name }}</td>
              <td>{{ pizza.size }}"</td>
              <td>{{ pizza.quantity }}</td>
              <td>{{ pizza.price * pizza.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <Login />
  </div>
</template>

<script>
import NewPizza from "@/components/NewPizza";
import Login from "@/components/Login";
import { mapGetters } from "vuex";

export default {
  name: "admin",
  data() {
    return {};
  },
  components: {
    NewPizza,
    Login,
  },
  computed: {
    ...mapGetters([
      "getMenuItems",
      "numberOfOrders",
      "currentUser",
      "getOrders",
    ]),
    // getMenuItems(){
    //   return this.$store.getters.getMenuItems
    // },
    // numberOfOrders(){
    //   return this.$store.getters.numberOfOrders
    // },
    // currentUser(){
    //   return this.$store.getters.currentUser
    // }
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
    },
    removeMenuItem(id) {
      this.$store.dispatch('removeMenuItem', id)
    },
    removeOrder(id) {
      this.$store.dispatch('removeOrder', id)
    }
  },
};
</script>

<style scoped>
.admin_wrapper {
  margin: 10px;
}

.current_user_wrapper,
.order_wrapper,
.menu_wrapper {
  margin: 10px 0;
  padding: 10px;
  border: solid 1px #f79e38;
}

table {
  text-align: left;
  width: 70vw;
}

.order_number th {
  background: #ddd;
}

.order_number button {
  margin: 0 10px;
}
</style>
