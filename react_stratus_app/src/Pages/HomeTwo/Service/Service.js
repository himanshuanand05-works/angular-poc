import React from 'react';
import { Link } from 'react-router-dom';
import shape4 from "../../../assets/images/shapes/shape-09.png";
import shape5 from "../../../assets/images/shapes/shape-10.png";


const Service = () => {
    const servicesData = [
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
        <section className="service__two p_relative">
            <div className="pattern-layer">
                <div className=" pattern-1 p_absolute" data-parallax='{"x": 100}' style={{ backgroundImage: `url(${shape4})` }}></div>
            </div>
            <div className="row">
                {servicesData.map((item, id)=>(
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
    );
};

export default Service;