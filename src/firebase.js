// Importaciones
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyA8ffvlQPZoPVO7PrLe_KodNS8IZlc_BZU",
  authDomain: "proyectofinaldereact.firebaseapp.com",
  projectId: "proyectofinaldereact",
  storageBucket: "proyectofinaldereact.firebasestorage.app",
  messagingSenderId: "686291349948",
  appId: "1:686291349948:web:b87e9843aaa8e099007bb9",
};

// Inicializar app
const app = initializeApp(firebaseConfig);

// 🔥 IMPORTANTE: inicializar Firestore
export const db = getFirestore(app);