import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT0GRJLGUMiDit2SyP9qZZ0svAzC4sDFI",
  authDomain: "task-app-46861.firebaseapp.com",
  projectId: "task-app-46861",
  storageBucket: "task-app-46861.appspot.com",
  messagingSenderId: "466967746541",
  appId: "1:466967746541:web:05507f96dbacb1c93a39e4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
