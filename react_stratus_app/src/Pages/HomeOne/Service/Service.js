import React from 'react';
import { Link } from 'react-router-dom';


const Service = () => {
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
    ];
    return (
        <section className="service__section p_relative">
            <div className="auto-container">
                <div className="service__data">
                    <div className="title__data">
                        <div className="sub__title">
                            <h4>Better Future</h4>
                        </div>
                        <div className="title">
                            <h2>Explore Our Services</h2>
                        </div>
                    </div>
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
        </section>
    );
};

export default Service;