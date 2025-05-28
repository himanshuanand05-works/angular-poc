import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";
import g1 from "../../assets/images/resource/gallery-01.png";
import g2 from "../../assets/images/resource/gallery-02.png";
import g3 from "../../assets/images/resource/gallery-03.png";
import g4 from "../../assets/images/resource/gallery-04.png";
import g5 from "../../assets/images/resource/gallery-05.png";
import g6 from "../../assets/images/resource/gallery-06.png";

const FooterOne = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
      };

    return (
        <>
            <footer className="main__footer">
            <div className="footer-top">
                <div className="auto-container">
                    <div className="top-inner">
                        <div className="left__top">
                            <h3>Looking For best It business solution</h3>
                        </div>
                        <div className="right__top">
                            <div className="btn-box">
                                <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__one">
                <div className="footer-widget-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget footer-logo-widget wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <figure className="footer-logo">
                                        <Link to="/"><img src={Logo} alt="" /></Link>
                                    </figure>
                                    <div className="text">
                                        <p>Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link to="about.html" className="theme-btn theme-btn-one"><i className="icon-02"></i> About Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget news-letter-widget ml_80 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="widget-title">
                                        <h4>Newletter</h4>
                                    </div>
                                    <div className="text">
                                        <p>Integrate with your existing systems, minimizing disruption and maximizing productivity.</p>
                                    </div>
                                    <div className="subscribe-inner">
                                        <form action="contact" method="post" className="subscribe-form" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Your mail address *" required="" />
                                                <div className="btn-box">
                                                    <button className="theme-btn theme-btn-one" type="submit"><i className="icon-02"></i> GO</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget office-widget wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="widget-title">
                                        <h4>Official info:</h4>
                                    </div>
                                    <div className="widget-content">
                                        <div className="text">
                                            <p>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
                                        </div>
                                        <Link to="tell:3055873407">+2(305) 587-3407</Link> <br/>
                                        <Link to="mailto:sample@example.com">sample@example.com</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column pr-0">
                                <div className="footer-widget gallery-widget wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="widget-title">
                                        <h4>Gallery</h4>
                                    </div>
                                    <div className="widget_content">
                                        <ul className="instagram_list clearfix">
                                            <li>
                                                <div className="inner__box">
                                                    <div className="image__box">
                                                        <Link to="/projects-details"><img src={g2} alt="" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner__box">
                                                    <div className="image__box">
                                                        <Link to="/projects-details"><img src={g3} alt="" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner__box">
                                                    <div className="image__box">
                                                        <Link to="/projects-details"><img src={g4} alt="" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner__box">
                                                    <div className="image__box">
                                                        <Link to="/projects-details"><img src={g1} alt="" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner__box">
                                                    <div className="image__box">
                                                        <Link to="/projects-details"><img src={g5} alt="" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner__box">
                                                    <div className="image__box">
                                                        <Link to="/projects-details"><img src={g6} alt="" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="bottom-inner">
                            <div className="copyright">
                                <p>© 2023 <Link to="/">DataMatrix.</Link>  All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default FooterOne;