import React from 'react'
import './About.css'
import Picture from '../../Screenshots/profile1.webp'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div 
            className='ab'
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 0.3, duration: 0.5}}}
            exit={{opacity: 0}} 
        >
            <div 
                className='ab-container-all'
                initial='initial'
                animate='animate'
            >
                <div className='ab-title'>
                    <div className='ab-title-wrapper'>
                        <span className='ab-span'>
                            <span style={{ display: "inline-block" }}>
                                👋 there! I'm David Woo
                            </span>
                        </span>
                    </div>
                </div>
                <div className='ab-container'>
                    <div className='ab-info-wrapper'>
                        <div className='ab-details'>
                            <div className='ab-details-img'>
                                <img 
                                    alt='' 
                                    src={Picture} 
                                    className='ab-pic' 
                                    loading='lazy'
                                    width='340px'
                                    height='420px'
                                />
                            </div>
                            <div className='ab-details-p'>
                                <p className='ab-details-p1'>
                                    I am a recent graduate of the Fullstack Academy's part-time Flex Immersive program, seeking to transition into the
                                    tech field in a software engineering role. I am passionate about learning and improving my skillset to become a valuable asset to any team.
                                </p>
                                <p className='ab-details-pr'>
                                    I currently work in the biotech industry with over 5+ years experience specializing in equipment validation. 
                                    I previously attended Rutgers University, earning a degree in chemical engineering.
                                </p>
                                <p className='ab-details-pr'>
                                    While I'm not coding, I am an avid golfer, music lover, basketball fan (go Knicks!) and am learning how to DJ. 
                                    Please feel free to reach out to me
                                    with a message or connect with me on LinkedIn!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About