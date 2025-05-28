import React from 'react';
import { Link } from 'react-router-dom';
import shap1 from "../../../assets/images/shapes/shape-06.png";
import BannerBg from "../../../assets/images/resource/about-three.png";

const About = () => {
  return (
    <section className="about__section p_relative see__pad home__three">
    <div className="pattern-layer">
        <div className=" pattern-4 p_absolute" data-parallax='{"x": 100}' style={{ backgroundImage: `url(${shap1})` }}></div>
    </div>
    <div className="boild__text">
        <h1>DataMatrix</h1>
    </div>
    <div className="auto-container">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="about__block p_relative">
                    <figure className="wow fadeInDown animated" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <img src={BannerBg} alt="" />
                    </figure>
                </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 col-md-12">
                <div className="about__text__block">
                    <div className="sub__title">
                        <h4>About Company</h4>
                    </div>
                    <div className="title two">
                        <h2>Enhancing Real-world Experiences with AR <span>Technology</span>.</h2>
                    </div>
                    <div className="texts">
                        <p>The applications of AR are vast and diverse. From entertainment and gaming, where users can see virtual characters in their surroundings, to education, where complex subjects can be visualized and explained in an immersive way,.</p>
                    </div>
                    <div className="btn-box">
                        <Link to="/about" className="theme-btn theme-btn-one"><i className="icon-02"></i> About more</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default About;
