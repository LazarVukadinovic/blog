import { initializeApp } from "firebase/app";
import {
  getFirestore
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBck_7oHi_8HFLB5wz7O5paou65N52xQSY",
  authDomain: "blog-e6020.firebaseapp.com",
  projectId: "blog-e6020",
  storageBucket: "blog-e6020.appspot.com",
  messagingSenderId: "841389510163",
  appId: "1:841389510163:web:ce4ad01e94482522aa39e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
