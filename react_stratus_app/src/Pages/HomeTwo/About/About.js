import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BannerBg from "../../../assets/images/shapes/shape-07.png";
import BannerBg2 from "../../../assets/images/shapes/shape-08.png";
import AboutUs from "../../../assets/images/resource/about-two.jpg";
import s2 from "../../../assets/images/resource/02.png";

const About = () => {
    const uxUiDesignRef = useRef(null);
    const webDesignRef = useRef(null);
    const developmentRef = useRef(null);
  
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const elements = [uxUiDesignRef, webDesignRef, developmentRef];
  
        elements.forEach((ref) => {
          if (ref.current) {
            const elementTop = ref.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
  
            if (elementTop < windowHeight - 50) {
              setIsVisible(true);
            }
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      if (isVisible) {
        // Logic to handle appearance
        const elements = [uxUiDesignRef, webDesignRef, developmentRef];
  
        elements.forEach((ref) => {
          if (ref.current) {
            const percent = ref.current.getAttribute('data-percent');
            ref.current.style.width = percent;
            ref.current.classList.add('counted');
          }
        });
      }
    }, [isVisible]);
    useEffect(() => {
        const text_2 = document.querySelector(".text_2");
        if (text_2) {
          text_2.innerHTML = text_2.innerText
            .split("")
            .map(
              (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
            )
            .join("");
        }
      }, []);
  return (
    <section className="about___two p_relative see__pad">
        <div className="pattern-layer">
            <div className=" pattern-1 p_absolute" data-parallax='{"x": -100}' style={{ backgroundImage: `url(${BannerBg})` }}></div>
        </div>
        <div className="auto-container">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="about__two__img__block p_relative">
                        <figure>
                            <img src={AboutUs} alt="" />
                        </figure>
                        <div className="about__two__circle ">
                            <div className="pattern-layer">
                                <div className=" pattern-2 p_absolute" data-parallax='{"y": 30}' style={{ backgroundImage: `url(${BannerBg2})` }}></div>
                            </div>
                            <div className="circle-main">
                                <div className="circle">
                                    <img src={s2} alt="" />
                                    <div className="round-text">
                                        <div className="text_1">
                                            <p className="text_2">years experience years experience</p>
                                        </div>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                        <div className="about__text__two">
                            <img src={s2} alt="" />
                            <h4>Best IT <span>2023</span> </h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-12"></div>
                <div className="col-lg-5 col-md-12">
                    <div className="about__text__block">
                        <div className="sub__title">
                            <h4>About Company</h4>
                        </div>
                        <div className="title two">
                            <h2>Enhancing Real-world Experiences with AR <span>Technology</span>.</h2>
                        </div>
                        <div className="texts">
                            <p>The applications of AR are vast and diverse. From entertainment and gaming, where users can see virtual characters in their surroundings, to education, where complex subjects can be visualized and explained in an immersive way.</p>
                        </div>
                        <div className="content_block_three">
                            <div className="content-box p_relative ">
                                <div className="progress-inner   ">
                                    <div className="progress-box   ">
                                        <h6>UX/ UI Design :</h6>
                                        <div className="bar">
                                            <div ref={uxUiDesignRef} className="bar-inner count-bar" data-percent="95%"></div>
                                            <div className="count-text"></div>
                                        </div>
                                    </div>
                                    <div className="progress-box p_relative d_block mb_35">
                                        <h6>Web Design :</h6>
                                        <div className="bar">
                                            <div ref={webDesignRef} className="bar-inner count-bar" data-percent="70%"></div>
                                            <div className="count-text"></div>
                                        </div>
                                    </div>
                                    <div className="progress-box p_relative d_block">
                                        <h6>Development :</h6>
                                        <div className="bar">
                                            <div ref={developmentRef} className="bar-inner count-bar" data-percent="90%"></div>
                                            <div className="count-text"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link to="/about" className="theme-btn theme-btn-one"><i className="icon-02"></i> About more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
