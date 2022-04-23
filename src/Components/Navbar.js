import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../logoDW.png'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ scrollToProj, scrollToContact }) => {
    const history = useNavigate();
    const location = useLocation();

    const [navOpen, setNavOpen] = useState(false);
    
    return (
        <div className={location.pathname === '/' || location.pathname === '/about' ? 'nb': 'nb-bg'}>
            <div className='nb-menu-wrapper'>
                <div className='nb-wrapper'>
                    <div className='nb-left' onClick={() => history('/')}>
                        <img alt='' src={Logo}/>
                    </div>
                    <div className='nb-right-menu'>
                        <MenuIcon 
                            fontSize='large'
                            onClick={() => setNavOpen(!navOpen)}
                        />
                    </div>
                    <div className='nb-right'>
                        <div onClick={() => history('/about')}>About</div>
                        <div onClick={() => history('/#projects')}>Portfolio</div>
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
                        <div onClick={() => history('/about')}>About</div>
                        <div onClick={() => history('/#projects')}>Portfolio</div>
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