// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-i5EZtKVuNzdAcn7i50XBVrJxwHdTCDA",
  authDomain: "rn-project-e7eb6.firebaseapp.com",
  databaseURL: "https://rn-project-e7eb6-default-rtdb.firebaseio.com",
  projectId: "rn-project-e7eb6",
  storageBucket: "rn-project-e7eb6.appspot.com",
  messagingSenderId: "597905725104",
  appId: "1:597905725104:web:90f71aa5190e4badd04d75",
  measurementId: "G-HLRSM2XG9V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
