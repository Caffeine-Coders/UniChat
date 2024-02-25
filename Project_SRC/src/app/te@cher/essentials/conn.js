"use client"
import {auth, db, provider} from '../dbconnections/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import {classifyUser} from '../dbconnections/getDetails'
import {addUser} from '../dbconnections/addDetails'
async function userChecker(user){
    const userClassification = await classifyUser(user.email);
    console.log(userClassification.type)
    if (userClassification.type == "Not Verified"){
        return user.email
    } else if(userClassification.type == "Verified False"){
        return "in db and false"
    } else{
        return "in db and true"
    }

}

async function userAdd(email){
    console.log("here in conn user add",email)
    await addUser(email)

}
export function Signuplogin(){
    const router = useRouter()
    const provider = new GoogleAuthProvider()

    async function googleLogin() {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            
            // Wait for userChecker to complete and return its result
            const verificationStatus = await userChecker(user);
            return verificationStatus;
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // Handle errors here
        }
    }
    
   async function signupaccount(email) {
    console.log("here in conn sign up",email)
      await userAdd(email)
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
        signupaccount:signupaccount,
        googleLogin: googleLogin
    }
}