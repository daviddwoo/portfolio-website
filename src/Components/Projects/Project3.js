import React, { useEffect } from 'react'
import './Project1.css'
import projImg1 from '../../Screenshots/Conductor1.webp'
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Project3 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const navigate = useNavigate();
    
    return (
        <motion.div 
            className='p1' 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 0.3, duration: 0.5}}}
            exit={{opacity: 0}}
        >
            <div 
                className='p1-img-wrapper'
                initial='initial'
                animate='animate'
            >
                <h1>Conductor</h1>
                <h3>SOLO PROJECT</h3>
                <img 
                    width='769px'
                    height='388px'  
                    alt='' 
                    src={projImg1} 
                    className='project-img'
                />
                <div className='p1-info'>
                    <div className='p1-info-wrapper'>
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
                    </div>
                    <div className='p1-contr'>
                        <span>Overview</span>
                        <p>
                            I was fascinated by machine learning and decided to work with this technology to build Conductor. 
                        </p>
                        <p>
                            Conductor is a web based game where character movement is not controlled by the keyboard or mouse, but instead by hand motions in the webcam!
                        </p>
                        <p>
                            Please check out the screen demo of the game below.
                        </p>
                    </div>
                    <div className='player-wrapper-p3'>
                        <ReactPlayer 
                            url={'https://vimeo.com/705247868'} 
                            width='100%' 
                            height='100%'
                            className='react-player-p3' 
                        />
                    </div>
                    <div className='p1-contr2'>
                        <span>Contributions</span>
                        <p>
                            Utilized Teachable Machine to train different image classification models based on TensorFlow.js technology.
                        </p>
                        <p>
                            Built the web game using the Phaser3 library.
                        </p>
                    </div>
                </div>
                <div className='proj-icon'>
                    <ViewComfyIcon 
                        className='pj-icon' 
                        fontSize='large' 
                        onClick={() => navigate('/portfolio')}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Project3