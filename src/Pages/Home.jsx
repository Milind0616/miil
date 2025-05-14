import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import ShowCategoryProduct from '../components/ShowCategoryProduct'
import Poster from '../components/Poster'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Navbar />
      <Slider/>
      <ShowCategoryProduct />
      <Poster />
      <Footer />
    </>
  )
}

export default Home