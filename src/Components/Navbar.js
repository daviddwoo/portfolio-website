import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from 'framer-motion'
import Menu from './Menu'

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [navOpen, setNavOpen] = useState(false);
    console.log(navOpen);
    // const [width, setWidth] = useState(0);

    // //add Event Listener on window innerWidth re-size
    // useEffect(() => {
    //     const onResize = () => setWidth(window.innerWidth)
    //     window.addEventListener('resize', onResize);
    //     return () => {
    //         window.removeEventListener("resize", onResize)
    //     }
    // }, [setWidth])

    // useEffect(() => {
    //     setNavOpen(false);
    // }, [location.pathname])

    // //whenever innerWidth changes remove the mobile navBar
    // useEffect(() => {
    //     if (width > 420) setNavOpen(false)
    // }, [width]);
    
    return (
        <div className='nb'>
            <div className='nb-menu-wrapper'>
                <div className='nb-wrapper'>
                    <div className='nb-left' onClick={() => {
                        navigate('/')
                    }}>
                        <div className='nb-left-home'><span>HOME</span></div>
                    </div>
                    <div 
                        className='nb-right-menu' 
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <Hamburger
                            color={navOpen ? '#fff' : '#000'} 
                            toggled={navOpen ? true : false} 
                            className='hamburger-react'
                        />
                    </div>
                    <div className='nb-right'>
                        <div onClick={() => navigate('/about')}><span>ABOUT</span></div>
                        <div onClick={() => navigate('/portfolio')}><span>PORTFOLIO</span></div>
                        <div onClick={() => navigate('/contact')}><span>CONTACT</span></div>
                        <div
                            onClick={() => window.open(process.env.REACT_APP_RESUME_LINK)}
                        >
                            <span>RESUME</span>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
            {
                navOpen && 
                <motion.div
                     
                    exit={{opacity: 0, transition: {delay: 3}}}
                >
                    <Menu setNavOpen={setNavOpen}/>
                </motion.div>
            }
            </AnimatePresence>
        </div>
    )
}

export default Navbar