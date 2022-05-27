import React, { useEffect } from 'react'
import './Project1.css'
import './About.css'
import projImg1 from '../Screenshots/Conductor.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { animations, stagger2 } from '../framer'

const Project3 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const navigate = useNavigate();
    
    return (
        <motion.div 
            className='p1' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}
        }>
            <motion.div 
                className='p1-img-wrapper'
                initial='initial'
                animate='animate'
                variants={stagger2}
            >
                <motion.h1 variants={animations}>Conductor</motion.h1>
                <motion.h3 variants={animations}>SOLO PROJECT</motion.h3>
                <motion.img 
                    variants={animations} 
                    alt='' 
                    src={projImg1} 
                    className='project-img'/>
                <motion.div className='p1-info'>
                    <motion.div variants={animations} className='p1-info-wrapper'>
                        <div className='p1-info-role'>
                            <span>Role</span>
                            <h4>Sole Developer</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Date</span>
                            <h4>Feb 2022</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Technologies</span>
                            <h4>Javascript, TensorFlow.js, Teachable Machine, Phaser3</h4>
                        </div>
                        <div className='p1-info-links'>
                            <div 
                                className='p1-links' 
                                onClick={() => window.open('https://github.com/daviddwoo/conductor')}
                            >
                                <GitHubIcon fontSize='medium'/>
                                <h4>Github</h4>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        variants={animations} 
                        className='p1-contr'
                    >
                        <motion.span>Overview</motion.span>
                        <motion.p variants={animations}>
                            I was fascinated by machine learning and decided to work with this technology to build Conductor. 
                        </motion.p>
                        <motion.p variants={animations}>
                            Conductor is a web based game where character movement is not controlled by the keyboard or mouse, but instead by hand motions in the webcam!
                        </motion.p>
                        <motion.p variants={animations}>
                            Please check out the screen demo of the game below.
                        </motion.p>
                    </motion.div>
                    <motion.div variants={animations} className='player-wrapper-p3'>
                        <ReactPlayer 
                            url={'https://vimeo.com/705247868'} 
                            width='100%' 
                            height='100%'
                            className='react-player-p3' 
                        />
                    </motion.div>
                    <motion.div variants={animations} className='p1-contr2'>
                        <motion.span>Contributions</motion.span>
                        <motion.p variants={animations}>
                            Utilized Teachable Machine to train different image classification models based on TensorFlow.js technology.
                        </motion.p>
                        <motion.p variants={animations}>
                            Built the web game using the Phaser3 library.
                        </motion.p>
                    </motion.div>
                </motion.div>
                <motion.div className='proj-icon'>
                    <ViewComfyIcon 
                        fontSize='large' 
                        className='pj-icon' 
                        onClick={() => navigate('/portfolio')}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Project3