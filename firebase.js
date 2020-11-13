import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBciS63wwC8RktMF37XJCyPYoQHKNEz4Ns",
    authDomain: "rz-merch.firebaseapp.com",
    databaseURL: "https://rz-merch.firebaseio.com",
    projectId: "rz-merch",
    storageBucket: "rz-merch.appspot.com",
    messagingSenderId: "960756877311",
    appId: "1:960756877311:web:729ed942c42b633ff309ca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
  export const dbMenuAdd = db.collection('clothes')