
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';
import Pricingpage from './pages/Pricingpage';
import Quarterlypage from './pages/Quarterlypage';
import Headshotpage from './pages/Headshotpage';
import Videopages from './pages/Videopages';
import Photographypage from './pages/Photographypage';
import Livestreampage from './pages/Livestreampage';
import Dronephotographypage from './pages/Dronephotographypage';
import Restaurantpage from './pages/Restaurantpage';
import Restaurant1 from './pages/Restaurant1';
import Privacypage from './pages/Privacypage';
import Termspage from './pages/Termspage';
import Weddingpage from './pages/Weddingpage';
import Restaurant2 from './pages/Restaurant2';
import Restaurant3 from './pages/Restaurant3';
import Restaurant4 from './pages/Restaurant4';
import Restaurant5 from './pages/Restaurant5';
import Restaurant6 from './pages/Restaurant6';



const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>

      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/pricing' element={<Pricingpage />} />
        <Route path='/packages' element={<Quarterlypage />} />
        <Route path='/headshot' element={<Headshotpage />} />
        <Route path='/video' element={<Videopages />} />
        <Route path='/photography' element={<Photographypage />} />
        <Route path='/live-stream' element={<Livestreampage />} />
        <Route path='/drone-photography' element={<Dronephotographypage />} />
        <Route path='/restaurant' element={<Restaurantpage />} />
        <Route path='/restaurant' element={<Restaurantpage />} />

        <Route path='/PuertoVallartaBonneyLake' element={<Restaurant1 />} />
        <Route path='/Mason’sCheesecakes' element={<Restaurant2 />} />
        <Route path='/ThePortCantina&TacoTruck' element={<Restaurant3 />} />
        <Route path='/FiaolaPolynesianDeli' element={<Restaurant4 />} />
        <Route path='/ImpeckableFoodTruck' element={<Restaurant5 />} />
        <Route path='/CoastalKitchen' element={<Restaurant6 />} />



        <Route path='/privacy-policy' element={<Privacypage />} />
        <Route path='/terms-conditions' element={<Termspage />} />
        <Route path='/wedding-photography' element={<Weddingpage />} />



      </Routes>
    </>
  );
};

export default App;
