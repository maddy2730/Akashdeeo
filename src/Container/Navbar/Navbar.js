import React from 'react'
import logo from '../../Images/archi.png';
import '../Navbar/Navbar.css';
import HeroSection from '../../Component/LandingPage/HeroSection/HeroSection';
export default function () {
  return (
    <div>
      <nav className='container d-flex  main_navbar_container'>
        <div className=' logo_img'>
          <img src={logo}></img>
        </div>
        <div className=''>
        <ul className='d-flex nav_linkes'>
          <li>
<a href=''>About</a>
          </li>
          <li>
          <a href=''>Product</a>

            </li> <li>
            <a href=''>Blog</a>

            </li>
        </ul>
        </div>
 <div className='say_hello_text'>
  <h6> SAY HEllo </h6>
 </div>
      </nav>
      <HeroSection />
    </div>
  )
}
