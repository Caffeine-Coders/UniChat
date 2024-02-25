import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'

export const classifyUser = async (email) => {
  const res = await fetch(`./api/checkuser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  return data;
};