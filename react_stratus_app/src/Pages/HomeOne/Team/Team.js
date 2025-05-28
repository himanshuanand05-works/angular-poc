import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import shape4 from "../../../assets/images/shapes/shape-04.png";
import team1 from "../../../assets/images/resource/team-01.png";
import team2 from "../../../assets/images/resource/team-02.png";
import team3 from "../../../assets/images/resource/team-03.png";
import team4 from "../../../assets/images/resource/team-04.png";
import WOW from 'wowjs';

const Team = () => {
    useEffect(() => {
        new WOW.WOW({
          mobile: false
        }).init();
      }, []);
        
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

    return (
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
            <div className="accomplised__section">
                <div className="auto-container">
                    <div className="accomplised__data p_relative">
                        <div className="pattern-layer">
                            <div className="pattern-4 p_absolute" data-parallax='{"x": 100}' style={{ backgroundImage: `url(${shape4})` }}></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className="title__data">
                                    <div className="sub__title">
                                        <h4>What we've accomplised</h4>
                                    </div>
                                    <div className="title">
                                        <h2>We pride ourselves on <br/> our excellent support <br/> and servic</h2>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link to="contact.html" className="theme-btn theme-btn-one"><i className="icon-02"></i> Contact Us</Link>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-4 col-md-12">
                                <div className="funfact__data">
                                    <div className="funfact__content one">
                                        <div className="count-outer count-box">
                                            <span className="plus">+</span>
                                            <h1 className="count-text"><CountUp start={0} end={4.9} /><span className="two">*</span></h1>
                                        </div>
                                        <p> Customer Satisfaction</p>
                                    </div>
                                    <div className="funfact__content two">
                                        <div className="count-outer count-box">
                                            <span className="plus">+</span>
                                            <h1 className="count-text"><CountUp start={0} end={4.9} /><span className="two">k</span></h1>
                                            
                                        </div>
                                        <p>Active our Members</p>
                                    </div>
                                    <div className="funfact__content three">
                                        <div className="count-outer count-box">
                                            <span className="plus">+</span>
                                            <h1 className="count-text"><CountUp start={0} end={30} /><span className="two">%</span></h1>
                                        </div>
                                        <p>Same day resolution</p>
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

export default Team;