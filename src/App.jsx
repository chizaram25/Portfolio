import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Resume from './pages/Resume'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Faq from './components/Faq'
import ContactUs from './components/ContactUs';
import ResumeSection from './components/ResumeSection';
import ProjectSection from './components/ProjectSection';


const App = () => {

  useEffect(() => {
    AOS.init({
      //1 sec animation
      duration: 1000,
      //one time animation
      once: true,   
    });
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/banner' element={<Banner/>}></Route>
          <Route path='/nav' element={<Nav/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/footer' element={<Footer/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/resumesection' element={<ResumeSection/>}></Route>
          <Route path='/projectsection' element={<ProjectSection/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App