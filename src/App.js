import './App.css';
import React, { useRef } from 'react'
import AppRoutes from './Components/AppRoutes'
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'

function App() {

  const projRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProj = () => projRef.current.scrollIntoView({behavior: 'smooth'})
  const scrollToContact = () => contactRef.current.scrollIntoView({behavior: 'smooth'})

  return (
    <div>
      <Navbar scrollToProj={scrollToProj} scrollToContact={scrollToContact}/>
      <AppRoutes projRef={projRef}/>
      <Contact contactRef={contactRef}/>
      <Footer /> 
      <ScrollToTop />
    </div>
  );
}

export default App
