import React, { useState } from 'react';
import images from '../../constants/images';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'


const Navbar = () => {
    const navlinks = ["home", "about", "menu", "awards", "contact"];

    const [toggleMenu, setToggleMenu] = useState(false);

  return(
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      {
        navlinks.map((nlink,index) =>(
          
          <li className='p__opensans'><a href= {`#${nlink}`} >{nlink}</a></li>
        ))
      }

    </ul>
    <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Log IN / Register</a>
        <div /> 
        <a href="/" className='p__opensans'>Book Table</a>
    </div>

  

<div className="app__navbar-smallscreen">
<GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> {setToggleMenu(true)}} />
{ toggleMenu && (
<div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
    <MdOutlineRestaurantMenu className='overlay__close' color='#fff'   fontSize={27} onClick={()=> {setToggleMenu(false)}} />
    <ul className="app__navbar-smallscreen-links">
    {
        navlinks.map((nlink,index) =>(
          
          <li className='p__opensans'><a href= {`#${nlink}`}  onClick={()=> {setToggleMenu(false)}} >{nlink}</a></li>
        ))
      }
    </ul>

</div> 
    ) }
</div>


   

  </nav>
);
  }

export default Navbar;
