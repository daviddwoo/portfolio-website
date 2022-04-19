import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
// import { NavHashLink } from 'react-router-hash-link'

const Navbar = ({ scrollToProj, scrollToContact }) => {

    const history = useNavigate();

    return (
        <div className='nb'>
            <div className='nb-wrapper'>
                <div className='nb-left' onClick={() => history('/')}>Home</div>
                <div className='nb-right'>
                    <div>About</div>
                    {/* <NavHashLink smooth to='/#projects'>Portfolio</NavHashLink> */}
                    {/* <div onClick={() => {
                        navigate('/');
                        scrollToProj();
                    }}>Portfolio</div> */}
                    <div onClick={scrollToProj}>Portfolio</div>
                    <div onClick={scrollToContact}>Contact</div>
                    <div>Resume</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar