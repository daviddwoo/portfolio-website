import './App.css';
import React, { useRef } from 'react'
import AppRoutes from './Components/AppRoutes'
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'
import { useNavigate } from 'react-router-dom'

function App() {

  const projRef = useRef(null);
  const contactRef = useRef(null);
  const history = useNavigate();

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
        <AppRoutes projRef={projRef} contactRef={contactRef}/>
        {/* <Contact contactRef={contactRef}/> */}
        <Footer /> 
        <ScrollToTop />
    </div>
  );
}

export default App
