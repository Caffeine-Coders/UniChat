import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Transition from "./template";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UniChat",
  description: "Educational platform for students and teachers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollbarColor:"inherit", scrollBehavior:"smooth"}}>
      <body className={inter.className}>
        <AppRouterCacheProvider>
            {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
