import React from 'react';
import shape4 from "../../../assets/images/shapes/price-bg.png";


const Pricing = () => {
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
        <section className="pricing__section three see__pad p_relative">
            <div className="pattern-layer">
                <div className=" pattern-1 p_absolute" data-parallax='{"y": -50}' style={{ backgroundImage: `url(${shape4})` }}></div>
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
    );
};

export default Pricing;