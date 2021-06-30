import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const NavBar = ({}) => {
    return (
        <nav className="nav" >
        <div className="logo"><Link to =''>ALBANIA MARKET</Link></div>
        <NavLink to="/" exact  activeClassName='activlink' ><li>Home</li></NavLink>
            <NavLink to="/shop" activeClassName='activlink' ><li>Shop</li></NavLink>
            <NavLink to="/contact"activeClassName='activlink' ><li>Contact us</li></NavLink>
            <NavLink to="/about" activeClassName='activlink'><li>About</li></NavLink> 
        </nav> 
    )
}

export default NavBar