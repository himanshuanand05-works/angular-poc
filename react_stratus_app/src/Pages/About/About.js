import React from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';
import AboutOne from '../HomeOne/AboutOne/AboutOne';
import Choose from '../HomeOne/Choose/Choose';
import { Link } from 'react-router-dom';

import shape4 from "../../assets/images/shapes/shape-03.png";
import team1 from "../../assets/images/resource/team-01.png";
import team2 from "../../assets/images/resource/team-02.png";
import team3 from "../../assets/images/resource/team-03.png";
import team4 from "../../assets/images/resource/team-04.png";
import Pride from '../HomeThree/Pride/Pride';
import shape3 from "../../assets/images/shapes/shape-04.png";


const About = () => {
      pageTitle('About Us');
      const teamData = [
        {
          id: 1,
          name: 'Wade Warren',
          image: team1,
          data_aos_delay: '00ms',
        },
        {
          id: 2,
          name: 'Esther Howard',
          image: team2,
          data_aos_delay: '100ms',
        },
        {
          id: 3,
          name: 'Bessie Cooper',
          image: team3,
          data_aos_delay: '200ms',
        },
        {
          id: 4,
          name: 'Dianne Russell',
          image: team4,
          data_aos_delay: '300ms',
        },
      ];
      const pricingData = [
        {
          id: 1,
          price_name: 'Basic',
          list_a: '20GB Space',
          list_b: '10GB Bandwidth',
          list_c: '2 Databases',
          list_d: '1 Accounts',
          list_e: '24th Support',
          amount: '200',
          time:'m',
          delay:'100ms',
        },
        {
          id: 2,
          price_name: 'Personal',
          list_a: '20GB Space',
          list_b: '10GB Bandwidth',
          list_c: '2 Databases',
          list_d: '1 Accounts',
          list_e: '24th Support',
          amount: '300',
          time:'m',
          delay:'200ms',
        },
        {
          id: 3,
          price_name: 'Business',
          list_a: '20GB Space',
          list_b: '10GB Bandwidth',
          list_c: '2 Databases',
          list_d: '1 Accounts',
          list_e: '24th Support',
          amount: '400',
          time:'m',
          delay:'300ms',
        },
      ];
  return (
    
    <>
        <HeaderOne></HeaderOne>
        <BreadCrumb></BreadCrumb>
        <AboutOne></AboutOne>
        <Choose></Choose>

        <section className="team__section see__pad p_relative">
            <div className="pattern-layer">
                <div className="pattern-3 p_absolute" data-parallax='{"y": 50}' style={{ backgroundImage: `url(${shape4})` }}></div>
            </div>
            <div className="auto-container">
                <div className="title__data">
                    <div className="sub__title">
                        <h4>Team Members</h4>
                    </div>
                    <div className="title">
                        <h2>We Have Expert Member</h2>
                    </div>
                </div>
                <div className="row">
                    {teamData.map((item, id)=>(
                        <div className="col-lg-3 col-md-6 col-sm-12" key={id}>
                            <div className="team__block wow fadeInUp animated" data-wow-delay={item.data_aos_delay} data-wow-duration="1500ms">
                                <div className="team__img">
                                    <figure>
                                        <img src={item.image} alt="" />
                                    </figure>
                                </div>
                                <div className="team__name">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="team__media">
                                    <ul>
                                        <li><Link to="#">FB.</Link></li>
                                        <li><Link to="#">TW.</Link></li>
                                        <li><Link to="#">LI</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <Pride></Pride>
        <section className="pricing__section see__pad p_relative">
            <div className="pattern-layer">
                <div className="pattern-4 p_absolute" data-parallax='{"x": 100}' style={{ backgroundImage: `url(${shape3})` }}></div>
            </div>  
            <div className="auto-container">
                <div className="title__data">
                    <div className="sub__title">
                        <h4>Pricing</h4>
                    </div>
                    <div className="title">
                        <h2>Product Price</h2>
                    </div>
                </div>
                <div className="row">
                    {pricingData.map((item, id)=>(
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay={item.delay} data-wow-duration="1500ms" key={id}>
                            <div className="price__content p_relative">
                                <div className="price__data">
                                    <h5>{item.price_name}</h5>
                                    <h4><span>$</span>{item.amount} / <span>{item.time}</span></h4>
                                </div>
                                <div className="price__block">
                                    <div className="price__list">
                                        <ul>
                                            <li>{item.list_a}</li>
                                            <li>{item.list_b}</li>
                                            <li>{item.list_c} </li>
                                            <li>{item.list_d}</li>
                                            <li>{item.list_e}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="price__icon">
                                    <i className="icon-16"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <FooterOne></FooterOne>
    </>
  );
};

export default About;
