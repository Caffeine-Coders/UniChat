import { Roboto, Montserrat, Raleway_Dots } from "next/font/google";
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

const ralewaydots = Raleway_Dots({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const lighttheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fcfcfc",
      rare: "#272A2F",
      hover: "#EFEFEF",
      textcolor: "#84888A",
      ButtonColor: "#9182b6",
      ButtonHover: "#300e54",
      whites: "#FCFCFC",
      shadowGlow: "5px 5px 5px 5px rgba(31, 38, 135, 0.7)",
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
      hover: "#272B30",
      textcolor: "#ffffff",
      ButtonColor: "#9182b6",
      ButtonHover: "#B8AED2",
      whites: "#FCFCFC",
      shadowGlow: "3px 3px 3px 3px rgba(203, 176, 202, 0.7)",
    },
  },
  typography: {
    fontFamily: [
      roboto.style.fontFamily,
      montserrat.style.fontFamily,
      ralewaydots.style.fontFamily,
    ],
  },
});

export { lighttheme, darktheme };
