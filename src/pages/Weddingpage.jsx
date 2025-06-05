import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WeddingPhotographyHeader from '../components/Wedding/WeddingPhotographyHeader'
import WeddingPhotographyDetails from '../components/Wedding/WeddingPhotographyDetails'
import Weddingphotos from '../components/Wedding/Weddingphotos'

const Weddingpage = () => {
  return (
    <div>
        <Navbar/>
        <WeddingPhotographyHeader/>
        <WeddingPhotographyDetails/>
        <Weddingphotos/>

        <Footer/>
    </div>
  )
}

export default Weddingpage