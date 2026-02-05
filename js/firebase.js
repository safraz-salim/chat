import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAs4KNStuZhj_lVKtJUhjWWU9hcXY89nXM",
  authDomain: "chat-app-7fdb6.firebaseapp.com",
  projectId: "chat-app-7fdb6",
  storageBucket: "chat-app-7fdb6.firebasestorage.app",
  messagingSenderId: "582398495923",
  appId: "1:582398495923:web:181dd33c4ebaa7c9b2b4c6",
  measurementId: "G-NSZ94FF0G2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
