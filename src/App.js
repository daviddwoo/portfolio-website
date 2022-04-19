import './App.css';
import React, { useRef } from 'react'
// import HomePage from './Components/HomePage'
// import Projects from './Components/Projects'
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project1 from './Components/Project1'
import Project2 from './Components/Project2'
import Project3 from './Components/Project3'
import ScrollToTop from './Components/ScrollToTop';
import { Routes, Route } from 'react-router-dom'

function App() {

  const projRef = useRef(null);
  const contactRef = useRef(null);

  // console.log('projRef', projRef)

  const scrollToProj = () => projRef.current.scrollIntoView({behavior: 'smooth'})
  const scrollToContact = () => contactRef.current.scrollIntoView({behavior: 'smooth'})

  return (
    <div>
      <Navbar scrollToProj={scrollToProj} scrollToContact={scrollToContact}/>
        <Routes>
          <Route path='/' element={<LandingPage projRef={projRef}/>}/>
          {/* <Route path='/#projects' element={<Projects />}/> */}
          <Route exact path='/unplgd' element={<Project1 />}/>
          <Route exact path='/podify' element={<Project2 />}/>
          <Route exact path='/conductor' element={<Project3 />}/>
        </Routes>
      <Contact contactRef={contactRef}/>
      <Footer /> 
    </div>
  );
}

export default App;
