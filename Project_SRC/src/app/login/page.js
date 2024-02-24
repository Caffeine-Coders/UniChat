"use client";
import Login from "../../Components/LoginPage/Login";
import { AuthProvider } from "../../Components/Contexts/authContext";

export default function LoginPage() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}
