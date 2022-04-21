import React from 'react'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='hp'>
            <div className='hp-wrapper'>
                {/* <div className='hp-name'>Hi there, my name's David Woo and I am a</div> */}
                <div>
                    <div className='hp-name'><h1>David Woo</h1></div>
                    <div className='hp-title1'><h1>Software Engineer</h1></div>
                    {/* <hr className='hr'/> */}
                    <div className='hp-title2'><h1>Fullstack Developer</h1></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage