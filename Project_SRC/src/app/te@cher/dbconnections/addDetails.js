import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'

export const addUser = async (email) => {
    console.log("here in add details",email)
  const res = await fetch(`./api/adduser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
        email: email,
        status: false
     }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  return data;
};