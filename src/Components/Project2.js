import React, { useEffect } from 'react'
import './Project1.css'
import './About.css'
import projImg1 from '../podify-hp.png'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
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


const Project2 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const openSite = (site) => {
        return site === 'live' ? window.open('https://podify-fsa.herokuapp.com/') : window.open('https://github.com/daviddwoo/podify')
    }
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
                <motion.h1 variants={para}>Podify</motion.h1>
                <motion.h3 variants={para}>CAPSTONE PROJECT</motion.h3>
                <motion.img variants={para} alt='' src={projImg1} className='project-img'/>
                <motion.div className='p1-info'>
                    <motion.div variants={para} className='p1-info-wrapper'>
                        <div className='p1-info-role'>
                            <span>Role</span>
                            <h4>Developer</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Date</span>
                            <h4>Mar 2022</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Technologies</span>
                            <h4>React / Redux, Express, Sequelize, PostgreSQL, Spotify API</h4>
                        </div>
                        <div className='p1-info-links'>
                            <div className='p1-links' onClick={() => openSite('live')}>
                                <LinkIcon fontSize='medium'/>
                                <h4>Demo</h4>
                            </div>
                            <div className='p1-links' onClick={() => openSite('gh')}>
                                <GitHubIcon fontSize='medium'/>
                                <h4>Github</h4>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={para}className='p1-contr'>
                        <motion.span>Overview</motion.span>
                        <motion.p variants={para}>
                            I worked in a team of 4 developers to create Podify, an application where users can access, search,  
                            and add timestamps & comments for their favorite podcasts.  
                        </motion.p>
                        <motion.p variants={para}>
                            Users will login with their Spotify account and can have the capability of browsing through top podcasts, adding shows to their favorities, liking / disliking specific episodes and more.                         
                        </motion.p>
                        <motion.p variants={para}>
                         Below is the video presentation of our project!
                        </motion.p>
                    </motion.div>
                    <motion.div variants={para} className='player-wrapper'>
                        <ReactPlayer 
                            url={'https://vimeo.com/713519825'} 
                            width='100%' 
                            height='100%'
                            className='react-player' 
                        />
                    </motion.div>
                    {/* <hr className='p1-hr'/> */}
                    <motion.div variants={para} className='p1-contr2'>
                        <motion.span>Contributions</motion.span>
                        <motion.p variants={para}>
                            Helped implement Spotify OAuth login and integrated user access token into database used for data retrieval from the Spotify API.
                        </motion.p>
                        <motion.p variants={para}>
                            Developed Redux store and action creators / thunks for asynchronous calls to backend server used for CRUD functionality.
                        </motion.p>
                        <motion.p variants={para}>
                            Created Single Podcast page with timestamp, comments & replies, and liking / disliking comments functionality. This was built using React functional components with hooks and Express API routes.  
                        </motion.p>
                    </motion.div>
                </motion.div>
                <div className='proj-icon'>
                    <ViewComfyIcon fontSize='large' className='pj-icon' onClick={() => navigate('/portfolio')}/>
                </div>
                {/* <hr className='p1-hr'/> */}
            </motion.div>
            {/* <hr className='ab-hr'/> */}
        </motion.div>
    )
}

export default Project2