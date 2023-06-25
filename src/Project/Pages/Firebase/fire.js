import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  logIn,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useContext, useEffect } from "react";
import { ApiContext } from "../../ApiContext/AllContextApi";

const firebaseConfig = {
  apiKey: "AIzaSyAHbnep9OyDLq1jYOBjC26BkXpjItFIfU8",
  authDomain: "login-86d17.firebaseapp.com",
  projectId: "login-86d17",
  storageBucket: "login-86d17.appspot.com",
  messagingSenderId: "534015608525",
  appId: "1:534015608525:web:ca564aac2cf65c23a24b84",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}

export function loginIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Custom Hook
export function useAuth() {
  const { user, setUser } = useContext(ApiContext);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));
    return unsub;
  }, []);
  return user;
}
