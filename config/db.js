import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSAvzk6Ik_tUoPOlS41SimHqhnYmU3-t8",
    authDomain: "rsvp-d1c3c.firebaseapp.com",
    databaseURL: "https://rsvp-d1c3c.firebaseio.com",
    projectId: "rsvp-d1c3c",
    storageBucket: "rsvp-d1c3c.appspot.com",
    messagingSenderId: "379903294658",
    appId: "1:379903294658:web:5d4b7a2557a044db"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
