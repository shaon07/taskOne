import React, { useState } from "react";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Slider.css";

const Slider = () => {
  const [slider, setSlider] = useState("0 !important");

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="service_text text-center pb-4">
            <h2>Title 1</h2>
          </div>
          <div className="d-flex slider_sec">
            <Swiper className="mySwiper">
              <SwiperSlide className=" w-50 d-flex m-2 slider_card">
                <div className="d-flex slider-cards">
                  <div className="Slider-box-left">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RCIW9HUcA9y0I-kk3LGseyBozqwBnzYGNqtSoAaFEafgMeZe_RnW4dCUOV_SpXU9-sk&usqp=CAU"
                      alt="shaon"
                    />
                  </div>
                  <div className="slider_box_right">
                    <h3>title 1</h3>
                    <h4>Hello, Here will be a text</h4>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" w-50 d-flex m-2 slider_card">
                <div className="d-flex slider-cards">
                  <div className="Slider-box-left">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RCIW9HUcA9y0I-kk3LGseyBozqwBnzYGNqtSoAaFEafgMeZe_RnW4dCUOV_SpXU9-sk&usqp=CAU"
                      alt="shaon"
                    />
                  </div>
                  <div className="slider_box_right">
                    <h3>title 1</h3>
                    <h4>Hello, Here will be a text</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="  w-50 d-flex m-2 slider_card">
                <div className="d-flex slider-cards">
                  <div className="Slider-box-left">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RCIW9HUcA9y0I-kk3LGseyBozqwBnzYGNqtSoAaFEafgMeZe_RnW4dCUOV_SpXU9-sk&usqp=CAU"
                      alt="shaon"
                    />
                  </div>
                  <div className="slider_box_right">
                    <h3>title 1</h3>
                    <h4>Hello, Here will be a text</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" w-50 d-flex m-2 slider_card">
                <div className="d-flex slider-cards">
                  <div className="Slider-box-left">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RCIW9HUcA9y0I-kk3LGseyBozqwBnzYGNqtSoAaFEafgMeZe_RnW4dCUOV_SpXU9-sk&usqp=CAU"
                      alt="shaon"
                    />
                  </div>
                  <div className="slider_box_right">
                    <h3>title 1</h3>
                    <h4>Hello, Here will be a text</h4>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="Slider_button">
            <button>
              <i
                className="fas fa-angle-double-left"
                onClick={() => setSlider("-60rem !important")}
              ></i>
            </button>
            <button>
              <i className="fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
