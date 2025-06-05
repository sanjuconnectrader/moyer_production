import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Restaurantdetail from '../components/Restaurant/Restaurantdetail'
import Restaurantheader from '../components/Restaurant/Restaurantheader'
import Restaurantphotos from '../components/Restaurant/Restaurantphotos'

const Restaurantpage = () => {
    return (
        <div>
        <Navbar/>
        <Restaurantheader/>
        <Restaurantdetail/>
        <Restaurantphotos/>
        <Footer/>

        </div>
    )
}

export default Restaurantpage