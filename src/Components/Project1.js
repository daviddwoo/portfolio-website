import React, { useEffect } from 'react'
import './Project1.css'
import './About.css'
import projImg1 from '../Screenshots/gs-hp.png'
import projImg2 from '../Screenshots/unplgd2.png'
import projImg3 from '../Screenshots/unplgd3.png'
import projImg4 from '../Screenshots/unplgd4.png'
import projImg5 from '../Screenshots/unplgd5.png'
import projImg6 from '../Screenshots/unplgd6.png'
import projImg7 from '../Screenshots/unplgd7.png'
import projImg8 from '../Screenshots/unplgd8.png'
import projImgPiano from '../Screenshots/unplgdpiano.png'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import { animations, stagger2 } from '../framer'
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
            animate={{opacity: 1}}
            exit={{opacity: 0}
        }>
            <motion.div 
                className='p1-img-wrapper'
                initial='initial'
                animate='animate'
                variants={stagger2}
            >
                <motion.h1 variants={animations}>UNPLGD</motion.h1>
                <motion.h3 variants={animations}>E-COMMERCE APPLICATION</motion.h3>

                <motion.img variants={animations} alt='' src={projImg1} className='project-img'/>
                <motion.div className='p1-info'>
                    <motion.div variants={animations} className='p1-info-wrapper'>
                        <motion.div className='p1-info-role'>
                            <span>Role</span>
                            <h4>Developer</h4>
                        </motion.div>
                        <motion.div className='p1-info-role'>
                            <span>Date</span>
                            <h4>Feb 2022</h4>
                        </motion.div>
                        <motion.div className='p1-info-role'>
                            <span>Technologies</span>
                            <h4>React / Redux, Express, Sequelize, PostgreSQL, Stripe API</h4>
                        </motion.div>
                        <motion.div className='p1-info-links'>
                            <div className='p1-links' onClick={() => openSite('live')}>
                                <LinkIcon fontSize='medium'/>
                                <h4>Demo</h4>
                            </div>
                            <div className='p1-links' onClick={() => openSite('gh')}>
                                <GitHubIcon fontSize='medium'/>
                                <h4>Github</h4>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={animations} className='p1-contr'>
                        <motion.span >Overview</motion.span>
                        <motion.p variants={animations}>
                            UNPLGD is a fullstack e-commerce application that focuses on selling acoustic instruments, like guitars, drums, cellos and pianos. 
                        </motion.p >
                        <motion.p variants={animations}>
                            In my team of three developers, we were all either current or previous musicians, so we thought it would be a good idea to use musical instruments for our site!
                        </motion.p>
                    </motion.div>
                    <motion.div variants={animations} className='p1-carousel'>
                        <Carousel infiniteLoop={true} showThumbs={false} autoPlay={true}>
                            <div>
                                <img alt='' src={projImgPiano} className='proj-img'/>
                            </div>
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
                     </motion.div>
                    <motion.div variants={animations} className='p1-contr'>
                        <motion.span>Contributions</motion.span>
                        <motion.p variants={animations}>
                            Integrated guest and user cart experience, where both can add, edit, or remove products in the shopping cart. 
                            This functionality was built using React / Redux and Express API routes
                        </motion.p>
                        <motion.p variants={animations}>
                            Implemented the Stripe API for registered user checkout process.                           
                        </motion.p>
                        <motion.p variants={animations}>
                            Built and designed entire UX / UI experience for both guest and registered users. 
                            CSS and Material UI were utilized to design the application.                          
                        </motion.p>
                        <motion.p variants={animations}>
                            Helped set up Sequelize models / associations and Express routes for back-end data implementation. 
                        </motion.p>
                    </motion.div>
                </motion.div>
                <motion.div className='proj-icon'>
                    <ViewComfyIcon fontSize='large' className='pj-icon' onClick={() => navigate('/portfolio')}/>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Project1