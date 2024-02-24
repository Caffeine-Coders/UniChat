"use client"
import {auth, db} from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useRouter } from 'next/navigation';

export function Signuplogin(){
    const router = useRouter()
    function signupaccount(name, email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            try {
                const docRef =  addDoc(collection(db, "teacher"), {
                name:name,
                email:email,
                status:false
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
        });
    }

    function loginaccount(email, password) {
    let statusVal

    const q =  query(collection(db, "teacher"), where("email", "==", email));
    getDocs(q).then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            console.log(doc.data().status)
            statusVal = doc.data().status
            console.log("statusval",statusVal)
            if (statusVal == true){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user",doc.data().name,user.email)

                router.push('/te@cher/prof')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
            }
            else{
                console.log("user not approved")
                window.alert("User is not approved yet!") 
            }
            })
        }).catch((error)=>{
        console.log("error",error)
    })
    }
    return{
        loginaccount:loginaccount,
        signupaccount:signupaccount
    }

}