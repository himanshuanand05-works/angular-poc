import React from 'react';
import { pageTitle } from '../PageTitle';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';
import BreadCrumb  from '../BreadCrumb';
import { Link } from 'react-router-dom';
import contact from "../../assets/images/resource/contact.jpg";
import map from "../../assets/images/resource/map.jpg";


const Contact = () => {
      pageTitle('Contact');
      const handleSubmitOne = (event) => {
        event.preventDefault(); 
      };
    
  return (
    
    <>
        <HeaderOne></HeaderOne>
        <BreadCrumb></BreadCrumb>
        <section className="contact__page p_relative see__pad">
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-ms-12">
                        <div className="contact__left">
                            <figure>
                                <img src={contact} alt="" />
                            </figure>
                            <h4>Contact Information</h4>
                            <div className="contact__info">
                                <div className="contact__block">
                                    <div className="icon">
                                        <i className="icon-19"></i>
                                    </div>
                                    <div className="contact__text">
                                        <Link to="tell:3025550107">(302) 555-0107</Link> <br/>
                                        <Link to="tell:3025550107">(207) 555-0119</Link>
                                    </div>
                                </div>
                                <div className="contact__block">
                                    <div className="icon two">
                                        <i className="icon-20"></i>
                                    </div>
                                    <div className="contact__text">
                                        <Link to="mailto:willie.jennings@example.com">willie.jennings@example.com</Link> <br/>
                                        <Link to="mailto:tranthuy.nute@gmail.com">tranthuy.nute@gmail.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="contact__right">
                            <div className="form__title">
                                <div className="title__data">
                                    <div className="sub__title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="title">
                                        <h2>Get a Free Quote</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="form-inner">
                                <form onSubmit={handleSubmitOne} method="post" action="contact.php" className="default-form"> 
                                    <div className="row clearfix">
                                        <div className="col-xl-6 form-group">
                                            <input type="name" name="name" placeholder="Your Name *" required="" />
                                        </div>
                                        <div className="col-xl-6 col-lg-12 form-group">
                                            <input type="email" name="email" placeholder="Your Email *" required="" />
                                        </div>
                                        <div className="col-xl-6 col-lg-12 form-group">
                                            <input type="text" name="subject" placeholder="Your Subject " required="" />
                                        </div>
                                        <div className="col-xl-6 col-lg-12 form-group">
                                            <input type="text" name="phone" placeholder="Your Phone " required="" />
                                        </div>
                                        <div className="ccol-xl-6 col-lg-12 form-group">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="col-xl-12 form-group message-btn btn-box">
                                            <button className="theme-btn theme-btn-one" type="submit" name="submit-form">Send your Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="google__map">
            <figure>
                <img src={map} alt="" />
            </figure>
        </div>
        <FooterOne></FooterOne>
    </>
  );
};

export default Contact;
