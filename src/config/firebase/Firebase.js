import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDk_I1v3UQUYA1U_6S8zZt67A3wigSb47E",
  authDomain: "facebook-clone-b474e.firebaseapp.com",
  projectId: "facebook-clone-b474e",
  storageBucket: "facebook-clone-b474e.appspot.com",
  messagingSenderId: "869396119491",
  appId: "1:869396119491:web:3fcd3c52ede3f6e8d38776",
  measurementId: "G-QMY8Y33V33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db