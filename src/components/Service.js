import React from "react";
import '../styles/Service.css';

const Service = () => {
  return (
    <>
      <div className="container-fluid service_container py-5">
        <div className="container">
          <div className="service_text text-center pb-4">
            <h2>AVAILABLE FOR EVERYONE</h2>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
          </div>
          <div className="row py-5 justify-content-between py-4">
            <div className="col-12 col-sm-6 bg-white  col-md-4 service_box">
            <i className="fab fa-amazon"></i>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <button>Hello 1</button>
            </div>
            <div className="col-12 col-sm-6 bg-white col-md-4 service_box">
              <i className="fab fa-amazon"></i>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <button>Hello 1</button>
            </div>
            <div className="col-12 col-sm-6 bg-white col-md-4 service_box">
              <i className="fab fa-amazon"></i>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <button>Hello 1</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
