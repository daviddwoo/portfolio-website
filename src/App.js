import './App.css';
import React from 'react'
import AppRoutes from './Components/AppRoutes'
import Navbar from './Components//Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AnimatedCursor from 'react-animated-cursor'
// import Picture from './Screenshots/profile.webp'
// import projImg2 from './Screenshots/podify-hp.webp'
// import projImg3 from './Screenshots/Conductor.webp'

function App() {

  // const cacheImages = async(images) => {
  //   const promises = await images.map((image) => {
  //     return new Promise((res, rej) => {
  //       const img = new Image();

  //       img.src = image;
  //       img.onload = res();
  //       img.onerror = rej();
  //     })
  //   });

  //   await Promise.all(promises);
  // }

  // useEffect(() => {

  //   const images = [Picture, projImg2, projImg3];

  //   console.log(cacheImages(images));

  // }, []);

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
