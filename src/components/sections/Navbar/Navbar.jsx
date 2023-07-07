import React, { useState,useEffect } from "react";
import "./Navbar.css";


  const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  return (
    <>
       <nav className={`main-nav ${scrolled ? "scrolled-nav" : ""}`}>
    
        <div className="logo">
         <img src="https://pic.jctrans.com/jctransnet/Content/uploadpics/smallimg/SP202305191202502501138261923.png"></img>
        </div>

      
        <div
          className="menu-link">
          <ul>
            <li>
            Products 
            </li>
            <li>
            Partners
            </li>
            <li>
            Tools
            </li>
            <li>
            Company
            </li>
            <li>
            Knowledge Center
            </li>
            <li>
              Contact Us
            </li>
          </ul>
        </div>

        <div className="login">
          <ul className="login-desktop">
            <li className="emoji">
              <h1>☺</h1>
            </li>
            <li className="login-button">
              login
            </li>
            <li className="Signup">
              Sign Up
            </li>
          </ul>          
        </div>
      </nav>
    </>
  );
};

export default Navbar;

