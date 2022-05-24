import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMKe78Ker8BGZAVfAJcoI75cMCgJ6U40k",
  authDomain: "quizryapp.firebaseapp.com",
  projectId: "quizryapp",
  storageBucket: "quizryapp.appspot.com",
  messagingSenderId: "192458392010",
  appId: "1:192458392010:web:eb7a989d4b2c210f944f33",
  measurementId: "G-0ZF3X2W80R"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

export default firebase;