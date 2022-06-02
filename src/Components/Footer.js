import React from "react";
import logo from "../images/sblogo.png";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 p-0 col-md-6 text-center text-md-start">
              <div className="footer-logo ms-4  mb-4 mb-md-0">
                <img
                  src={logo}
                  alt="img..."
                  className="img-fluid"
                  style={{width:"70px"}}
                />
              </div>
            </div>
            <div className="col-lg-3 p-0 col-md-6">
              <ul className=" list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center social-icon mb-4 mb-md-0">
                <li >
                  <a href="#">
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTelegram size={20} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin size={20} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 p-0 col-md-12">
                <div className="copyright-text text-lg-start text-center mb-3 mb-lg-0">
                    <p className="mb-0 copyright">Copyright Ⓒ 2022 <a href="#" > Sagarbika18361</a>.All Rights Reserved.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
