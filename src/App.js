import './App.css';
import React from 'react'
import AppRoutes from './Components/AppRoutes'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AnimatedCursor from 'react-animated-cursor'

function App() {

  // const Wrapper = ({children}) => {
  //   const location = useLocation();
  //   useLayoutEffect(() => {
  //     document.documentElement.scrollTo(0, 0);
  //   }, [location.pathname]);
  //   return children
  // } 

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
      <AnimatedCursor 
        innerSize={10}
        outerSize={0}
        color='128, 128, 128'
      />
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
