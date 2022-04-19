import React from 'react'
import HomePage from './HomePage'
import Projects from './Projects'

const LandingPage = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);

    return (
        <>
            <HomePage />
            <Projects />
        </>
    )
}

export default LandingPage