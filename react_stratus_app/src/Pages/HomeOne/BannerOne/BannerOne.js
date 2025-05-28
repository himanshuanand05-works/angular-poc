import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import shap1 from "../../../assets/images/banner/banner-shap-01.png";
import BannerBg from "../../../assets/images/banner/banner-bg.png";
import Banner1 from "../../../assets/images/banner/banner-01.png";
import C2 from "../../../assets/images/resource/02.png";
import { Parallax } from 'react-parallax';


const BannerOne = () => {
  
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
    <section className="banner__one ">
      <div className="pattern-layer">
      <Parallax offset={0} speed={2.8} bgImage={shap1} strength={100} className="banner__icon pattern-1 p_absolute"></Parallax>
      </div>
      <div className="banner__data p_relative">
        <div className="banner__bg" style={{ backgroundImage: `url(${BannerBg})` }}></div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="banner__left">
                <div className="sub__title">
                  <h4>Better Future</h4>
                </div>
                <div className="banner__title">
                  <h1>
                    Advancing with <span>Technology</span>{' '}
                  </h1>
                </div>
                <div className="text">
                  <p>Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. </p>
                </div>
                <div className="btn-box">
                  <Link to="/contact" className="theme-btn theme-btn-one">
                    <i className="icon-02"></i> Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 col-md-12 ">
              <div className="banner__right p_relative">
                <div className="image__one">
                  <figure
                    className="image-box wow slideInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                    style={{ visibility: 'visible' }}
                  >
                    <img src={Banner1} alt="" />
                  </figure>
                </div>
                <div className="icon__image__banner">
                  <div className="circle-main">
                    <div className="circle">
                      <img src={C2} alt="" />
                      <div className="round-text">
                        <div className="text_1">
                          <p className="text_2">years experience years experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
