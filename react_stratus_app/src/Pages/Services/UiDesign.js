import React, { useState } from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';
import { Link } from 'react-router-dom';
import two from "../../assets/images/resource/man.png";
import service from "../../assets/images/resource/service-details.jpg";
import basebg from "../../assets/images/resource/base.png";


const Services = () => {
      pageTitle('UX/ UI Design');
      
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

      const servicesData = [
        { id: 1, title: 'Digital Marketing ', slug: '/digital-marketing' },
        { id: 2, title: 'UX/ UI Design', slug: '/ui-ux-design' },
        { id: 3, title: 'SEO Marketing', slug: '/seo-marketing' },
        { id: 4, title: 'Content Marketing', slug: '/content-marketing' },
      ];
    
      const renderServices = () => {
        return servicesData.map((service) => (
          <li key={service.id} className={service.slug === '/ui-ux-design' ? 'active' : ''}>
            <Link to={service.slug}>{service.title}</Link>
          </li>
        ));
      };
     
  return (
    
    <>
        <HeaderOne></HeaderOne>
        <BreadCrumb></BreadCrumb>
        <div className="service__details p_relative ">
            <div className="auto-container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-12">
                        <div className="service__details__left">
                            <div className="sidebar__widget">
                                <div className="all__service">
                                    <h4>All Services</h4>
                                </div>
                                <ul className="service__details__1__cat">
                                    {renderServices()}
                                </ul>
                            </div>
                            <div className=" sidebar__widget_network" style={{ backgroundImage: `url(${basebg})` }}>                            
                                <h3>Contact Us For Any Require</h3>
                                <div className="services__icon">
                                    <i className="icon-19"></i>
                                </div>
                                <p>Need help?  Call us:</p>
                                <h4>(+800) 1234 5678 90</h4>
                            </div> 
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-12 col-md-12">
                        <div className="service__right">
                            <figure>
                                <img src={service} alt="" />
                            </figure>
                            <h2>Enhancing Real-world Experiences with AR <span>Technology.</span> </h2>
                            <p>The applications of AR are vast and diverse. From entertainment and gaming, where users can see virtual characters in their surroundings, to education, where complex subjects can be visualized and explained in an immersive way,. We understand that every business has unique needs. Our technology solutions are tailored to match your specific requirements, ensuring optimal performance and efficiency. Our dedicated team of technology professionals comprises experienced engineers, developers, and researchers who are passionate about pushing the boundaries of technology. We understand that every business has unique needs. Our technology solutions are tailored to match your specific requirements, ensuring optimal performance and efficiency.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <li> <Link to="#"><i className="icon-04"></i> Human Resources</Link></li>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <li> <Link to="#"><i className="icon-04"></i> Web Development</Link></li>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <li> <Link to="#"><i className="icon-04"></i> Content Writing </Link></li>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <li> <Link to="#"><i className="icon-04"></i> IT Support</Link></li>
                                </div>
                            </div>
                            <p>
                                The applications of AR are vast and diverse. From entertainment and gaming, where users can see virtual characters in their surroundings, to education, where complex subjects can be visualized and explained in an immersive way,. We understand that every business has unique needs. Our technology solutions are tailored to match your specific requirements, ensuring optimal performance and efficiency. 
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="service__contact see__pad p_relative">
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
        <FooterOne></FooterOne>
    </>
  );
};

export default Services;
