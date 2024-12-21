import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/CART/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Restaurants from './pages/Restaurants.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin = {setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/cart' element={ <Cart/> }/>
          <Route path='/order' element={ <PlaceOrder/> }/>
          <Route path='/resturants' element={ <Restaurants/> }/>
        </Routes>
      </div>
      <Footer/>
    </>
  )}
export default App