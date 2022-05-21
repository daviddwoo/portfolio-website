import React from 'react';
import './Menu.css'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const Menu = () => {
    const navigate = useNavigate();
    return (
        <motion.div 
            className='menu'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className='menu-1' onClick={() => navigate('/')}><span>HOME</span></div>
            <div onClick={() => navigate('/about')}><span>ABOUT</span></div>
            <div onClick={() => navigate('/portfolio')}><span>PORTFOLIO</span></div>
            <div onClick={() => navigate('/contact')}><span>CONTACT</span></div>
            <div
                onClick={() => window.open(process.env.REACT_APP_RESUME_LINK)}
            >
                <span>RESUME</span>
            </div>
        </motion.div>
    )
}

export default Menu