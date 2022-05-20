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
            <div className='menu-1'onClick={() => navigate('/about')}>About</div>
            <div onClick={() => navigate('/portfolio')}>Portfolio</div>
            <div onClick={() => navigate('/contact')}>Contact</div>
            <div
                onClick={() => window.open(process.env.REACT_APP_RESUME_LINK)}
            >
                Resume
            </div>
        </motion.div>
    )
}

export default Menu