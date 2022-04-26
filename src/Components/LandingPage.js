import React from 'react'
import Hero from './Hero'
import Projects from './Projects'

const LandingPage = ({ projRef }) => {
    return (
        <>
            <Hero />
            <Projects projRef={projRef}/>
        </>
    )
}

export default LandingPage