import './App.css';
import React, { useRef } from 'react'
import AppRoutes from './Components/AppRoutes'
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'
import { useNavigate, useLocation } from 'react-router-dom'

function App() {


  const location = useLocation();

  // const scrollToProj = () => {
  //   history('/')
  //   let elem = document.getElementById('pj');
  //   elem.scrollIntoView({behavior: "smooth"})
  // }
  // const scrollToContact = () => {
  //   history('/')
  //   let elem = document.getElementById('contact');
  //   elem.scrollIntoView({behavior: "smooth"})
  //   // contactRef.current.scrollIntoView({behavior: 'smooth'})
  // }

  return (
    <div>
        <Navbar />
        <AppRoutes/>
        {/* <Contact contactRef={contactRef}/> */}
        {
          location === '/' ? '' : <Footer />
        } 
        <ScrollToTop />
    </div>
  );
}

export default App
