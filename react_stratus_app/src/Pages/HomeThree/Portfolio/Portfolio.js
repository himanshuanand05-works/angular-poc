import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import two from "../../../assets/images/resource/portfolio-01.jpg";
import two2 from "../../../assets/images/resource/portfolio-02.jpg";
import two3 from "../../../assets/images/resource/portfolio-03.jpg";
import two4 from "../../../assets/images/resource/portfolio-04.jpg";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className="portfolio  p_relative home__three__p">
        <div className="auto-container">
            <div className="title__data">
                <div className="sub__title">
                    <h4>Projects </h4>
                </div>
                <div className="title">
                    <h2>Some Of Our Projects</h2>
                </div>
            </div>
            <div className="protfolio__inner">
                <OwlCarousel
                className="portfolio-carousel owl-theme owl-carousel owl-dots-none"
                items={4}
                loop={true}
                margin={24}
                smartSpeed={1000}
                autoplay={6000}
                responsive={{
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
                }}
            >
                <div className="portfolio__block p_relative">
                    <div className="portfolio__image">
                        <figure>
                            <img src={two} alt="" />
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
                            <Link to="/projects" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio__block p_relative">
                    <div className="portfolio__image">
                        <figure>
                            <img src={two2} alt="" />
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
                            <Link to="/projects" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio__block p_relative">
                    <div className="portfolio__image">
                        <figure>
                            <img src={two3} alt="" />
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
                            <Link to="/projects" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="portfolio__block p_relative">
                    <div className="portfolio__image">
                        <figure>
                            <img src={two4} alt="" />
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
                            <Link to="/projects" className="theme-btn theme-btn-one"> Read More<i className="icon-02"></i></Link>
                        </div>
                    </div>
                </div>
                </OwlCarousel>
            </div>
        </div>
    </section>
  );
};

export default Portfolio;
