"use client";
import React, { useState } from "react";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    typeof localStorage !== "undefined" &&
      localStorage.getItem("isAuthenticated") === "true"
  );

  const [userImage, setUserImage] = useState(
    typeof window !== "undefined" ? localStorage.getItem("userImage") : null
  );

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userImage, setUserImage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
