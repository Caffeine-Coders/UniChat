"use client";
import HomeFrame from "../../Components/HomeFrame/HomeFrame.jsx";
import { AuthProvider } from "@/Components/authContext";

export default function Home() {
  return (
    <AuthProvider>
      <HomeFrame />
    </AuthProvider>
  );
}
