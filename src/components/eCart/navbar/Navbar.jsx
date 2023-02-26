import React from 'react'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import './style.css'

function Navbar() {
  const cart = useSelector((state)=>state.cartSlice.cart)
  let cartCount = 0;
  cart.forEach(item => cartCount += item.quantity)
  const navigate = useNavigate();

  return (
    <nav>
        <div className="siteName">
            <h3>SD Myntra</h3>
        </div>
        <div className="bag" onClick={()=>navigate('/cart')}>
            <HiOutlineShoppingBag />
            <div className="count">
            <h5>{cartCount}</h5>
            </div>
        </div>
    </nav>
  )
}

export default Navbar