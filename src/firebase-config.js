import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWZfxnaPpquKu4X-_YmnaJBF4pWxAYwpg",
  authDomain: "blog-4adf6.firebaseapp.com",
  projectId: "blog-4adf6",
  storageBucket: "blog-4adf6.appspot.com",
  messagingSenderId: "408858659910",
  appId: "1:408858659910:web:a1d87fa7f532c956ee4e47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
