import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import LandingPage from './LandingPage';
import Hero from './Hero';
import Projects from './Projects';
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import About from './About';
import Contact from './Contact';
// import ScrollToTop from './ScrollToTop';

const AppRoutes = ({ contactRef }) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<><Hero /><Projects /></>}/>
                <Route exact path='/unplgd' element={<Project1 />}/>
                <Route exact path='/podify' element={<Project2 />}/>
                <Route exact path='/conductor' element={<Project3 />}/>
                <Route exact path='/contact' element={<Contact contactRef={contactRef}/>}/>
                <Route exact path='/about' element={<About />}/>
            </Routes>
        </div>
    )
}

export default AppRoutes