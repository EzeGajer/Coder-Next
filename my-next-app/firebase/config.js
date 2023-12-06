// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBakSKRETum2m8Q7ccBqYGz4ANEVxpTv84",
    authDomain: "fb-curso-next.firebaseapp.com",
    projectId: "fb-curso-next",
    storageBucket: "fb-curso-next.appspot.com",
    messagingSenderId: "957081221827",
    appId: "1:957081221827:web:3250b84d91e36added8076"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
