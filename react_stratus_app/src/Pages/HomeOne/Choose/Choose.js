import React from 'react';
import choose1 from "../../../assets/images/resource/choose-01.png";
import choose2 from "../../../assets/images/resource/choose-02.png";
import choose3 from "../../../assets/images/resource/choose-02.png";
import choose4 from "../../../assets/images/resource/choose-02.png";

const Choose = () => {
    return (
        <section className="choose__us p_relative">
            <div className="choose__us__data">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="choose__block">
                                <figure>
                                    <img src={choose1} alt="" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="choose__block__right">
                                <div className="title__data">
                                    <div className="sub__title">
                                        <h4>Why choose us</h4>
                                    </div>
                                    <div className="title">
                                        <h2>We Provide Your Best Work </h2>
                                    </div>
                                </div>
                                <div className="team__data">
                                    <div className="team__data__left">
                                        <figure>
                                        <img src={choose2} alt="" />
                                    </figure>
                                        
                                    </div>
                                    <div className="team__data__right">
                                        <h3>Expert Team :</h3>
                                        <p>Our dedicated team of technology professionals comprises experienced engineers, developers, and researchers who are passionate about pushing the boundaries of technology.</p>
                                    </div>
                                </div>
                                <div className="team__data">
                                    <div className="team__data__left">
                                        <img src={choose3} alt="" />
                                    </div>
                                    <div className="team__data__right">
                                        <h3>Expert Team :</h3>
                                        <p>Our dedicated team of technology professionals comprises experienced engineers, developers, and researchers who are passionate about pushing the boundaries of technology.</p>
                                    </div>
                                </div>
                                <div className="team__data three">
                                    <div className="team__data__left">
                                        <img src={choose4} alt="" />
                                    </div>
                                    <div className="team__data__right">
                                        <h3>Expert Team :</h3>
                                        <p>Our dedicated team of technology professionals comprises experienced engineers, developers, and researchers who are passionate about pushing the boundaries of technology.</p>
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

export default Choose;