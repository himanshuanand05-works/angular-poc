import React, { useState } from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';
import { Link } from 'react-router-dom';
import two from "../../assets/images/resource/man.png";
import shape5 from "../../assets/images/shapes/shape-10.png";


const Services = () => {
      pageTitle('Services');
      const servicesData = [
        {
          id: 1,
          title: 'Content Marketing',
          description: 'Consistency in posting content fosters a sense of reliability among followers.',
          icon: 'icon-04',
          href: '/services-details',
          data_aos_delay:'00ms',
        },
        {
          id: 2,
          title: 'Digital Marketing',
          description: 'Consistency in posting content fosters a sense of reliability among followers.',
          icon: 'icon-08',
          href: '/services-details',
          data_aos_delay:'200ms',
        },
        {
          id: 3,
          title: 'SEO Marketing',
          description: 'Consistency in posting content fosters a sense of reliability among followers.',
          icon: 'icon-12',
          href: '/services-details',
          data_aos_delay:'400ms',
        },
        {
          id: 4,
          title: 'Content Marketing',
          description: 'Consistency in posting content fosters a sense of reliability among followers.',
          icon: 'icon-04',
          href: '/services-details',
          data_aos_delay:'00ms',
        },
        {
          id: 5,
          title: 'Digital Marketing',
          description: 'Consistency in posting content fosters a sense of reliability among followers.',
          icon: 'icon-08',
          href: '/services-details',
          data_aos_delay:'200ms',
        },
        {
          id: 6,
          title: 'SEO Marketing',
          description: 'Consistency in posting content fosters a sense of reliability among followers.',
          icon: 'icon-12',
          href: '/services-details',
          data_aos_delay:'400ms',
        },
      ];
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
      const servicesDataTwo = [
        {
          id: 1,
          title: 'Content Marketing',
          number:'01',
          description: 'Providing legal advice, contract drafting, compliance assistance.',
          icon: 'icon-04',
          href: '/services-details',
          data_aos_delay:'00ms',
          buttontext:'Read More',
        },
        {
          id: 2,
          title: 'Digital Marketing',
          number:'02',
          description: 'Providing legal advice, contract drafting, compliance assistance.',
          icon: 'icon-08',
          href: '/services-details',
          data_aos_delay:'200ms',
          buttontext:'Read More',
        },
        {
          id: 3,
          title: 'SEO Marketing',
          number:'03',
          description: 'Providing legal advice, contract drafting, compliance assistance.',
          icon: 'icon-12',
          href: '/services-details',
          data_aos_delay:'400ms',
          buttontext:'Read More',
        },
        {
          id: 4,
          title: 'Web Design',
          number:'04',
          description: 'Providing legal advice, contract drafting, compliance assistance.',
          icon: 'icon-12',
          href: '/services-details',
          data_aos_delay:'600ms',
          buttontext:'Read More',
        },
      ];
  return (
    
    <>
        <HeaderOne></HeaderOne>
        <BreadCrumb></BreadCrumb>
        <div className="service__page p_relative see__pad">
            <div className="auto-container">
                <div className="row">
                    {servicesData.map((item, id)=>(
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay={item.data_aos_delay} data-wow-duration="1500ms" key={id}>
                            <div className="service__block">
                                <div className="service__icon">
                                    <i className={item.icon}></i>
                                    <div className="service__icon__two"></div>
                                </div>
                                <div className="service__text">
                                    <h4><Link to={item.href}>{item.title}</Link></h4>
                                    <p>{item.description}</p>
                                </div>
                                <div className="service__button">
                                    <Link to={item.href}><i className="icon-05"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <section className="service__two p_relative">
            <div className="row">
                {servicesDataTwo.map((item, id)=>(
                    <div className="col-xl-3 col-lg-6 col-md-12 wow fadeInUp animated" data-wow-delay={item.data_aos_delay} data-wow-duration="1500ms" key={id}>
                        <div className="service__block__two p_relative">
                            <div className="service__image" style={{ backgroundImage: `url(${shape5})` }}>
                                
                            </div>
                            <div className="service__icon">
                                <div className="service__number">
                                    <h1>{item.number}</h1>
                                </div>
                                <i className={item.icon}></i>
                            </div>
                            <div className="service__text">
                                <h4><Link to={item.href}>{item.title}</Link></h4>
                                <p>{item.description}</p>
                            </div>
                            <div className="service__button__two">
                                <Link to={item.href}>{item.buttontext}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
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
