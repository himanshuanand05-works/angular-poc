import React from 'react';
import { pageTitle } from '../PageTitle';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';
import bg from '../../assets/images/resource/page-title-bg.jpg';
import { Link } from 'react-router-dom';


const Error = () => {
      pageTitle('Error');
    
  return (
    
    <>
        <HeaderOne></HeaderOne>
            <section className="page__title error__page p_relative">
                <div className="bg-layer" style={{ backgroundImage: `url(${bg})` }}></div>
                <div className="auto-container">
                    <div className="content__box p_relative">
                        <h1 className="title">4<span>0</span>4</h1>
                        <h2>Oops..!!! Page not found!</h2>
                        <div className="btn-box">
                            <Link to="/" className="theme-btn theme-btn-one"><i className="icon-02"></i> Back To Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        <FooterOne></FooterOne>
    </>
  );
};

export default Error;
