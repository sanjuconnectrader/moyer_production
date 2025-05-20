import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Videoheader from '../components/Video/Videoheader'
import Videodetails from '../components/Video/Videodetails'
import VideoGallery from '../components/Video/VideoGallery'
import Footer from '../components/Footer/Footer'
const Videopages = () => {
  return (
    <div>
        <Navbar/>
        <Videoheader/>
        <Videodetails/>
        <VideoGallery/>
        <Footer/>
    </div>
  )
}

export default Videopages