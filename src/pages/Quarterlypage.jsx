import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Packagesheader from '../components/Quarterly/Packagesheader'
import Packagepricing from '../components/Quarterly/Packagepricing'
import PackageDetails from '../components/Quarterly/Packagedetails'
import Footer from '../components/Footer/Footer'

const Quarterlypage = () => {
    return (
        <div>
            <Navbar />
            <Packagesheader/>
            <Packagepricing/>
            <PackageDetails/>
            <Footer/>
        </div>
    )
}

export default Quarterlypage