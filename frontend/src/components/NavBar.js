import React from 'react'
import {Link, NavLink} from 'react-router-dom';


const NavBar = ({history}) => {
    // //Burger
    // const Buric = useRef(null)
    // const navLinks = useRef(null)
    // const rightItems = useRef(null)

    // const onBurgActive = () =>{
    //     //Toggle Nav

    //     const links = document.querySelectorAll('.navLinks li')
    //     navLinks.current.classList.toggle('burgerActive')
    //     rightItems.current.classList.toggle('burgerActive')
    //     //Animate Links
    //     links.forEach((link,index) => {
    //      if(link.style.animation)
    //           {
    //                 link.style.animation = "";
    //                 rightItems.current.style.animation = "";
    //            }
    //         else 
    //         { 
                   
    //                 link.style.animation = `moving 0.5s ease forwards ${index / 5 }s`
    //                 rightItems.current.style.animation = `moving 0.5s ease forwards ${index / 5 }s`
                   
    //             }
    //     });
    //     //Burger Animation
    //     Buric.current.classList.toggle('toggle')
    // }

    return (
        <nav className="nav" >
        <div className="logo"><Link to =''>ALBANIA MARKET</Link></div>
        <ul className="navLinks">
        <NavLink to="/" exact  activeClassName='activlink' ><li>Home</li></NavLink>
            <NavLink to="/shop" activeClassName='activlink' ><li>Shop</li></NavLink>
            <NavLink to="/contact"activeClassName='activlink' ><li>Contact us</li></NavLink>
            <NavLink to="/about" activeClassName='activlink'><li>About</li></NavLink> 
        </ul>
        </nav> 
    )
}

export default NavBar