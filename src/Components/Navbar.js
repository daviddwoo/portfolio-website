import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nb'>
            <div className='nb-wrapper'>
                <div className='nb-left'>Home</div>
                <div className='nb-right'>
                    <div>About</div>
                    <div>Portfolio</div>
                    <div>Contact</div>
                    <div>Resume</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar