import React, { useEffect, useState } from "react";
import logo from "../images/sblogo.png"
import { FaBars } from 'react-icons/fa';
import '../css/responsive-style.css';
import "../css/style.css";

const Navbar = () => {
  const [state, setState] = useState(" ");


  useEffect(() => {
    console.log("add state");
    window.addEventListener('scroll', headerTop)
    return () => {
        console.log("remove state")
        window.removeEventListener('scroll', headerTop)
    }
});
  const headerTop = () => {
    console.log("ok"+ window.scrollY);
        if (window.scrollY >= 40 ) {
            setState({ x: ' header-scrolled ' })
        } else {
            setState({ x: ' ' })
        }
      }

   
  return (
    <>
    <header className="header_wrapper">

      <nav className={"navbar   navbar-expand-lg navbar-light bg-light" + state.x }>
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img className="img-fluid mt-0" src={logo} alt="img..." width="30" height="24"  />
            <span className=" fst-italic ms-3 fw-bold text-white">Sagar Bika</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <FaBars className="navbar-toggler-icon text-secondary"/>
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav  menu-navbar-nav ">
              <li className="nav-item">
                <a className="nav-link " href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="main-btn" href="#contact">
                  Hire Me 
                </a>
              </li>
              </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Navbar;
