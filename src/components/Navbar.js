/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [show,setShow ] = useState(false)
  return (
    <>
      <div className="container-fluid">
        <div className="row navbar_items py-3">
          <div className="navbar_sec">
            <h3>LOGO</h3>
          </div>
          <div className="Navbar_links">
            <ul>
              <li>
                <a href="#" className="secondaryColor">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  ADVERTISERS
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  PUBLISHERS{" "}
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  INFLUENCERS
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  AD FORMATS
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div className="Navbar_login_Button">
            <div className="navbar_button_container">
              <button className="loginBtn">Login</button>
              <button className="singupBtn">SignUp</button>
            </div>
          </div>
          <div className="navbar_toggler">
            <div className="toggler_icon">
              <i className="fas fa-stream" onClick={()=>setShow(!show)}></i>
            </div>
          </div>
        </div>

        <div className={show ? "MobileView":"MobileView2"}>
          <div className="Navbar_links2">
            <ul>
              <li>
                <a href="#" className="secondaryColor">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  ADVERTISERS
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  PUBLISHERS{" "}
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  INFLUENCERS
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  AD FORMATS
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="mainColor">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div className="Navbar_login_Button2">
            <div className="navbar_button_container2">
              <button className="loginBtn">Login</button>
              <button className="singupBtn">SignUp</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
