import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion';

const Hero = () => {

    const name = 'DAVID WOO';
    const title = 'SOFTWARE ENGINEER';

    return (
        <motion.div
            className='hp' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className='hp-wrapper'>
                <div className='hp-name'>
                    {
                        name.split('').map((char) => {
                            return (
                                <div className='hp-char'>
                                    {char}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='hp-title'>
                    {
                        title.split('').map((char) => {
                            return (
                                <div className='hp-title-char'>
                                    {char}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
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