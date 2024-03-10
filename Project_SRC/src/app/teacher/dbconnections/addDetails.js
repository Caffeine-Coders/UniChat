import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'

export const addUser = async (username,emailid,schoolname) => {
    console.log("here in add details",username,emailid,schoolname)
  const res = await fetch(`./api/adduser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        name:username,
        email: emailid,
        school: schoolname,
        status: false
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};