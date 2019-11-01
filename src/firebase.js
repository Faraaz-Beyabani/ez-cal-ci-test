import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDmbHVABhP0Wni4OdZhRilLk3PzmYQkZQc",
  authDomain: "travis-ez-cal.firebaseapp.com",
  databaseURL: "https://travis-ez-cal.firebaseio.com",
  projectId: "travis-ez-cal",
  storageBucket: "travis-ez-cal.appspot.com",
  messagingSenderId: "321419832652",
  appId: "1:321419832652:web:6181128df7e115545a73e9",
  measurementId: "G-53N53FFWB6"
};

firebase.initializeApp(firebaseConfig);

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

export const db = firebase.database().ref("users");