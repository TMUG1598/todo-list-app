import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbo4UbJeJ1YaJokJ291DowPGDWDeGXQNY",
    authDomain: "tmug-to-do-list-app.firebaseapp.com",
    databaseURL: "https://tmug-to-do-list-app.firebaseio.com",
    projectId: "tmug-to-do-list-app",
    storageBucket: "tmug-to-do-list-app.appspot.com",
    messagingSenderId: "785005639611",
    appId: "1:785005639611:web:27eb3a428f0289fff7f69e"
});

const db = firebaseApp.firestore();

export default db;