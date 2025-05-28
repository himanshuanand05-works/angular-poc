import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const Accomplised = () => {
    return (
        <section className="accomplised__section__two see__pad three">
            <div className="auto-container">
                <div className="accomplised__data two three p_relative">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="title__data">
                                <div className="sub__title">
                                    <h4>What we've accomplised</h4>
                                </div>
                                <div className="title">
                                    <h2>We pride ourselves on <br/> our excellent support <br/> and servic</h2>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-4 col-md-12">
                            <div className="funfact__data">
                                <div className="funfact__content one">
                                    <div className="count-outer count-box">
                                        <span className="plus">+</span>
                                        <h1 className="count-text"><CountUp start={0} end={4.9} /><span className="two">*</span></h1>
                                    </div>
                                    <p> Customer Satisfaction</p>
                                </div>
                                <div className="funfact__content two">
                                    <div className="count-outer count-box">
                                        <span className="plus">+</span>
                                        <h1 className="count-text"><CountUp start={0} end={4.9} /><span className="two">k</span></h1>
                                        
                                    </div>
                                    <p>Active our Members</p>
                                </div>
                                <div className="funfact__content three">
                                    <div className="count-outer count-box">
                                        <span className="plus">+</span>
                                        <h1 className="count-text"><CountUp start={0} end={30} /><span className="two">%</span></h1>
                                        
                                    </div>
                                    <p>Same day resolution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accomplised;