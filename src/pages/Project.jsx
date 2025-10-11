import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProjectSection from '../components/ProjectSection';

const Project = () => {
  return (
    <div className=' bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] min-h-screen overflow-hidden text-white'>
      <Nav/>
      <ProjectSection/>
      <Footer/>
    </div>
  )
}

export default Project