import React from 'react'
import './Navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../logoDW.png'

const Navbar = ({ scrollToProj, scrollToContact }) => {
    const history = useNavigate();
    const location = useLocation();
    
    return (
        <div className={location.pathname === '/' || location.pathname === '/about' ? 'nb': 'nb-bg'}>
            <div className='nb-wrapper'>
                
                <div className='nb-left' onClick={() => history('/')}>
                    <img alt='' src={Logo}/>
                </div>
                <div className='nb-right'>
                    <div onClick={() => history('/about')}>About</div>
                    {/* <Link to='/#projects'>Portfolio</Link> */}
                    <div onClick={() => history('/#projects')}>Portfolio</div>
                    <div onClick={scrollToContact}>Contact</div>
                    <div
                        onClick={() => window.open('https://docs.google.com/document/d/1riK93v40wrbl__076LnPyFXLJJinpddSD8kmaxGUSX8/export?format=pdf&attachment=false')}
                    >Resume</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar