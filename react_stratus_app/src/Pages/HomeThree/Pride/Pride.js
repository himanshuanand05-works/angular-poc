import React from 'react';
import two from "../../../assets/images/resource/bg-04.jpg";
import two2 from "../../../assets/images/resource/icon-04.png";

const Pride = () => {
    return (
        <div className="pride__section  p_relative see__pad">
            <div className="pride__layer" style={{ backgroundImage: `url(${two})` }}></div>
            <div className="auto-container">
                <div className="pride__block">
                    <figure>
                        <img src={two2} alt="" />
                    </figure>
                    <h1>We pride ourselves on our excellent support
                        and service</h1>
                </div>
            </div>
        </div>
    );
};

export default Pride;