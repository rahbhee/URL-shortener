import hamburger from '/hamburger.svg';
import cancel from '/cancel.png';
import React, { useState } from 'react';
import './App';

function Hamburger (){
    const [navIsOpen, setNavIsOpen] = useState(false)

    function toggleNav(){
        setNavIsOpen(prevState => !prevState)
    }

    return(
        <>
           {navIsOpen ? <i class="fa-solid fa-xmark" onClick={toggleNav}></i> : <i class="fa-solid fa-bars" onClick={toggleNav}></i>} 
           {navIsOpen ? <div className="mobile-nav">
                <ul id="menu1">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
                <div className="nav-line"></div>
                <ul id="menu2">
                    <li>Login</li>
                    <li><button>Sign Up</button></li>
                </ul>
            </div> : ""}
           
           
        </>
       
    )
}
export default Hamburger;