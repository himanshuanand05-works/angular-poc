import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import shape4 from "../../../assets/images/shapes/shape-06.png";
import two from "../../../assets/images/banner/banner-two.jpg";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
   
    <section className="banner__two slider-two p_relative">
        <div className="pattern-layer">
            <div className=" pattern-1 p_absolute" data-parallax='{"x": 100}' style={{ backgroundImage: `url(${shape4})` }}></div>
        </div>
        <div className="image-layer p_absolute" style={{ backgroundImage: `url(${two})` }}></div>
        <div className="banner__data__two p_relative">
                <OwlCarousel
                className="banner-carousel owl-theme owl-carousel owl-dots-none"
                items={1}
                loop={true}
                margin={0}
                smartSpeed={1000}
                autoplay={6000}
                responsive={{
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1200: {
                    items: 1,
                },
                }}
            >
                <div className="slide-item p_relative">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="content-box p_relative">
                                    <div className="sub__title">
                                        <h4 className="p_relative"> <span className="slider-text-anim two">Better Future</span></h4>
                                    </div>
                                    <h2 className="p_relative"><span className="slider-text-anim">IT Solutions of </span><br /> <span className="slider-text-anim title__last">Techn<span>ology</span></span></h2>
                                    <p>Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. </p>
                                    <div className="btn-box">
                                        <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Contact Us</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-item p_relative">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="content-box p_relative">
                                    <div className="sub__title">
                                        <h4 className="p_relative"> <span className="slider-text-anim two">Better Future</span></h4>
                                    </div>
                                    <h2 className="p_relative"><span className="slider-text-anim">IT Solutions of </span><br /> <span className="slider-text-anim title__last">Techn<span>ology</span></span></h2>
                                    <p>Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. </p>
                                    <div className="btn-box">
                                        <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Contact Us</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-item p_relative">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="content-box p_relative">
                                    <div className="sub__title">
                                        <h4 className="p_relative"> <span className="slider-text-anim two">Better Future</span></h4>
                                    </div>
                                    <h2 className="p_relative"><span className="slider-text-anim">IT Solutions of </span><br /> <span className="slider-text-anim title__last">Techn<span>ology</span></span></h2>
                                    <p>Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. </p>
                                    <div className="btn-box">
                                        <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Contact Us</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
            <div className="banner__bottom">
                <div className="row">
                    <div className="col-lg-6 col-md-12"></div>
                    <div className="col-lg-6 col-md-12">
                        <div className="banner__mission__block">
                            <div className="mission__block">
                                <h3>Our Vision</h3>
                                <p>Providing legal advice, contract drafting, compliance assistance.</p>
                            </div>
                            <div className="mission__block">
                                <h3>Our Mission</h3>
                                <p>Providing legal advice, contract drafting, compliance assistance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Banner;
