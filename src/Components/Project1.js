import React from 'react'
import './Project1.css'
import './About.css'
import projImg1 from '../gs-hp.png'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { useNavigate } from 'react-router';

const Project1 = () => {

    const openSite = (site) => {
        return site === 'live' ? window.open('https://graceshopper-unplgd.herokuapp.com/') : window.open('https://github.com/daviddwoo/unplgd')
    }

    const navigate = useNavigate();

    return (
        <div className='p1'>
            <div className='p1-img-wrapper'>
                <h1>UNPLGD</h1>
                <h3>Fullstack e-commerce application</h3>
                <img alt='' src={projImg1} className='proj-img'/>
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
                            <h4>Javascript, React/Redux, Express, Sequelize, PostgreSQL, Stripe API</h4>
                        </div>
                        <div className='p1-info-links'>
                            <div className='p1-links' onClick={() => openSite('live')}>
                                <LinkIcon fontSize='large'/>
                                <h4>Deployed Link</h4>
                            </div>
                            <div className='p1-links' onClick={() => openSite('gh')}>
                                <GitHubIcon fontSize='large'/>
                                <h4>Github Repo</h4>
                            </div>
                        </div>
                    </div>
                    <div className='p1-contr'>
                        <span>Overview</span>
                        <p>
                            UNPLGD is a fullstack e-commerce application that focuses on selling acoustic instruments, like guitars, drums, cellos and pianos. 
                        </p>
                        <p>
                            In my team of three developers, we were all either current or previous musicians, so we thought it would be a good idea to use musical instruments for our site!
                        </p>
                    </div>
                    <div className='p1-contr'>
                        <span>Contributions</span>
                        <p>
                            Integrated guest and user cart experience, where both can add, edit, or remove products in the shopping cart. This functionality was built using React / Redux and Express API routes
                        </p>
                        <p>
                            Implemented the Stripe API for registered user checkout process.                           
                        </p>
                        <p>
                            Built and designed entire UX / UI experience for both guest and registered users. CSS and Material UI were utilized to design the application.                          
                        </p>
                        <p>
                            Helped set up Sequelize models / associations and Express routes for back-end data implementation. 
                        </p>
                    </div>
                </div>
                <div className='proj-icon'>
                    <ViewComfyIcon fontSize='large' className='pj-icon' onClick={() => navigate('/portfolio')}/>
                </div>
                {/* <hr className='p1-hr'/> */}
            </div>
            {/* <div className='proj-icon'>
                    <ViewComfyIcon fontSize='large' className='pj-icon'/>
                </div> */}
            {/* <hr className='ab-hr'/> */}
        </div>
    )
}

export default Project1