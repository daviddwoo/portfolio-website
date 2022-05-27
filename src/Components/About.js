import React from 'react'
import './About.css'
import Picture from '../Screenshots/profile.jpeg'
import { motion } from 'framer-motion'
import { animations, stagger1 } from '../framer'

const About = () => {
    return (
        <motion.div 
            className='ab'
            initial={{opacity: 0, transition: { delay: 1}}}
            animate={{opacity: 1}}
            exit={{opacity: 0}} 
        >
            <motion.div 
                className='ab-container-all'
                initial='initial'
                animate='animate'
                variants={stagger1}
            >
                <div className='ab-title'>
                    <motion.div className='ab-title-wrapper'>
                        <span
                            className='ab-span'
                        >
                            
                            <motion.span
                                style={{ display: "inline-block" }}
                                variants={animations}
                            >
                                👋 there! I'm David Woo
                            </motion.span>
                            
                        </span>
                    </motion.div>
                </div>
                <div className='ab-container'>
                    <div className='ab-info-wrapper'>
                        <div className='ab-details'>
                            <motion.div 
                                className='ab-details-img'
                                variants={animations}
                                // initial={{opacity: 0}}
                                // animate={{opacity: 1, transition: { delay: 0.3}}}
                            >
                                <img alt='' src={Picture} className='ab-pic'/>
                            </motion.div>
                            <motion.div 
                                className='ab-details-p'
                                // variants={container}
                                // variants={container}
                            >
                                <motion.p
                                    className='ab-details-p1'
                                    variants={animations}
                                >
                                    I am a recent graduate of the Fullstack Academy's part-time Flex Immersive program, seeking to transition into the
                                    tech field in a software engineering role. I am passionate about learning and improving my skillset to become a valuable asset to any team.

                                </motion.p>
                                <motion.p 
                                    className='ab-details-pr'
                                    variants={animations}
                                >
                                    I currently work in the biotech industry with over 5+ years experience specializing in equipment validation. 
                                    I previously attended Rutgers University, earning a degree in chemical engineering.
                                </motion.p>
                                <motion.p
                                    className='ab-details-pr'
                                    variants={animations}
                                >
                                    While I'm not coding, I am an avid golfer, music lover, basketball enthusiast (go Knicks!) and am learning how to DJ. 
                                    Please feel free to reach out to me
                                    with a message or connect with me on LinkedIn!
                                </motion.p>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default About