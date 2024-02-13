'use client';
import { Roboto, Montserrat} from 'next/font/google'
import { createTheme } from '@mui/material/styles';


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
        palette: 
        {
            mode: 'light',
            primary:
            {
                main: '#fcfcfc',
                hover: '#efefef',
                textcolor: '#84888a',
                ButtonColor: '#05386B',
                ButtonHover: '#5cdb95',
            },
        },
        typography: 
        {
            fontFamily: [
                roboto.style.fontFamily,
                montserrat.style.fontFamily,
                //add more if you feel any.
            ],
        },
    });

    const darktheme = createTheme({
        palette: 
        {
            mode: 'dark',
            primary:{
                main: '#1a1d1f',
                hover: '#272b30',
                textcolor: '#6e767e',
                ButtonColor: '#5cdb95',
                ButtonHover: '#05386B',
                whites: '#fcfcfc',
            }
        },
        typography: 
        {
            fontFamily: [
                roboto.style.fontFamily,
                montserrat.style.fontFamily,
                //add more if you feel any.
            ],
        },
    });
  
  export {lighttheme, darktheme};
