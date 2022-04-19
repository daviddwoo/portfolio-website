import React from 'react'
import { withRouter, Route, Routes } from 'react-router-dom'
// import LandingPage from './LandingPage';
import HomePage from './HomePage';
import Projects from './Projects';
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import About from './About';
// import ScrollToTop from './ScrollToTop';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<><HomePage /><Projects /></>}/>
                <Route exact path='/unplgd' element={<Project1 />}/>
                <Route exact path='/podify' element={<Project2 />}/>
                <Route exact path='/conductor' element={<Project3 />}/>
                <Route exact path='/about' element={<About />}/>
            </Routes>
        </div>
    )
}

export default AppRoutes