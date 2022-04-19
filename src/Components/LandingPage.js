import React from 'react'
import HomePage from './HomePage'
import Projects from './Projects'

const LandingPage = ({ projRef }) => {
    return (
        <>
            <HomePage />
            <Projects projRef={projRef}/>
        </>
    )
}

export default LandingPage