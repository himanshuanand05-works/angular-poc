import React from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';
import CountUp from 'react-countup';
import au1 from "../../assets/images/resource/author-01.png";
import au2 from "../../assets/images/resource/author-02.png";
import au3 from "../../assets/images/resource/author-03.png";
import au4 from "../../assets/images/resource/author-04.png";
import { Link } from 'react-router-dom';


const Testimonial = () => {
      pageTitle('Testimonial');
      const teamData = [
        {
          id: 1,
          name: 'Annette Black',
          image: au1,
          desc: 'ECO',
        },
        {
          id: 2,
          name: 'Kristin Watson',
          image: au2,
          desc: 'EX CEO',
        },
        {
          id: 3,
          name: 'Devon Lane',
          image: au3,
          desc: 'CTO',
        },
        {
          id: 4,
          name: 'Kristin Watson',
          image: au4,
          desc: 'Manager',
        },
      ];
  return (
    
    <>
        <HeaderOne></HeaderOne>
        <BreadCrumb></BreadCrumb>
        <div className="testimonial__page p_relative see__pad">
            <div className="testimonial___data">
                <div className="row">
                    {teamData.map((item, id)=>(
                        <div className="col-xl-3 col-lg-6 col-md-12" key={id}>
                            <div className=" testimonials__block__one page">
                                <div className="testimonials__info">
                                    <div className="authore__img">
                                        <figure className="image">
                                            <img src={item.image} alt="" />
                                        </figure>
                                    </div>
                                    <div className="authore__rating">
                                        <ul>
                                            <li><i className="icon-13"></i></li>
                                            <li><i className="icon-13"></i></li>
                                            <li><i className="icon-13"></i></li>
                                            <li><i className="icon-13"></i></li>
                                            <li><i className="icon-13"></i></li>
                                        </ul>
                                    </div>
                                    <div className="authore__info">
                                        <h5>{item.name}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="testimonials__text">
                                        <p>Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.</p>
                                    </div>
                                </div>
                                <div className="quote">
                                    <span className="icon-03"></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <section className="accomplised__section__two see__pad">
            <div className="auto-container">
                <div className="accomplised__data two p_relative">
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
        <FooterOne></FooterOne>
    </>
  );
};

export default Testimonial;
