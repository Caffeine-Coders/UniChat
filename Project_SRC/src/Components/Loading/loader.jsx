'use client';
 
import { motion } from 'framer-motion';
import logo from "../../Assets/logo.png";
import Image from 'next/image';
import Box from '@mui/material/Box';

const Loader =() =>
{
    return (
        <Box
        sx={{
            width: '100vw',
            height: '100vh',
            backgroundImage: 'linear-gradient(145deg, hsl(0deg 0% 0%) 0%, hsl(270deg 75% 3%) 40%, hsl(271deg 74% 6%) 62%, hsl(270deg 71% 9%) 72%, hsl(270deg 72% 13%) 79%, hsl(269deg 72% 15%) 84%, hsl(270deg 73% 19%) 89%, hsl(269deg 71% 22%) 93%, hsl(270deg 72% 25%) 96%, hsl(270deg 72% 28%) 100%)',
            overflow: 'auto', // Add overflow: auto to enable scrolling if needed
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
        }}
        >
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, duration: 0.5,}}
            transition={{ type: 'spring', stiffness: 260, damping: 10 }}
            >
                <Image src={logo.src} alt="Your Image" width={650} height={650} /> 
            </motion.div>
    </Box>
       
    );
}
export default Loader;