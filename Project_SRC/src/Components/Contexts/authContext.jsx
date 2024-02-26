"use client";
import { useState, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    typeof localStorage !== "undefined" &&
      localStorage.getItem("isAuthenticated") === "true"
  );

  const [userImage, setUserImage] = useState(
    typeof window !== "undefined" ? localStorage.getItem("userImage") : null
  );

  const [studentId, setStudentId] = useState(
    typeof window !== "undefined" ? localStorage.getItem("studentId") : null
  );

  const [discordServerId, setDiscordServerId] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("discordServerId")
      : null
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userImage,
        setUserImage,
        studentId,
        setStudentId,
        discordServerId,
        setDiscordServerId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
