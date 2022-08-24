import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBVY_D8bpZQkYJNSvceHyLtKVK_9tNHOV0",
    authDomain: "elsie-boutique.firebaseapp.com",
    projectId: "elsie-boutique",
    storageBucket: "elsie-boutique.appspot.com",
    messagingSenderId: "997767154533",
    appId: "1:997767154533:web:37294d5090cc21fd66ef8c"
};

const app = initializeApp(firebaseConfig);
const fireStoreDB = getFirestore(app);

export default app;