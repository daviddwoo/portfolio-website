import React from 'react';
import './Menu.css'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Menu = () => {
    const navigate = useNavigate();

    const openSite = (site) => {
        return site === 'linkedin' ? window.open('https://www.linkedin.com/in/daviddwoo/') : window.open('https://github.com/daviddwoo')
    }

    return (
        <motion.div 
            className='menu'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className='menu-1' onClick={() => navigate('/')}><span>HOME</span></div>
            <div onClick={() => navigate('/about')} className='menu-div'><span>ABOUT</span></div>
            <div onClick={() => navigate('/portfolio')} className='menu-div'><span>PORTFOLIO</span></div>
            <div onClick={() => navigate('/contact')} className='menu-div'><span>CONTACT</span></div>
            <div
                onClick={() => window.open(process.env.REACT_APP_RESUME_LINK)}
                className='menu-last'
            >
                <span>RESUME</span>
            </div>
            <div className='menu-connect'>
                <div>
                    <GitHubIcon 
                        onClick={() => openSite('github')} 
                        sx={{
                            '&:hover': {
                                color: '#AD5C51',
                            },
                            transition: 'all 0.5s ease'
                        }} 
                        fontSize='medium'
                    />
                </div>
                <div>
                    <LinkedInIcon 
                        onClick={() => openSite('linkedin')} 
                        sx={{
                            '&:hover': {
                                color: '#0A66C2',
                            },
                            transition: 'all 0.5s ease'
                        }} 
                        fontSize='medium'
                    />
                </div>

            </div>
        </motion.div>
    )
}

export default Menu