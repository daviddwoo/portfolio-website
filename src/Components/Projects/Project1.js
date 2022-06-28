import React, { useEffect } from 'react'
import './Project1.css'
import projImg1 from '../../Screenshots/gs-hp1.webp'
import projImg2 from '../../Screenshots/unplgd2.webp'
import projImg3 from '../../Screenshots/unplgd3.webp'
import projImg4 from '../../Screenshots/unplgd4.webp'
import projImg5 from '../../Screenshots/unplgd5.webp'
import projImg6 from '../../Screenshots/unplgd6.webp'
import projImg7 from '../../Screenshots/unplgd7.webp'
import projImg8 from '../../Screenshots/unplgd8.webp'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Project1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const openSite = (site) => {
        return site === 'live' ? window.open('https://graceshopper-unplgd.herokuapp.com/') : window.open('https://github.com/daviddwoo/unplgd')
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
                <h1>UNPLGD</h1>
                <h3>E-COMMERCE APPLICATION</h3>
                <img 
                    className='project-img'
                    width='769px'
                    height='389px' 
                    alt='' 
                    src={projImg1} 
                />
                <div className='p1-info'>
                    <div className='p1-info-wrapper'>
                        <div className='p1-info-role'>
                            <span>Role</span>
                            <h4>Developer</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Date</span>
                            <h4>Feb 2022</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Technologies</span>
                            <h4>React / Redux, Express, Sequelize, PostgreSQL, Stripe API</h4>
                        </div>
                        <div className='p1-info-links'>
                            <div 
                                className='p1-links' 
                                onClick={() => openSite('live')}
                            >
                                <LinkIcon fontSize='medium'/>
                                <h4>Demo</h4>
                            </div>
                            <div 
                                className='p1-links' 
                                onClick={() => openSite('gh')}
                            >
                                <GitHubIcon fontSize='medium'/>
                                <h4>Github</h4>
                            </div>
                        </div>
                    </div>
                    <div className='p1-contr'>
                        <span>Overview</span>
                        <p>
                            UNPLGD is a fullstack e-commerce application that focuses on selling acoustic instruments, like guitars, drums, cellos and pianos. 
                        </p>
                        <p>
                            In my team of three developers, we were all either current or previous musicians, so we thought 
                            it would be a good idea to use musical instruments for our site!
                        </p>
                    </div>
                    <div className='p1-carousel'>
                        <Carousel 
                            infiniteLoop={true} 
                            showThumbs={false} 
                            autoPlay={true}
                        >
                            <div>
                                <img alt='' src={projImg2} className='proj-img'/>
                            </div>
                            <div>
                                <img alt='' src={projImg3} className='proj-img'/>
                            </div>
                            <div>
                                <img alt='' src={projImg4} className='proj-img'/>
                            </div>
                            <div>
                                <img alt='' src={projImg5} className='proj-img'/>
                            </div>
                            <div>
                                <img alt='' src={projImg6} className='proj-img'/>
                            </div>
                            <div>
                                <img alt='' src={projImg7} className='proj-img'/>
                            </div>
                            <div>
                                <img alt='' src={projImg8} className='proj-img'/>
                            </div>
                        </Carousel>
                     </div>
                    <div className='p1-contr2'>
                        <span>Contributions</span>
                        <p>
                            Integrated guest and user cart experience, where both can add, edit, or remove products in the shopping cart. 
                            This functionality was built using React / Redux and Express API routes
                        </p>
                        <p>
                            Implemented the Stripe API for registered user checkout process.                           
                        </p>
                        <p>
                            Built and designed entire UX / UI experience for both guest and registered users. 
                            CSS and Material UI were utilized to design the application.                          
                        </p>
                        <p>
                            Helped set up Sequelize models / associations and Express routes for back-end data implementation. 
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

export default Project1