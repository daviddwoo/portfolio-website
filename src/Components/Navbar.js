import React from 'react'
import './Navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = ({ scrollToProj, scrollToContact }) => {
    const history = useNavigate();
    const location = useLocation();
    
    return (
        <div className={location.pathname === '/' || location.pathname === '/about' ? 'nb': 'nb-bg'}>
            <div className='nb-wrapper'>
                <div className='nb-left' onClick={() => history('/')}>Home</div>
                <div className='nb-right'>
                    <div onClick={() => history('/about')}>About</div>
                    {/* <Link to='/#projects'>Portfolio</Link> */}
                    <div onClick={() => history('/#projects')}>Portfolio</div>
                    <div onClick={scrollToContact}>Contact</div>
                    <div>Resume</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar