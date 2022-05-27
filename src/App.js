import './App.css';
import React from 'react'
import AppRoutes from './Components/AppRoutes'
import Navbar from './Components//Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AnimatedCursor from 'react-animated-cursor'

function App() {
  return (
    <div>
      <AnimatedCursor 
        innerSize={12}
        outerSize={0}
        color='128, 128, 128'
      />
        <Navbar />
        <AppRoutes/>
        <Footer />
    </div>
  );
}

export default App
