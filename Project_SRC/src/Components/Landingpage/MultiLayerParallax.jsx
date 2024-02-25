"use client";
import {motion, useScroll, useTransform} from 'framer-motion';
import React from 'react';
import { useRef } from 'react';
import BaseLayer from '../../Assets/Layering/BaseLayerB.png';
import BaseLayer1 from '../../Assets/Layering/BaseLayer3.png';
import { ThemeProvider, Typography } from '@mui/material';
import { darktheme, lighttheme } from '../Themes/themes';
import { Button } from '@mui/base';


export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <ThemeProvider theme={darktheme}>
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden relative grid place-items-center"
            style={{
              justifyContent: "center",
            alignItems: "center",
            display: "flex",
            }}
        >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${BaseLayer.src}')`,
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            y: backgroundY,
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${BaseLayer1.src})`,
            backgroundPosition: "bottom",
            backgroundSize: "contain",
          }}
        />
        {/* <motion.div
                style={{ y: textY  }}
                className="font-bold text-7xl md:text-9xl relative z-20"
                >
                <Typography variant='h1' sx={{
                    fontFamily:darktheme.typography.fontFamily[2],
                    fontWeight: 400,
                    justifyContent: "center",
                    alignItems: "center",
                    color: (theme) => theme.palette.primary.main,
                    mb: 2,
                    mt: 2,
                    letterSpacing: 10,
                    fontSize: 130,
                    textshapeOutside: "circle(50% at 50% 50%)",
                    }}>
                    UNICHAT
                </Typography>
        </motion.div> */}

         
         
      </div>
      </ThemeProvider>
    )
}