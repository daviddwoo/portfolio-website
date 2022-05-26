import React, { useEffect } from 'react'
import './Project1.css'
import './About.css'
import projImg1 from '../Conductor.png'
// import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';


const para = {
    initial: {
      opacity: 0,  
      y: 40,
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1}
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1.5}
    }
};

const container = {
    animate: {
      transition: {
        staggerChildren: 0.12
      }
    }
};

const Project3 = () => {

    // const openSite = (site) => {
    //     return site === 'live' ? window.open('https://graceshopper-unplgd.herokuapp.com/') : window.open('https://github.com/daviddwoo/unplgd')
    // }
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
                variants={container}
            >
                <motion.h1 variants={para}>Conductor</motion.h1>
                <motion.h3 variants={para}>SOLO PROJECT</motion.h3>
                <motion.img variants={para} alt='' src={projImg1} className='project-img'/>
                <motion.div className='p1-info'>
                    <motion.div variants={para} className='p1-info-wrapper'>
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
                            {/* <div className='p1-links' onClick={() => window.open('https://graceshopper-unplgd.herokuapp.com/')}>
                                <LinkIcon fontSize='large'/>
                                <h4>Deployed Link</h4>
                            </div> */}
                            <div className='p1-links' onClick={() => window.open('https://github.com/daviddwoo/conductor')}>
                                <GitHubIcon fontSize='medium'/>
                                <h4>Github</h4>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={para} className='p1-contr'>
                        <motion.span>Overview</motion.span>
                        <motion.p variants={para}>
                            I was fascinated by machine learning and decided to work with this technology to build Conductor. 
                        </motion.p>
                        <motion.p variants={para}>
                            Conductor is a web based game where character movement is not controlled by the keyboard or mouse, but instead by hand motions in the webcam!
                        </motion.p>
                        <motion.p variants={para}>
                            Please check out the screen demo of the game below.
                        </motion.p>
                    </motion.div>
                    <motion.div variants={para} className='player-wrapper-p3'>
                        <ReactPlayer 
                            url={'https://vimeo.com/705247868'} 
                            width='100%' 
                            height='100%'
                            className='react-player-p3' 
                        />
                    </motion.div>
                    {/* <hr className='p1-hr'/> */}
                    <motion.div variants={para} className='p1-contr2'>
                        <motion.span>Contributions</motion.span>
                        <motion.p variants={para}>
                            Utilized Teachable Machine to train different image classification models based on TensorFlow.js technology.
                        </motion.p>
                        <motion.p variants={para}>
                            Built the web game using the Phaser3 library.
                        </motion.p>
                    </motion.div>
                </motion.div>
                <motion.div className='proj-icon'>
                    <ViewComfyIcon fontSize='large' className='pj-icon' onClick={() => navigate('/portfolio')}/>
                </motion.div>
                {/* <hr className='p1-hr'/> */}
            </motion.div>
            {/* <hr className='ab-hr'/> */}
        </motion.div>
    )
}

export default Project3