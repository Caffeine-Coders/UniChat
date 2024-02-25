import { Roboto, Montserrat, Raleway_Dots, Caveat } from "next/font/google";
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

const caveat = Caveat({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
  });

