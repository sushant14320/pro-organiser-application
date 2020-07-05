import firebase from 'firebase/app';
//import * as firebase from 'firebase'; 
import 'firebase/firestore';
import 'firebase/database';

//const settings = {timestampsInSnapshots: true};
var firebaseConfig = {
  apiKey: "AIzaSyB_NZsQstupp9xt0_q24KqP8t5sUlzPVhU",
  authDomain: "pro-app-7c18b.firebaseapp.com",
  databaseURL: "https://pro-app-7c18b.firebaseio.com",
  projectId: "pro-app-7c18b",
  storageBucket: "pro-app-7c18b.appspot.com",
  messagingSenderId: "730072302797",
  appId: "1:730072302797:web:c6bc3c92bec75f21995584",
  measurementId: "G-W13H1BQPW6"
  };
  
  firebase.initializeApp(firebaseConfig);
 // firebase.firestore().settings(settings);
  
  export default firebase;
  