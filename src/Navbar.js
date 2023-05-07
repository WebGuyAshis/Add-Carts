import React from "react";
import shoppingCart from './images/shopping-cart.png'
import './navbar.css'
const Navbar = (props)=>{
return(
    <div className="navbar">
        <span className="logo">ChorBazar</span>
        <ul className="nav-list">
            <li className="nav-list-item">
                <img src={shoppingCart} alt="" />
                <span className="item-count">{props.count}</span>
            </li>
        </ul>
    </div>
);
}

export default Navbar;