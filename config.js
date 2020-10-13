import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyD6iDNjkJl8pOyOTCN7d5We55PpbqWnZzo",
    authDomain: "willy-app-83a11.firebaseapp.com",
    databaseURL: "https://willy-app-83a11.firebaseio.com",
    projectId: "willy-app-83a11",
    storageBucket: "willy-app-83a11.appspot.com",
    messagingSenderId: "768604015695",
    appId: "1:768604015695:web:a36c7e74568ae82887ae3a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();