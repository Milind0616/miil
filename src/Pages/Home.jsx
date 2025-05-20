import React from 'react'
import Slider from '../components/Slider'
import ShowCategoryProduct from '../components/ShowCategoryProduct'
import Poster from '../components/Poster'
import Footer from '../components/Footer'
import StartNavbar from '../components/StartNavbar';
import MiddleNavbar from '../components/MiddleNavbar';


const Home = () => {
  return (
    <>
      <StartNavbar />
      <MiddleNavbar />
      <Slider/>
      <ShowCategoryProduct />
      <Poster />
      <Footer />
    </>
  )
}

export default Home