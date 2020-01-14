import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCf8uTYrJfC5-w-KdZYkp21jHrb-VrKjh0",
    authDomain: "burger-queen-labsp.firebaseapp.com",
    databaseURL: "https://burger-queen-labsp.firebaseio.com",
    projectId: "burger-queen-labsp",
    storageBucket: "burger-queen-labsp.appspot.com",
    messagingSenderId: "426252920474",
    appId: "1:426252920474:web:1a2f33b40101479a11a123"
  };

export const firebaseImpl = firebase.initializeApp(config);
export const db = firebase.firestore();
