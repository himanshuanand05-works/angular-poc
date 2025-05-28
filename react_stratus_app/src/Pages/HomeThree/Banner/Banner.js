import React from 'react';
import { Link } from 'react-router-dom';
import shap1 from "../../../assets/images/banner/banner-three.jpg";
import BannerBg from "../../../assets/images/resource/three-logo.png";

const Banner = () => {
  return (
    <section className="banner__one home__three__banner">
        <div className="image-layer p_absolute" style={{ backgroundImage: `url(${shap1})` }}></div>
        <div className="banner__data p_relative">
            <div className="auto-container">
                <div className="pattern-layer">
                    <div className=" pattern-3 p_absolute" data-parallax='{"y": -50}' style={{ backgroundImage: `url(${BannerBg})` }}></div>
                </div>
                <div className="banner__media">
                    <ul>
                        <li><Link to="#">Facebook </Link></li>
                        <li><Link to="#">LinkedIn </Link></li>
                        <li><Link to="#">Twitter </Link></li>
                        <li><Link to="#">Instagram </Link></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner__left">
                            <div className="sub__title">
                                <h4>Invite provides</h4>
                            </div>
                            <div className="banner__title">
                                <h1>IT Solutions of <span>Techn<span className="color">ology</span></span> </h1>
                            </div>
                            <div className="text">
                                <p>Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. </p>
                            </div>
                            <div className="btn-box">
                                <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Discuses</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner__bottom">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                            <div className="banner__mission__block">
                                <div className="mission__block">
                                    <h3>Our Vision</h3>
                                    <p>Providing legal advice, contract drafting, compliance assistance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                            <div className="banner__mission__block">
                                <div className="mission__block">
                                    <h3>Our Mission</h3>
                                    <p>Providing legal advice, contract drafting, compliance assistance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                            <div className="banner__mission__block">
                                <div className="mission__block">
                                    <h3>Our Target</h3>
                                    <p>Providing legal advice, contract drafting, compliance assistance.</p>
                                </div>
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
