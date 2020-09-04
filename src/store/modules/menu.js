/* eslint-disable */
import { firestoreAction } from 'vuexfire'
import {
  dbMenuRef,
  dbOrdersRef
} from "../../firebase"

const state = {
  menuItems: []
}

const getters = {
  getMenuItems: state => state.menuItems
}

const mutations = {}

const actions = {
  setMenuRef: firestoreAction(context => {
    return context.bindFirestoreRef('menuItems', dbMenuRef)
  }),
  addMenuItem: async (context, pizza) => {
    try{
      dbMenuRef.add(pizza);
    }catch(error){
      alert(`Error creating new pizza ${error}`)
    }
  },
  removeMenuItem: async (context, id) => {
    try{
      const item = await dbMenuRef.doc(id);
      item.delete();
    }catch(error){
      alert(`Error removing menu item ${error}`)
    }
  },
  removeOrder: async (context, id) => {
    try{
      const order = await dbOrdersRef.doc(id);
      order.delete();
    }catch(error){
      alert(`Error removing order ${error}`)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}