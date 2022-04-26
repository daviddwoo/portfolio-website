import React from 'react'
import './About.css'
import Picture from '../profile.jpeg'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='ab'>
            <div className='ab-container-all'>
                <motion.div 
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{once: true}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    variants={{
                        visible: { opacity: 1, y: 0},
                        hidden: { opacity: 0, y: 40}
                    }}
                    className='ab-title'
                >
                    <div className='ab-title-wrapper'>
                        <h1><span>👋 </span>there! I'm David Woo</h1>
                    </div>
                </motion.div>
                <motion.div
                    className='ab-container'
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{once: true}}
                    transition={{duration: 1, ease: 'easeInOut'}}
                    variants={{
                        visible: { opacity: 1, y: 0},
                        hidden: { opacity: 0, y: 40}
                    }}
                >
                    <div className='ab-info-wrapper'>
                        <div className='ab-details'>
                            <div>
                                <img alt='' src={Picture} className='ab-pic'/>
                            </div>
                            <div className='ab-details-p'>
                                    <p>
                                        I currently work in the biotech industry with over 5+ years experience specializing in equipment 
                                        validation. I previously attended Rutgers University majoring in chemical engineering.
                                    </p>
                                    <p>
                                        I am a recent graduate of the Fullstack Academy's part-time Flex Immersive program, currently seeking new opportunities to break into the
                                        tech field. I am passionate about learning and improving my skillset to become a valuable asset to any team.
                                    </p>
                                    <p>
                                        While I'm not coding, I am an avid golfer, music lover, basketball enthusiast (go Knicks!) and am learning how to DJ. Please feel free to reach out to me
                                        with a message or connect with me on LinkedIn!
                                    </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
            <hr className='ab-hr'/>
        </div>
    )
}

export default About