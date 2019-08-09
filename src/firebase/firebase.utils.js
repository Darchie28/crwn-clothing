import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzNn5BfNbx_9PqG3eGbxNrOFOE-aJUdcg",
  authDomain: "crwn-db-d9104.firebaseapp.com",
  databaseURL: "https://crwn-db-d9104.firebaseio.com",
  projectId: "crwn-db-d9104",
  storageBucket: "",
  messagingSenderId: "795093986230",
  appId: "1:795093986230:web:05b64d18b8ea0c98"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
