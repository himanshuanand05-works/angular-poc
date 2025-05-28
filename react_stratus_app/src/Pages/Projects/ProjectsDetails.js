import React from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';
import { Link } from 'react-router-dom';
import portfolio1 from "../../assets/images/resource/portfolio-01.jpg";
import portfolio2 from "../../assets/images/resource/portfolio-02.jpg";
import portfolio3 from "../../assets/images/resource/portfolio-03.jpg";
import project from "../../assets/images/resource/project-details.jpg";


const ProjectsDetails = () => {
      pageTitle('Projects Details');
      const projrctData = [
        {
          id: 1,
          image: portfolio1,
        },
        {
          id: 2,
          image: portfolio2,
        },
        {
          id: 3,
          image: portfolio3,
        },
      ];
  return (
    
    <>
        <HeaderOne></HeaderOne>
        <BreadCrumb></BreadCrumb>
        <section className="project__details p_relative">
            <div className="auto-container">
                <div className="image">
                    <figure>
                        <img src={project} alt="" />
                    </figure>
                </div>
                <div className="pro__info">
                    <ul>
                        <li>
                            <div className="name">
                                <p>Client :</p>
                            </div>
                            <div className="name__two">
                                <h4>Jone welliam</h4>
                            </div>
                        </li>
                        <li>
                            <div className="name">
                                <p>Category :</p>
                            </div>
                            <div className="name__two">
                                <h4>Marketing</h4>
                            </div>
                        </li>
                        <li>
                            <div className="name">
                                <p>Date :</p>
                            </div>
                            <div className="name__two">
                                <h4>15 July, 2023</h4>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="data">
                    <h4>Data Analysis and Business Intelligence</h4>
                </div>
                <p>BizGenius is a dynamic and innovative company that specializes in [products/services]. With a commitment to excellence and a customer-centric approach, we strive to deliver unparalleled solutions that meet the unique needs of our clients. Our team of experienced professionals is dedicated to providing top-notch [products/services] that drive business growth and success. We combine industry expertise with cutting-edge technology to deliver transformative results. Whether you're a small startup or a large enterprise, we have the knowledge and resources to help you thrive in today's competitive market. Partner with [Business Name] and experience the difference as we work together to unlock your business's full potential.</p>
                <div className="data">
                    <h4>Data Analysis and Business Intelligence</h4>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id esed ut perspiciatis unde omnis iste natus.</p>
                <div className="data__list">
                    <ul>
                        <li> <i className="icon-05"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li> <i className="icon-05"></i>Mauris non est efficitur, porttitor dolor ut, euismod dui.</li>
                        <li> <i className="icon-05"></i>Nulla gravida sapien id turpis molestie, nec rhoncus quam accumsan.</li>
                        <li> <i className="icon-05"></i>Curabitur facilisis purus a ante feugiat cursus.</li>
                        <li> <i className="icon-05"></i>Suspendisse ut nisi ac lacus facilisis bibendum.</li>
                    </ul>
                </div>
                <div className="project__button">
                    <div className="button__one">
                        <Link to="#">Previous</Link>
                    </div>
                    <div className="button__one">
                        <Link to="#">Next</Link>
                    </div>
                </div>
            </div>
        </section>
        <div className="project__page p_relative see__pad">
            <div className="auto-container">
                <div className="row">
                    {projrctData.map((item, id)=>(
                        <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                            <div className="portfolio__block p_relative">
                                <div className="portfolio__image">
                                    <figure>
                                    <img src={item.image} alt="" />
                                    </figure>
                                </div>
                                <div className="lower__content p_absolute">
                                    <div className="protfolio__text">
                                        <div className="text__block">
                                            <h4>Sustainability</h4>
                                            <p>Design</p>
                                        </div>
                                        <div className="text__block_two">
                                            <h5>2019</h5>
                                        </div>
                                    </div>
                                    <div className="protfolio__button">
                                        <Link to="/projects-details" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                                    </div>
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

export default ProjectsDetails;
