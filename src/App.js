import './App.css';
import React, { useEffect } from 'react'
import AppRoutes from './Components/AppRoutes'
import Navbar from './Components//Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AnimatedCursor from 'react-animated-cursor'
import Picture from './Screenshots/profile1.webp'
import gshp1 from './Screenshots/gs-hp1.webp'
import gshp2 from './Screenshots/gs-hp2.webp'
import podify1 from './Screenshots/podify1.webp'
import podify2 from './Screenshots/podify2.webp'
import conductor1 from './Screenshots/Conductor1.webp'
import conductor2 from './Screenshots/Conductor2.webp'

function App() {

  const cacheImages = async(images) => {
    const promises = await images.map((image) => {
      return new Promise((res, rej) => {
        const img = new Image();

        img.src = image;
        img.onload = res();
        img.onerror = rej();
      })
    });
    await Promise.all(promises);
  }

  useEffect(() => {

    const images = [Picture, gshp1, gshp2, podify1, podify2, conductor1, conductor2];

    cacheImages(images)

  }, []);

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
