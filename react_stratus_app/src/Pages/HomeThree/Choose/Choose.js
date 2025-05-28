import React from 'react';
import shap1 from "../../../assets/images/shapes/shape-02.png";

const Choose = () => {
  return (
    <section className="choose__us three p_relative ">
        <div className="pattern-layer">
            <div className="pattern-2 p_absolute" data-parallax='{"x": -50}' style={{ backgroundImage: `url(${shap1})` }}></div>
        </div>
        <div className="auto-container">
            <div className="title__data">
                <div className="sub__title">
                    <h4>Why choose us </h4>
                </div>
                <div className="title">
                    <h2>Around the world</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="choose_us_block">
                        <h2>Strategy</h2>
                        <ul>
                            <li>Deep campaign strategy <i className="icon-02"></i></li>
                            <li>Video production <i className="icon-02"></i></li>
                            <li>Graphic design & identity <i className="icon-02"></i></li>
                            <li>UI & UX design <i className="icon-02"></i></li>
                        </ul>
                    </div>    
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="choose_us_block">
                        <h2>Design</h2>
                        <ul>
                            <li>Market analysis  <i className="icon-02"></i></li>
                            <li>UI & UX design <i className="icon-02"></i></li>
                            <li>Deep campaign strategy <i className="icon-02"></i></li>
                            <li>Graphic design & identity <i className="icon-02"></i></li>
                        </ul>
                    </div>    
                </div>
                <div className="col-xl-4 col-lg-6 col-md-12">
                    <div className="choose_us_block">
                        <h2>Development</h2>
                        <ul>
                            <li>Deep campaign strategy <i className="icon-02"></i></li>
                            <li>Video production <i className="icon-02"></i></li>
                            <li>Graphic design & identity <i className="icon-02"></i></li>
                            <li>UI & UX design <i className="icon-02"></i></li>
                        </ul>
                    </div>    
                </div>
            </div>
        </div>
    </section>
  );
};

export default Choose;
