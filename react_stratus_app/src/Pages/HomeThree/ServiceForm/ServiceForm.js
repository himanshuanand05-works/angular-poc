import React, { useState } from 'react';
import two from "../../../assets/images/resource/man.png";

const ServiceForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
    
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Your logic to handle form submission goes here
        console.log('Form submitted:', formData);
    
        // Clear the form fields after submission if needed
        setFormData({
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: ''
        });
      };
    return (
        <div className="service__contact three p_relative">
            <div className="auto-container">
                <div className="service__contact__block">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="service__form__data">
                                <div className="form__title">
                                    <div className="title__data">
                                        <div className="sub__title">
                                            <h4>Contact Us</h4>
                                        </div>
                                        <div className="title">
                                            <h2>Send message</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-inner">
                                    <form onSubmit={handleSubmit} method="post" action="contact.php" className="default-form"> 
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
                        <div className="col-lg-6 col-md-12 p_relative">
                            <div className="service__contact__img">
                                <figure>
                                    <img src={two} alt=" /" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceForm;