// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// // Your web app's Firebase configuration
// const clientCredentials = {
//   apiKey: "AIzaSyDpUPlkCU1_gKF64R4MWnNhKC83ieYnFtQ",
//   authDomain: "next-arranque.firebaseapp.com",
//   projectId: "next-arranque",
//   storageBucket: "next-arranque.appspot.com",
//   messagingSenderId: "159393078879",
//   appId: "1:159393078879:web:6e57d47bbe4078352c45ea",
// };

// firebase.initializeApp(clientCredentials);

// export default firebase;


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpUPlkCU1_gKF64R4MWnNhKC83ieYnFtQ",
  authDomain: "next-arranque.firebaseapp.com",
  projectId: "next-arranque",
  storageBucket: "next-arranque.appspot.com",
  messagingSenderId: "159393078879",
  appId: "1:159393078879:web:6e57d47bbe4078352c45ea"
};

export const app = initializeApp(firebaseConfig);
