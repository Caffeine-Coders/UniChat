import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'

export const addUser = async (emailid) => {
    console.log("here in add details",emailid)
  const res = await fetch(`./api/adduser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        email: emailid,
        status: false
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};