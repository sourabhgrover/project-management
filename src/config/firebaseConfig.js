import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// console.log(process.env.REACT_APP_FIREBASE_API_KEY, process.env.REACT_APP_FIREBASE_PROJECT_ID)
var firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    apiKey: 'AIzaSyC-t7LipN8A0DP2GYPFQI0DeDPTD5ICJdI',
    authDomain: 'project-management-f787a.firebaseapp.com',
    databaseURL: 'https://project-management-f787a.firebaseio.com',
    projectId: 'project-management-f787a',
    storageBucket: 'project-management-f787a.appspot.com',
    messagingSenderId: '757297369969',
    appId: '1:757297369969:web:3e542bca69fb5af8145cd0'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;