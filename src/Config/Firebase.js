import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzRTP75gtDPZKXdH-VHWYMGGzIWfmV0Cc",
  authDomain: "sanvieclamcantho-c1b05.firebaseapp.com",
  projectId: "sanvieclamcantho-c1b05",
  storageBucket: "sanvieclamcantho-c1b05.appspot.com",
  messagingSenderId: "333249918191",
  appId: "1:333249918191:web:24812bf3a0ab10d49ed71a",
  measurementId: "G-9MK1T9DF5L",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
