const state = { 
  orders: [],
}

const getters = {
  numberOfOrders: (state) => {
    return state.orders.length
  }
}

const mutations = {
  addOrder: (state, orders) => {
    state.orders.push(orders);
  }
}
const actions = {}

export default { state, getters, mutations, actions }

