import { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCstdil4PN6f-vkPZdVbzTAahqegqleNcU",
    authDomain: "straling-9dd24.firebaseapp.com",
    databaseURL: "https://straling-9dd24-default-rtdb.firebaseio.com",
    projectId: "straling-9dd24",
    storageBucket: "straling-9dd24.appspot.com",
    messagingSenderId: "26471210971",
    appId: "1:26471210971:web:654cb16db99b2738ea11fe",
    measurementId: "G-X69BFE3VSK"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
