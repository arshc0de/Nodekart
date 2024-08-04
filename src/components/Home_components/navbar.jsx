import React from "react";
import {Link} from 'react-router-dom'
import './nav.css'
import user_account from '../../images/icons/user.svg'
import cart from '../../images/icons/cart.svg'
function Navbar() {
  return (
    <div className="nav">
      <ul>
        <a href="#"><Link to='/'><li>NodeKart.Co</li></Link></a>
        <a href="#"><Link to='/shop'><li>Shop</li></Link></a>
        <a href="#"><li>On Sale</li></a>
        <a href="#"><li>New Arrival</li></a>
        <a href="#"><li>Brands</li></a>
        <a href="#"><li>Search Bar</li></a>
        <a href="#" className="prevent_hover_icons"><li><img src={cart} alt="cart icon" id="cart_logo"/></li></a>
        <a href="#" className="prevent_hover_icons"><li><img src={user_account} alt="user logo" id="user_logo"/></li></a>
      </ul>
    </div>
  );
}

export default Navbar;
