import React, { useEffect } from 'react'
import './Project1.css'
import projImg1 from '../../Screenshots/podify1.webp'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import { motion } from 'framer-motion';

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
            animate={{opacity: 1, transition: {delay: 0.3, duration: 0.5}}}
            exit={{opacity: 0}}
        >
            <div 
                className='p1-img-wrapper'
                initial='initial'
                animate='animate'
            >
                <h1>Podify</h1>
                <h3>CAPSTONE PROJECT</h3>
                <img 
                    width='770px'
                    height='352px'  
                    alt='' 
                    src={projImg1} 
                    className='project-img' 
                />
                <div className='p1-info'>
                    <div className='p1-info-wrapper'>
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
                    </div>
                    <div className='p1-contr'>
                        <span>Overview</span>
                        <p>
                            I worked in a team of 4 developers to create Podify, an application where users can access, search,  
                            and add timestamps & comments for their favorite podcasts.  
                        </p>
                        <p>
                            Users will login with their Spotify account and can have the capability of browsing through top podcasts, 
                            adding shows to their favorities, liking / disliking specific episodes and more.                         
                        </p>
                        <p>
                         Below is the video presentation of our project!
                        </p>
                    </div>
                    <div className='player-wrapper'>
                        <ReactPlayer 
                            url={'https://vimeo.com/713519825'} 
                            width='100%' 
                            height='100%'
                            className='react-player' 
                        />
                    </div>
                    <div className='p1-contr2'>
                        <span>Contributions</span>
                        <p>
                            Helped implement Spotify OAuth login and integrated user access token into database used for data retrieval from the Spotify API.
                        </p>
                        <p>
                            Developed Redux store and action creators / thunks for asynchronous calls to backend server used for CRUD functionality.
                        </p>
                        <p>
                            Created Single Podcast page with timestamp, comments & replies, and liking / disliking comments functionality. 
                            This was built using React functional components with hooks and Express API routes.  
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

export default Project2