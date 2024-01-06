import hamburger from '/hamburger.svg';
import Hamburger from './hamburger'
import React, { useState, useEffect } from 'react';

function NavBar(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

       useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
    <div className="nav-div">
    <h5>Shortly</h5>
    <nav>
         {windowWidth <=768 ? (<Hamburger/>) : (<>
    <div>
      <p>Features</p>
      <p>Pricing</p>
      <p>Resources</p>
    </div>
    <div>
      <p>Login</p>
      <button>Sign Up</button>
    </div>
        </>
   )}
    </nav>
    </div>
    )
}
export default NavBar;


 
 