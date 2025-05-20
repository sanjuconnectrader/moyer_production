import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import LiveStreamHeader from '../components/Livestream/LiveStreamHeader'
import LiveStreamDetails from '../components/Livestream/LiveStreamDetails'
import Livecontact from '../components/Livestream/Livecontact'
import Footer from '../components/Footer/Footer'

const Livestreampage = () => {
  return (
    <div>
        <Navbar/>
        <LiveStreamHeader/>
        <LiveStreamDetails/>
        <Livecontact/>
        <Footer/>
    </div>
  )
}

export default Livestreampage