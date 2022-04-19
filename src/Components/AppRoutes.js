import React from 'react'
import { withRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage';
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
// import ScrollToTop from './ScrollToTop';

const AppRoutes = ({ projRef }) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage projRef={projRef}/>}/>
                <Route path='/unplgd' element={<Project1 />}/>
                <Route path='/podify' element={<Project2 />}/>
                <Route path='/conductor' element={<Project3 />}/>
            </Routes>
        </div>
    )
}

export default AppRoutes