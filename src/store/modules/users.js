import {
  firebaseAuth
} from '../../firebase'

const state = {
  currentUser: null
}

const getters = {
  currentUser: (state) => state.currentUser
}

const mutations = {
  userStatus: (state, user) => {
    user === null ? state.currentUser = null : state.currentUser = user.email
  }
}

const actions = {
  signIn: async ({
    commit
  }, user) => {
    try {
      const email = user.email;
      const password = user.password;
      const userData = await firebaseAuth.signInWithEmailAndPassword(
        email,
        password
      );

      // console.log(userData.user)

      commit('userStatus', userData.user)

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password')
      } else {
        alert(errorMessage)
      }
    }
  },

  signOut: async ({
    commit
  }) => {
    try {
      await firebaseAuth.signOut()
    } catch (error) {
      alert(`error signing out, ${error}`);
    }

    commit('userStatus', null)
  }
}

export default { state, getters, mutations, actions }

