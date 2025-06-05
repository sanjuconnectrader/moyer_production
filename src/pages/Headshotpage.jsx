import Footer from '../components/Footer/Footer'
import Headshotdetails from '../components/Headshot/Headshotdetails'
import Headshotheader from '../components/Headshot/Headshotheader'
import Headshotprice from '../components/Headshot/Headshotprice'
import Navbar from '../components/Navbar/Navbar'

const Headshotpage = () => {
  return (
    <div>
        <Navbar/>
        <Headshotheader/>
        <Headshotdetails/>
        <Headshotprice/>
        <Footer/>
    </div>
  )
}

export default Headshotpage