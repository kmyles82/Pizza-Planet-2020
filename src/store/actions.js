// import { firebaseAuth } from '../firebase'

// export const signIn = async ({
//     commit
//   }, user) => {
//     try {
//       const email = user.email;
//       const password = user.password;
//       const userData = await firebaseAuth.signInWithEmailAndPassword(
//         email,
//         password
//       );

//       // console.log(userData.user)

//       commit('userStatus', userData.user)

//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       if (errorCode === 'auth/wrong-password') {
//         alert('Wrong password')
//       } else {
//         alert(errorMessage)
//       }
//     }
// }
  
//   export const signOut = async ({
//     commit
//   }) => {
//     try {
//       await firebaseAuth.signOut()
//     } catch (error) {
//       alert(`error signing out, ${error}`);
//     }

//     commit('userStatus', null)
// }
  
