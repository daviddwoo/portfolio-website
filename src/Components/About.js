import React from 'react'
import './About.css'
import Picture from '../profile.jpeg'
import { motion } from 'framer-motion'

const item = {
    initial: {
      y: 300,
      color: "#000",
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.2 }
    },
    animate: {
      y: 0,
      color: "#000",
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.2}
    }
};

const para = {
    initial: {
      opacity: 0,  
      y: 30,
      color: "#000",
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1 }
    },
    animate: {
      opacity: 1,
      y: 0,
      color: "#000",
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1, delay: 0.8}
    }
};

const container = {
    animate: {
      transition: {
        staggerChildren: 12
      }
    }
};

const About = () => {
    return (
        <motion.div 
            className='ab'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}} 
        >
            <motion.div 
                className='ab-container-all'
                initial='initial'
                animate='animate'
                variants={container}
            >
                <motion.div className='ab-title'>
                    <motion.div 
                        className='ab-title-wrapper'
                            initial='initial'
                            animate='animate'
                        // variants={container}
                    >
                        <span
                            className='ab-span'
                        >
                            
                            <motion.span
                                style={{ display: "inline-block" }}
                                variants={item}
                            >
                                👋 there! I'm David Woo
                            </motion.span>
                            
                        </span>
                    </motion.div>
                </motion.div>
                <motion.div
                    className='ab-container'
                    initial='initial'
                    animate='animate'
                    // variants={container}
                >
                    <div className='ab-info-wrapper'>
                        <div className='ab-details'>
                            <div className='ab-details-img'>
                                <img alt='' src={Picture} className='ab-pic'/>
                            </div>
                            <motion.div 
                                className='ab-details-p'
                                initial='initial'
                                animate='animate'
                                // variants={container}
                            >
                                    {/* <span className='ab-details-span'>
                                        <motion.span 
                                            style={{ display: "inline-block" }}
                                            variants={para}
                                        >
                                            I currently work in the biotech industry with over 5+ years experience specializing in equipment validation.
                                            I previously attended Rutgers University, earning a degree in chemical engineering.
                                        </motion.span>
                                    </span>
                                    <span className='ab-details-span'>
                                        <motion.span 
                                            style={{ display: "inline-block" }}
                                            variants={para}
                                        >
                                            I am a recent graduate of the Fullstack Academy's part-time Flex Immersive program, currently seeking new opportunities to break into the
                                            tech field. I am passionate about learning and improving my skillset to become a valuable asset to any team.
                                        </motion.span>
                                    </span>
                                    <span className='ab-details-span'>
                                        <motion.span 
                                            style={{ display: "inline-block" }}
                                            variants={para}
                                        >
                                            While I'm not coding, I am an avid golfer, music lover, basketball enthusiast (go Knicks!) and am learning how to DJ. Please feel free to reach out to me
                                            with a message or connect with me on LinkedIn!
                                        </motion.span>
                                    </span> */}
                                        {/* <motion.span 
                                            style={{ display: "inline-block" }}
                                            variants={para}
                                        >
                                            I previously attended Rutgers University, earning a degree in chemical engineering.
                                        </motion.span> */}

     
                                        <motion.p 
                                            variants={para}
                                        >
                                            I currently work in the biotech industry with over 5+ years experience specializing in equipment validation.
                                            I previously attended Rutgers University, earning a degree in chemical engineering.
                                        </motion.p>
         


                                        <motion.p 
                                            variants={para}
                                        >
                                            I am a recent graduate of the Fullstack Academy's part-time Flex Immersive program, currently seeking new opportunities to break into the
                                            tech field. I am passionate about learning and improving my skillset to become a valuable asset to any team.
                                        </motion.p>
                                        <motion.p
                                        variants={para}>
                                            While I'm not coding, I am an avid golfer, music lover, basketball enthusiast (go Knicks!) and am learning how to DJ. Please feel free to reach out to me
                                            with a message or connect with me on LinkedIn!
                                        </motion.p>

                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About