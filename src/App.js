import './App.css';
import React, { useRef, useLayoutEffect } from 'react'
import AppRoutes from './Components/AppRoutes'
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop'
import { useNavigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

function App() {

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

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
      {/* <Wrapper> */}
      {/* <ScrollToTop /> */}
        <Navbar />
        {/* <AnimatePresence exitBeforeEnter> */}
          <AppRoutes/>
        {/* </AnimatePresence> */}
        {/* <Contact contactRef={contactRef}/> */}
        <Footer />

        {/* </Wrapper> */}
    </div>
  );
}

export default App
