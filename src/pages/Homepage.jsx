import React from 'react'
import Navbar from '../components/Navbar/Navbar'

import Abouthome from '../components/Home/Abouthome'
import PhotoVideo from '../components/Home/PhotoVideo'
import Owner from '../components/Home/Owner'
import Featuredwork from '../components/Home/Featuredwork'
import Header from '../components/Header/Header'
import Whyus from '../components/Home/Whyus'
import Productions from '../components/Home/Productions'
import Review from '../components/Home/Review'
import Footer from '../components/Footer/Footer'
import Threeservice from '../components/Home/Threeservice'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <Abouthome/>
            <PhotoVideo/>
            <Owner/>
            <Featuredwork/>
            <Whyus/>
            <Productions/>
            <Review/>
            <Threeservice/>
            <Footer/>
            
        
        </div>
    )
}

export default Homepage