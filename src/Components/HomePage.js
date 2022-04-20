import React from 'react'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='hp'>
            <div className='hp-wrapper'>
                {/* <div className='hp-name'>Hi there, my name's David Woo and I am a</div> */}
                {/* <div className='hp-name'>David Woo</div> */}
                <div className='hp-title1'><h1>Software Engineer</h1></div>
                <hr className='hr'/>
                <div className='hp-title2'><h1>Fullstack Developer</h1></div>
            </div>
        </div>
    )
}

export default HomePage