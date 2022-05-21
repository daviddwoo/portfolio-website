import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react'

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [navOpen, setNavOpen] = useState(false);
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
                    <div className='nb-left' onClick={() => navigate('/')}>
                        <div className='nb-left-home'><span>HOME</span></div>
                    </div>
                    <div 
                        className='nb-right-menu' 
                        onClick={() => location.pathname === '/menu' ? navigate(-1) : navigate('/menu')}
                    >
                        <Hamburger 
                            toggled={location.pathname === '/menu' ? true : false} 
                            onClick={() => setNavOpen(!navOpen)}
                            className='ham-icon'
                            style={{
                                cursor: 'none'
                            }}
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
        </div>
    )
}

export default Navbar