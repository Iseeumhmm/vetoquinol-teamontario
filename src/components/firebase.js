import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDpHYuQMDWm0C8Q_4VFIFnbp9p-5LWRMA0",
    authDomain: "pain-mangement.firebaseapp.com",
    databaseURL: "https://pain-mangement.firebaseio.com",
    projectId: "pain-mangement",
    storageBucket: "pain-mangement.appspot.com",
    messagingSenderId: "904712354505",
    appId: "1:904712354505:web:03b6cba0bd493bcd0ceb18",
    measurementId: "G-HK8E691FB8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const databaseRef = firebase.database().ref();
  export const attendeesRef = databaseRef.child("attendees")