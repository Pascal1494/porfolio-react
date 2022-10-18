import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg from '../Components/HeroImg'
import Works from '../Components/Works'

const Home = () => {
  return (
    <div>
     <Navbar /> 
     <HeroImg />
     <Works />
     <Footer />
    </div>
  )
}


export default Home