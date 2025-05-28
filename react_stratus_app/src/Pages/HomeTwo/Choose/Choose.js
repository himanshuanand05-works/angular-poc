import React from 'react';
import shape4 from "../../../assets/images/resource/choose-04.png";
import shape5 from "../../../assets/images/shapes/shape-11.png";
import shape6 from "../../../assets/images/shapes/shape-12.png";
import shape7 from "../../../assets/images/resource/choose-03.png";


const Choose = () => {
    return (
        <section className="choose___two see__pad p_relative">
        <div className="pattern-layer">
            <div className=" pattern-1 p_absolute" data-parallax='{"x": -75}' style={{ backgroundImage: `url(${shape4})` }}></div>
        </div>
        <div className="auto-container">
            <div className="row">
                <div className="col-lg-5 col-md-16">
                    <div className="choose_img__block">
                        <div className="title__data">
                            <div className="sub__title">
                                <h4>Why choose us</h4>
                            </div>
                            <div className="title">
                                <h2>Our Approach</h2>
                            </div>
                        </div>
                        <div className="choose_img__two p_relative">
                            <div className="pattern-layer">
                                <div className=" pattern-3 p_absolute" data-parallax='{"y": 10}' style={{ backgroundImage: `url(${shape5})` }}></div>
                            </div>
                            <div className="pattern-layer">
                                <div className=" pattern-4 p_absolute" data-parallax='{"y": -10}' style={{ backgroundImage: `url(${shape6})` }}></div>
                            </div>
                            <figure className="wow zoomIn animated animated" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <img src={shape7} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-16">
                    <div className="choose__text__block">
                        <h2>Unlock The Potential Of Your Business.</h2>
                        <div className="normal__text">
                            <p>Our dedicated team of technology professionals comprises experienced engineers, developers, and researchers who are passionate about pushing the boundaries of technology.Our dedicated team of technology professionals comprises experienced engineers, developers, and researchers who are passionate about pushing the boundaries of technology.</p>
                        </div>
                        <div className="customaize__solution">
                            <div className="customaize__block">
                                <h5>Customized Solutions:</h5>
                                <p>We understand that every business has unique needs. </p>
                            </div>
                            <div className="customaize__block">
                                <h5>Customized Solutions:</h5>
                                <p>We understand that every business has unique needs. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Choose;