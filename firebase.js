//inicializo
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpUPlkCU1_gKF64R4MWnNhKC83ieYnFtQ",
  authDomain: "next-arranque.firebaseapp.com",
  projectId: "next-arranque",
  storageBucket: "next-arranque.appspot.com",
  messagingSenderId: "159393078879",
  appId: "1:159393078879:web:6e57d47bbe4078352c45ea",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

//Aunt

export const logearse = () => {
  const provider = new GithubAuthProvider();

  signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GithubAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = res.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
};

//fireestore

export const  agregarFireStore = (e) => {
  e.preventDefault();
  const nombre = e.target["Nombre"].value;
  const comentarios = e.target["Comentarios"].value;
  addDoc(collection(db, "ToDo"), { nombre, comentarios });
  e.target.reset()
};

//detectar si el usuario esta logeado
onAuthStateChanged(auth, (user) => {
  if (user == null) {
    console.log("no hay usuario");
  } else {
    console.log("logeado mandar a otra pagina y poner el state");
  }
});
