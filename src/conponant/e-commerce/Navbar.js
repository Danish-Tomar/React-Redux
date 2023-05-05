import React from 'react'
import "./navbar.css"
import {AiOutlineShoppingCart}from "react-icons/ai"
function Navbar() {
  return (
    <nav>
        <h2 className="banner">MY Flipkart</h2>
        <div className="right-layout">
             <div className="cart-layout">
             <AiOutlineShoppingCart/>
             <h3>4</h3>
                </div>
             </div>
    </nav>
  )
}

export default Navbar;