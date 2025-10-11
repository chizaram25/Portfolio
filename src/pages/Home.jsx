import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <div>
      <Nav/>
      <Banner/> 
      <ToastContainer position="top-center" autoClose={5000} />
      <Footer/>

      
    </div>
  )
}

export default Home