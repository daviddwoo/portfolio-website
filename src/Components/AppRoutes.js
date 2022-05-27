import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Hero from './Hero/Hero';
import Portfolio from './Portfolio/Portfolio';
import Project1 from './Projects/Project1'
import Project2 from './Projects/Project2'
import Project3 from './Projects/Project3'
import About from './About/About';
import Contact from './Contact/Contact';
import { AnimatePresence } from 'framer-motion';
import Menu from './Menu/Menu';

const AppRoutes = () => {
    const location = useLocation();

    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<><Hero /></>}/>
                    <Route exact path='/unplgd' element={<Project1 />}/>
                    <Route exact path='/podify' element={<Project2 />}/>
                    <Route exact path='/conductor' element={<Project3 />}/>
                    <Route exact path='/contact' element={<Contact />}/>
                    <Route exact path='/about' element={<About />}/>
                    <Route exact path='/portfolio' element={<Portfolio />}/>
                    <Route exact path='/menu' element={<Menu />}/>
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AppRoutes