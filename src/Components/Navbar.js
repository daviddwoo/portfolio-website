import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../logoDW.png'
import MenuIcon from '@mui/icons-material/Menu';
import { Turn as Hamburger } from 'hamburger-react'

const Navbar = ({ scrollToProj, scrollToContact }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const onMenu = location.pathname === '/menu' ? true : false
    console.log(onMenu)
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

    useEffect(() => {
        setNavOpen(false);
    }, [location.pathname])

    //whenever innerWidth changes remove the mobile navBar
    useEffect(() => {
        if (width > 420) setNavOpen(false)
    }, [width]);
    
    return (
        // <div className={location.pathname === '/' || location.pathname === '/about' ? 'nb': 'nb-bg'}>
        <div className='nb'>
            <div className='nb-menu-wrapper'>
                <div className='nb-wrapper'>
                    <div className='nb-left' onClick={() => navigate('/')}>
                        {/* <img alt='' src={Logo}/> */}
                        <div>Home</div>
                    </div>
                    <div className='nb-right-menu' onClick={() => location.pathname === '/menu' ? navigate(-1) : navigate('/menu')}>
                        <Hamburger toggled={location.pathname === '/menu' ? true : false} onClick={() => setNavOpen(!navOpen)}
                        />
                        {/* <MenuIcon 
                            fontSize='large'
                            onClick={() => setNavOpen(!navOpen)}
                            sx={{cursor: 'pointer'}}
                        /> */}
                    </div>
                    <div className='nb-right'>
                        <div onClick={() => navigate('/about')}>About</div>
                        <div onClick={() => navigate('/portfolio')}>Portfolio</div>
                        <div onClick={() => navigate('/contact')}>Contact</div>
                        {/* <div onClick={scrollToContact}>Contact</div> */}
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
                        <div onClick={() => navigate('/portfolio')}>Portfolio</div>
                        <div onClick={() => navigate('/contact')}>Contact</div>
                        {/* <div onClick={scrollToContact}>Contact</div> */}
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