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
      hover: "#272B30",
      textcolor: "#6E767E",
      ButtonColor: "#5CDB95",
      ButtonHover: "#05386B",
      whites: '#FCFCFC',
    },
  },
  typography: {
    fontFamily: [roboto.style.fontFamily, montserrat.style.fontFamily, ralewaydots.style.fontFamily],
  },
});

export { lighttheme, darktheme };
