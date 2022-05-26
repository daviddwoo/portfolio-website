import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion';

const item = {
    initial: {
      y: 400,
      color: "#000",
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.4 }
    },
    animate: {
      y: 0,
      color: "#000",
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.4}
    }
};

const container = {
    animate: {
      transition: {
        staggerChildren: 0.09
      }
    }
};

const exitAni = {
    animate: {
        y: 400,
        color: '#000',
        transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.4 }
    }
}

const Hero = () => {

    // const name = 'DAVID WOO';
    // const title = 'SOFTWARE ENGINEER';

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
                variants={container}
            >
                <motion.div 
                    className='hp-name'
                >
                    <span className='hp-name-span'>
                        <motion.span
                            style={{ display: "inline-block" }}
                            variants={item}
                        >
                            DAVID WOO
                        </motion.span>
                    </span>
                    {/* {
                        name.split('').map((char) => {
                            return (
                                <div className='hp-char'>
                                    {char}
                                </div>
                            )
                        })
                    } */}
                </motion.div>
                <motion.div 
                    className='hp-title'
                >
                    <span className='hp-title-span'>
                        <motion.span
                            style={{ display: "inline-block" }}
                            variants={item}
                        >
                            SOFTWARE ENGINEER
                        </motion.span>
                    </span>
                    {/* {
                        title.split('').map((char) => {
                            return (
                                <div className='hp-title-char'>
                                    {char}
                                </div>
                            )
                        })
                    } */}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

// {/* <div>
// <div className='hp-name'><h1>David Woo</h1></div>
// <div className='hp-title1'><h1>Software Engineer</h1></div>
// {/* <hr className='hr'/> */}
// <div className='hp-title2'><h1>Fullstack Developer</h1></div>
// </div> */}


export default Hero