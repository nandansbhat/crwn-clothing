import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC63rav96ovzaXRm5o5EmeoDLMCfvOTlfg",
  authDomain: "ecommerce-website-a54c5.firebaseapp.com",
  databaseURL: "https://ecommerce-website-a54c5.firebaseio.com",
  projectId: "ecommerce-website-a54c5",
  storageBucket: "ecommerce-website-a54c5.appspot.com",
  messagingSenderId: "307866498894",
  appId: "1:307866498894:web:a611339f7d945d5460501f",
  measurementId: "G-MLF3DN7Q5H"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt :  'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;