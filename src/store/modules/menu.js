/* eslint-disable */
import { firestoreAction } from 'vuexfire'
import {
  dbMenuRef
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}