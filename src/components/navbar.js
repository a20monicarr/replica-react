import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import '../App.css';


function Navbar() {
    return (
       <nav className="navbar">
        <div className="menu-izq">
         <Link to='/'>
            <img src={logo} alt="logo" width="50"/>
         </Link>
         <Link style={{color:"white"}} to='/'>Soundwave</Link> 
        </div>
       <div className="menu-der">
       <Link style={{color:"white"}} className="m-5" to='/Discover'>Discover</Link>
       <Link style={{color:"white"}} className="m-5"  to='/Join'>Join</Link>
        </div> 
       </nav>
    );
  }
  export default Navbar;