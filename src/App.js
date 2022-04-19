import './App.css';
// import HomePage from './Components/HomePage'
// import Projects from './Components/Projects'
import LandingPage from './Components/LandingPage';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project1 from './Components/Project1'
import Project2 from './Components/Project2'
import Project3 from './Components/Project3'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route exact path='/unplgd' element={<Project1 />}/>
        <Route exact path='/podify' element={<Project2 />}/>
        <Route exact path='/conductor' element={<Project3 />}/>
      </Routes>
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
