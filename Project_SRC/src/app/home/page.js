"use client";
import HomeFrame from "../../Components/HomeFrame/HomeFrame.jsx";
import { AuthProvider } from "../../Components/Contexts/authContext.jsx";
import RouteProtection from "../../Components/RouteProtection/RouteProtection.jsx";
import ThemeContext from "../../Components/Contexts/themeContext.jsx";
import { darktheme } from "../../Components/Themes/themes.jsx";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(darktheme);

  return (
    <RouteProtection>
      <AuthProvider>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <HomeFrame />
        </ThemeContext.Provider>
      </AuthProvider>
    </RouteProtection>
  );
}
