import React, { useEffect, useState } from 'react';
import './Menu.css'
import { motion, useAnimation } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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

const Menu = ({setNavOpen}) => {
    const navigate = useNavigate();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [setWidth])

    useEffect(() => {
        if (width > 420) {
            setNavOpen(false);
        }
    }, [width, setNavOpen]);

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
            <motion.div
                className='menu-wrap'                             
                initial='initial'
                animate='animate'
                variants={container}
            >
                <motion.div
                    className='menu-1' 
                    onClick={() => {
                        setNavOpen(false);
                        navigate('/');
                    }}
                    variants={para}
                >
                    <span>HOME</span>
                </motion.div>
                <motion.div
                    className='menu-div' 
                    onClick={() => {
                        
                        navigate('/about');
                        setNavOpen(false);
                    }}
                    variants={para} 
                 >
                    <span>ABOUT</span>
                </motion.div>
                <motion.div 
                    className='menu-div'
                    onClick={() => {
                        navigate('/portfolio');
                        setNavOpen(false);
                    }} 
                    variants={para} 
                >
                    <span>PORTFOLIO</span>
                </motion.div>
                <motion.div 
                    variants={para} 
                    onClick={() => {
                        setNavOpen(false);
                        navigate('/contact');
                    }}
                    className='menu-div'
                >
                    <span>CONTACT</span>
                </motion.div>
                <motion.div
                    className='menu-last' 
                    onClick={() => window.open(process.env.REACT_APP_RESUME_LINK)}
                    variants={para}
                >
                    <span>RESUME</span>
                </motion.div>
            </motion.div>
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