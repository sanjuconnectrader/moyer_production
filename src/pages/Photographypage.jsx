import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Photography from '../components/Photography/Photographyheader'
import Photographydetail from '../components/Photography/Photogrpahydetail'
import Photographygallery from '../components/Photography/Photographygallery'
import Footer from '../components/Footer/Footer'
import PhotographyContact from '../components/Photography/PhotographyContact'

const Photographypage = () => {
    return (
        <div>

            <Navbar />
            <Photography/>
            <Photographydetail/>
            <Photographygallery/>
            <PhotographyContact/>
            <Footer/>


        </div>
    )
}

export default Photographypage