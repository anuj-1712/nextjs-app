
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBjLd-Z3kvF0HHmSXofgUu7U2XUhVwlRko",
  authDomain: "blogs-app-nextjs.firebaseapp.com",
  projectId: "blogs-app-nextjs",
  storageBucket: "blogs-app-nextjs.appspot.com",
  messagingSenderId: "226531793690",
  appId: "1:226531793690:web:ab8b2d6699045eeb486aa3"
};

const app = initializeApp(firebaseConfig);

// accessing the database in firestore
export const db = getFirestore(app)

// accessing the collection
export const usersRef = collection(db,"users")

export default app