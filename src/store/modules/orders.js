import { firestoreAction } from 'vuexfire'
import {
  dbOrders
} from "../../firebase"

const state = { 
  orders: [],
}

const getters = {
  numberOfOrders: state => state.orders.length,
  getOrders: state => state.orders
}

const mutations = {
  addOrder: (state, orders) => {
    state.orders.push(orders);
  }
}
const actions = {
  setOrdersRef: firestoreAction(context => {
    return context.bindFirestoreRef('orders', dbOrders)
  })
}

export default { state, getters, mutations, actions }

