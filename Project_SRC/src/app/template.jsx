'use client'

import {motion} from 'framer-motion';
 
export default function Template({children}) {
    return (
        <motion.div
            initial={{ y: 0, opacity: 0,}}
            animate={{ y: 0, opacity: 1 }}
            exit={{ ease:'easeInOut', duration: 0.3,}}
        >
            {children}
        </motion.div>
    );
}