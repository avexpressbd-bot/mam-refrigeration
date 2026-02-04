import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, serverTimestamp } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUS_DaZUUaXvcVMTj57JJkNVLSFPJ4tio",
  authDomain: "m-a-m-refrigeration.firebaseapp.com",
  databaseURL: "https://m-a-m-refrigeration-default-rtdb.firebaseio.com",
  projectId: "m-a-m-refrigeration",
  storageBucket: "m-a-m-refrigeration.firebasestorage.app",
  messagingSenderId: "416294217466",
  appId: "1:416294217466:web:c1a0824e25de0c89450b43"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, serverTimestamp };