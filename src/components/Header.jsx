import React, {useState} from 'react'
import Button from './Generics/Button'
import { NavLink } from 'react-router-dom'
import img_logotype from '../assets/Images/logotype.svg'

const Header = () => {
  return (
    // <!-- header section -->
    <header>
        <div className="container">
        <a href="index.html"><img src={img_logotype} alt="crito logotype" /></a>
        <button className="menu-bars"><i className=" fa-solid fa-bars-staggered"></i></button> 
        <div className="menu">
            <div className="top-menu">
                <div className="contact-information">
                    <div className="content-box">
                        <i className="fa-sharp fa-regular fa-phone-volume"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="content-box">
                        <i className="fa-regular fa-envelope"></i>
                        info@crito.com
                    </div>
                    <div className="content-box last">
                        <i className="fa-sharp fa-regular fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className="main-menu">
                <nav>
                    {/* <a className="active" href="/">Home</a>
                    <a href="/Service">Service</a>
                    <a href="/News">News</a>
                    <a href="/Contact">Contact</a> */}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                <Button type="yellow" text="Login" url="/login" />

            </div>
        </div>
    </div>
    </header>
  )
}

export default Header