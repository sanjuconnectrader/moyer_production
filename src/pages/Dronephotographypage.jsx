import React from 'react'
import Navbar from '../components/Navbar/Navbar'

import Footer from '../components/Footer/Footer'
import DronePhotographyDetails from '../components/Dronephotography/DronePhotographyDetails'
import Dronephotos from '../components/Dronephotography/Dronephotos'
import DronePhotographyHeader from '../components/Dronephotography/DronePhotographyHeader'
import Dronecontact from '../components/Dronephotography/Dronecontact'

const Dronephotographypage = () => {
  return (
    <div>
        <Navbar/>
        <DronePhotographyHeader/>
        <DronePhotographyDetails/>
        <Dronephotos/>
        <Dronecontact/>
        <Footer/>
    </div>
  )
}

export default Dronephotographypage