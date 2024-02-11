import { Roboto, Protest_Riot, Montserrat} from 'next/font/google'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

    const roboto = Roboto({
        weight: ['300', '400', '500', '700'],
        subsets: ['latin'],
        display: 'swap',
    });

    const protest_Riot = Protest_Riot({
        weight: ['300', '400', '500', '700'],
        subsets: ['latin'],
        display: 'swap',
    });

    
    const montserrat = Montserrat({
        weight: ['300', '400', '500', '700'],
        subsets: ['latin'],
        display: 'swap',
    });


    const theme = createTheme({
        palette: 
        {
            mode: 'dark',
            primary:{},
            secondary:{},
            highlights:{},
            whites:{},
            blacks:{},
        },
        typography: 
        {
            fontFamily: [
                roboto.style.fontFamily,
                protest_Riot.style.fontFamily,
                montserrat.style.fontFamily,
                //add more if you feel any.
            ],
        },
        components: 
        {
            MuiButton: {
                styleOverrides: 
                {
                  root: 
                  {
                    fontSize: '1rem',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontWeight: 'bold',
                  },
                //   contained:
                //   {
                //     backgroundColor:'',
                //     color: '',
                //     '&:hover':{
                //         backgroundColor:'',
                //     }
                //   },
                //   outlined:
                //   {
                //     backgroundColor:'',
                //     color: '',
                //     '&:hover':{
                //         borderColor:'',
                //         backgroundColor:'',
                //     }
                //   },
                },
            },
        },
    });
  
  export default theme;