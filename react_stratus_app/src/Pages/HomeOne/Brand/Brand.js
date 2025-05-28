import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import shape4 from "../../../assets/images/shapes/shape-05.png";

const options = {
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 2,
      },
      1000: {
          items: 2,
      },
      1200: {
          items: 2,
      },
      1400: {
          items: 3,
      },
      1600: {
          items: 4,
      },
  },
};

const Brand = () => {
  return (
    <div className="brand__section p_relative see__pad">
      <div className="pattern-layer">
        <div
          className="pattern-3 p_absolute"
          data-parallax='{"y": -50}'
          style={{ backgroundImage: `url(${shape4})` }}
        ></div>
      </div>
      <OwlCarousel className="brand-carousel owl-carousel owl-theme nav-style-one" {...options}>
        <div className="brand__content">
          <div className="brand__name">
            <h1>IT Services *</h1>
          </div>
        </div>
        <div className="brand__content">
          <div className="brand__name">
            <h1>Development *</h1>
          </div>
        </div>
        <div className="brand__content">
          <div className="brand__name">
            <h1>Technology *</h1>
          </div>
        </div>
        <div className="brand__content">
          <div className="brand__name">
            <h1>IT Services *</h1>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Brand;
