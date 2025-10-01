// src/services/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// ✅ Tu configuración copiada del SDK
const firebaseConfig = {
  apiKey: "AIzaSyD5jdvijPkzMCWW3Z55a4X_6UDu19LWNvY",
  authDomain: "cvportafolio-d0dde.firebaseapp.com",
  projectId: "cvportafolio-d0dde",
  storageBucket: "cvportafolio-d0dde.firebasestorage.app",
  messagingSenderId: "877436294663",
  appId: "1:877436294663:web:ba1ad75aeef1e25dcbfca2",
  measurementId: "G-3ZRK63574G"
};

// ✅ Inicializa Firebase y exporta servicios
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);       // Firestore
export const storage = getStorage(app);    // Storage (para imágenes, etc.)
export const auth = getAuth(app);          // Autenticación (si la usas)
