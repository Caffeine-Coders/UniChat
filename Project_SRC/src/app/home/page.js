"use client";
import HomeFrame from "../../Components/HomeFrame/HomeFrame.jsx";
import { AuthProvider } from "../../Components/Contexts/authContext.jsx";
import RouteProtection from "../../Components/RouteProtection/RouteProtection.jsx";

export default function Home() {

  return (
    <RouteProtection>
      <AuthProvider>
        <HomeFrame />
      </AuthProvider>
    </RouteProtection>
  );
}
