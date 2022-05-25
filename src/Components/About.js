import React from 'react'
import './About.css'
import Picture from '../profile.jpeg'
import { motion } from 'framer-motion'

const item = {
    hidden: {
      y: 400,
      color: "#000",
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.2 }
    },
    visible: {
      y: 0,
      color: "#000",
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.2}
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
            <div className='ab-container-all'>
                <div className='ab-title'>
                    <motion.div 
                        className='ab-title-wrapper'
                        initial='hidden'
                        animate='visible'
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
                </div>
                <div
                    className='ab-container'
                >
                    <div className='ab-info-wrapper'>
                        <div className='ab-details'>
                            <div className='ab-details-img'>
                                <img alt='' src={Picture} className='ab-pic'/>
                            </div>
                            <div className='ab-details-p'>
                                    <p>
                                        I currently work in the biotech industry with over 5+ years experience specializing in equipment 
                                        validation. I previously attended Rutgers University, earning a degree in chemical engineering.
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
                </div>
            </div>
        </motion.div>
    )
}

export default About