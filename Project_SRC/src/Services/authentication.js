import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../config";

const auth = getAuth(app);

export const classifyUser = async (email) => {
  const res = await fetch(`/api/classifyUser`, {
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

export const getLoggedInUserDetails = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        resolve(currentUser);
      } else {
        resolve(null);
      }
    });
  });
};
