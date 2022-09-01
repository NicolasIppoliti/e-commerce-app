import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBVY_D8bpZQkYJNSvceHyLtKVK_9tNHOV0",
    authDomain: "elsie-boutique.firebaseapp.com",
    projectId: "elsie-boutique",
    storageBucket: "elsie-boutique.appspot.com",
    messagingSenderId: "997767154533",
    appId: "1:997767154533:web:37294d5090cc21fd66ef8c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// export async function saveProductsToFirebase(){
//     const collectionProducts = collection(queryDB, "products")
//     for(let items of itemData){
//         const docref = await addDoc(collectionProducts, items)
//         console.log(docref.id)
//     }
// }
// FUNCTION PARA SUBIR TODOS LOS ITEMS A FIREBASE