import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../logoDW.png'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ scrollToProj, scrollToContact }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [navOpen, setNavOpen] = useState(false);
    const [width, setWidth] = useState(0);

    //add Event Listener on window innerWidth re-size
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [setWidth])

    //whenever innerWidth changes remove the mobile navBar
    useEffect(() => {
        if (width > 420) setNavOpen(false)
    }, [width]);
    
    return (
        <div className={location.pathname === '/' || location.pathname === '/about' ? 'nb': 'nb-bg'}>
            <div className='nb-menu-wrapper'>
                <div className='nb-wrapper'>
                    <div className='nb-left' onClick={() => navigate('/')}>
                        <img alt='' src={Logo}/>
                    </div>
                    <div className='nb-right-menu'>
                        <MenuIcon 
                            fontSize='large'
                            onClick={() => setNavOpen(!navOpen)}
                        />
                    </div>
                    <div className='nb-right'>
                        <div onClick={() => navigate('/about')}>About</div>
                        <div onClick={() => navigate('/#projects')}>Portfolio</div>
                        <div onClick={scrollToContact}>Contact</div>
                        <div
                            onClick={() => window.open(process.env.REACT_APP_RESUME_LINK)}
                        >
                            Resume
                        </div>
                    </div>
                </div>
                {
                    navOpen &&
                    <div className='nb-menu-links'>
                        <div onClick={() => navigate('/about')}>About</div>
                        <div onClick={() => navigate('/#projects')}>Portfolio</div>
                        <div onClick={scrollToContact}>Contact</div>
                        <div
                            onClick={() => window.open(process.env.REACT_APP_RESUME_LINK)}
                        >
                            Resume
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar