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

db.enablePersistence().catch((error) => {
    if (error.code === 'failed-precondition') {
        console.warn('O modo offline não está disponível em várias abas ao mesmo tempo.');
    } else if (error.code === 'unimplemented') {
        console.warn('O modo offline não é compatível com este navegador.');
    } else {
        console.error('Não foi possível ativar o modo offline do Firestore.', error);
    }
});
