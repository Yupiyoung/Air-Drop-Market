import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Contacts from './pages/Contacts/Contacts';
import DeliveryAndPay from './pages/DeliveryAndPay/DeliveryAndPay';
import { Home } from './pages/Home/Home';
import TrackOrder from './pages/TrackOrder/TrackOrder';


function App() {
  const [mobileBottom, setMobileBottom] = React.useState(false)
  const resizeComp = () => {
    if (window.innerWidth <= 425) {
      setMobileBottom(true);
    } else {
      setMobileBottom(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener('resize', resizeComp);
    resizeComp();
    return () => {
      window.removeEventListener('resize', resizeComp);
    };
  }, []);
  return (
    <div className="App" style={mobileBottom ? {marginBottom: '100px'} : null}>
      <Header></Header>
      <Routes>
        <Route path="/"  exact element={<Home/>}/>
        <Route path="/track" exact element={<TrackOrder></TrackOrder>}/>
        <Route path="/catalog" exact element={<TrackOrder></TrackOrder>}/>
        <Route path="/about-us" exact element={<AboutUs></AboutUs>}/>
        <Route path="/delivery-and-pay" exact element={<DeliveryAndPay></DeliveryAndPay>}/>
        <Route path="/contacts" exact element={<Contacts></Contacts>}/>
        <Route path="/feedback" exact element={<TrackOrder></TrackOrder>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
