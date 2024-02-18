"use client"
import {auth, db} from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export function signupaccount(name, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
        console.log(user)
        try {
          const docRef =  addDoc(collection(db, "teacher"), {
            name:name,
            email:email,
            password:password
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
    });
}

export function loginaccount(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      const q = query(collection(db, "teacher"), where("email", "==", email));
      getDocs(q).then((querySnapshot)=>{
        console.log(querySnapshot)
        querySnapshot.forEach((doc)=>{
            console.log(doc.data())
        })
      }).catch((error)=>{
        console.log("error",error)
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
}