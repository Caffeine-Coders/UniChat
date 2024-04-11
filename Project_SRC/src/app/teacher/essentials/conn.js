"use client"
import {auth, db, provider} from '../dbconnections/firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth"
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import {classifyUser} from '../dbconnections/getDetails'
import {addUser} from '../dbconnections/addTeacher'
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

async function userAdd(name,email,schoolname){
    console.log("here in conn user add",name,email,schoolname)
    await addUser(name,email,schoolname)

}
export function Signuplogin(){
    const router = useRouter()
    const provider = new GoogleAuthProvider()
    provider.addScope("https://www.googleapis.com/auth/drive");
    provider.addScope("https://www.googleapis.com/auth/documents");
    async function googleLogin() {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            sessionStorage.setItem("googletoken", token);
            sessionStorage.setItem("googleAccessToken",token)
            const user = result.user;
            let name = user.displayName;
            let photourl = user.photoURL;
            let email = user.email;
            let accessToken = user.accessToken;
            const verificationStatus = await userChecker(user);
            return {verificationStatus: verificationStatus, name: name, photourl: photourl, accessToken: token, email: email};
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // Handle errors here
        }
    }

    async function signout(){
        try{
            await signOut(auth)
            localStorage.clear()
            console.log("signed out")
            router.push('/teacher/login')
        } catch (error){
            console.log("error",error)
        }
    }
    
    async function unauthsignout(){
        try{
            await signOut(auth)
            localStorage.clear()
            console.log("signed out")
            // router.push('/te@cher/')
        } catch (error){
            console.log("error",error)
        }
    }

   async function signupaccount(name,email,schoolname) {
    console.log("here in conn sign up",name,email,schoolname)
      await userAdd(name,email,schoolname)
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

                router.push('/teacher/dashboard')
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
        googleLogin: googleLogin,
        signout: signout,
        unauthsignout: unauthsignout
    }
}