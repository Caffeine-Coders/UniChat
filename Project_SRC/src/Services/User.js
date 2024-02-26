import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../config";

const auth = getAuth(app);

export const ClassifyUser = async (email) => {
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

export const UpdateFirstTimeLogin = async (email) => {
  const res = await fetch(`/api/updateFirstTimeLogin`, {
    method: "PUT",
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

export const LogoutUser = () => {
  return new Promise((resolve, reject) => {
    auth
      .signOut()
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const GetLoggedInUserDetails = () => {
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
