import React from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';


const Pricing = () => {
      pageTitle('Pricing');
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
        <div className="pricing__page p_relative see__pad">
            <div className="auto-container">
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
        </div>
        <FooterOne></FooterOne>
    </>
  );
};

export default Pricing;
