import { Roboto, Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lighttheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fcfcfc",
      rare: "#272A2F",
      hover: "#efefef",
      textcolor: "#84888a",
      ButtonColor: "#05386B",
      ButtonHover: "#5CDB985",
    },
  },
  typography: {
    fontFamily: [roboto.style.fontFamily, montserrat.style.fontFamily],
  },
});

const darktheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1A1D1F",
      rare: "#272A2F",
      hover: "#272b30",
      textcolor: "#6E767E",
      ButtonColor: "#5CDB95",
      ButtonHover: "#05386B",
    },
  },
  typography: {
    fontFamily: [roboto.style.fontFamily, montserrat.style.fontFamily],
  },
});

export { lighttheme, darktheme };
