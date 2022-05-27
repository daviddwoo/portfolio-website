import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion';
import { heroStagger, heroAnimation } from '../framer';

const Hero = () => {

    return (
        <motion.div 
            className='hp' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <motion.div 
                className='hp-wrapper'
                initial='initial'
                animate='animate'
                variants={heroStagger}
            >
                <motion.div 
                    className='hp-name'
                >
                    <span className='hp-name-span'>
                        <motion.span
                            style={{ display: "inline-block" }}
                            variants={heroAnimation}
                        >
                            DAVID WOO
                        </motion.span>
                    </span>
                </motion.div>
                <motion.div 
                    className='hp-title'
                >
                    <span className='hp-title-span'>
                        <motion.span
                            style={{ display: "inline-block" }}
                            variants={heroAnimation}
                        >
                            SOFTWARE ENGINEER
                        </motion.span>
                    </span>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Hero