import {motion, useScroll, useTransform} from 'framer-motion';
import React from 'react';
import { useRef } from 'react';

export default function MultiLayerParallax() {
    return (
        <div className='w-full h-screen overflow-hidden relative grid place-items-center'>
            <h1 className='font-bold text-white text-7xl md:text-9xl relative z-10'>Multi Layer Parallax</h1>
        </div>
    )
}