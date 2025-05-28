import React from 'react';
import two from "../../../assets/images/resource/consultation.jpg";
import { Link } from 'react-router-dom';

const Consultation = () => {
    return (
        <div className="consultation__section p_relative">
            <div className="auto-container">
                <div className="row">
                    <div className="col-xxl-4 col-lg-6 col-md-12">
                        <div className="consultation__list">
                            <ul>
                                <li><Link to="#"><span>01</span> IT Consultation</Link> </li>
                                <li><Link to="#"><span>02</span> Data Security </Link> </li>
                                <li><Link to="#"><span>03</span> Market analysis </Link> </li>
                                <li><Link to="#"><span>04</span> Video production</Link> </li>
                                <li><Link to="#"><span>05</span> Deep campaign strategy</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-lg-6 col-md-12">
                        <div className="consultation__img">
                            <figure>
                                <img src={two} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-12 p_relative">
                        <div className="consultation__text">
                            <h3>IT Consultation</h3>
                            <p>The applications of AR are vast and diverse. From entertainment and gaming, where users can see virtual characters in their surroundings, to education, where complex subjects can be visualized and explained in an immersive way,.</p>
                            <p>Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.</p>
                            <div className="consultation__button">
                                <Link to="/service-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultation;