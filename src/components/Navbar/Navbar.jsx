import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const  [menu, setMenu] = useState('home')

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar">
        <Link to='/'> <img src={assets.logo} alt="" className="logo" /> </Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={()=> setMenu('home')} className={ menu==='home'?'active':'' }>home</Link>
          <a href='#explore-menu' onClick={()=> setMenu('menu')} className={ menu==='menu'?'active':'' }>menu</a>
          <Link to='resturants' onClick={()=> setMenu('resturants')} className={ menu==='resturants'?'active':'' }>Resturants</Link>
          <a href='#footer' onClick={()=> setMenu('contact-us')} className={ menu==='contact-us'?'active':'' }>contact us</a>
        </ul>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="" loading='lazy' />
          <div className="navbar-search-icon">
            <Link to='/cart'> <img src={assets.basket_icon} alt="" loading='lazy' /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>

          <button onClick={()=>setShowLogin(true)} >sign in</button>
        </div>
    </div>
  )
}

export default Navbar