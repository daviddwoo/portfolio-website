import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { NavHashLink } from 'react-router-hash-link'

const Navbar = ({ scrollToProj, scrollToContact }) => {

    const history = useNavigate();

    return (
        <div className='nb'>
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