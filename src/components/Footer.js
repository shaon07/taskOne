import React from "react";
import '../styles/footer.css';

const Footer = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 footer_card">
              <h3>We are social </h3>
              <h3>FOLLOW US</h3>
              <div className="footer_icon py-3">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-github"></i>
              </div>
              <h2 style={{fontSize:"3rem"}}>LOGO</h2>
            </div>

            <div className="col-6 col-md-3 footer_card">
                <h3>Links</h3>
                <h2>ADVERTISERS </h2>
                <h2>PUBLISHERS </h2>
                <h2>INFLUENCERS </h2>
                <h2>AD FORMATS </h2>
            </div>
            <div className="col-6 col-md-3 footer_card">
                <h3>Documentation</h3>
                <h2>TERMS & CONDITIONS </h2>
                <h2>PRIVACY POLICY </h2>
                <h2>CANCELLATION POLICY </h2>
                <h2>BLOG </h2>
            </div>
            <div className="col-6 col-md-3 footer_card">
                <h3>Support</h3>
                <h2>FAQ</h2>
                <h2>MEDIA KIT</h2>
                <h2>CONTACT US</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
