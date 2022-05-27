import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from 'framer-motion'
import Menu from './Menu'

const Navbar = () => {

    const navigate = useNavigate();
    const [navOpen, setNavOpen] = useState(false);
    
    return (
        <div className='nb'>
            <div className='nb-menu-wrapper'>
                <div className='nb-wrapper'>
                    <div 
                        className='nb-left' 
                        onClick={() => navigate('/')}
                    >
                        <div className='nb-left-home'>
                            <span className='nb-span'>HOME</span>
                        </div>
                    </div>
                    <div 
                        className='nb-right-menu' 
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <Hamburger
                            className='hamburger-react'
                            color={navOpen ? '#fff' : '#000'} 
                            toggled={navOpen ? true : false} 
                        />
                    </div>
                    <div className='nb-right'>
                        <div onClick={() => navigate('/about')}>
                            <span className='nb-span'>ABOUT</span>
                        </div>
                        <div onClick={() => navigate('/portfolio')}>
                            <span className='nb-span'>PORTFOLIO</span>
                        </div>
                        <div onClick={() => navigate('/contact')}>
                            <span className='nb-span'>CONTACT</span>
                        </div>
                        <div
                            onClick={() => window.open(process.env.REACT_APP_RESUME_LINK)}
                        >
                            <span className='nb-span'>RESUME</span>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence >
            {
                navOpen && <Menu setNavOpen={setNavOpen}/>
            }
            </AnimatePresence>
        </div>
    )
}

export default Navbar