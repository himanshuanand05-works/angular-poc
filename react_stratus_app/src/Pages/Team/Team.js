import React from 'react';
import { pageTitle } from '../PageTitle';
import BreadCrumb  from '../BreadCrumb';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';
import { Link } from 'react-router-dom';
import Wow from 'react-wow';
import team1 from "../../assets/images/resource/team-01.png";
import team2 from "../../assets/images/resource/team-02.png";
import team3 from "../../assets/images/resource/team-03.png";
import team4 from "../../assets/images/resource/team-04.png";
import team5 from "../../assets/images/resource/team-05.png";
import team6 from "../../assets/images/resource/team-06.png";
import team7 from "../../assets/images/resource/team-07.png";
import team8 from "../../assets/images/resource/team-08.png";


const Projects = () => {
      pageTitle('Projects');
      const teamData = [
        {
          id: 1,
          name: 'Annette Black',
          image: team1,
          data_aos_delay: '00ms',
        },
        {
          id: 2,
          name: 'Kristin Watson',
          image: team2,
          data_aos_delay: '100ms',
        },
        {
          id: 3,
          name: 'Devon Lane',
          image: team3,
          data_aos_delay: '200ms',
        },
        {
          id: 4,
          name: 'Kristin Watson',
          image: team4,
          data_aos_delay: '300ms',
        },
        {
          id: 5,
          name: 'Puspa Vaw',
          image: team5,
          data_aos_delay: '00ms',
        },
        {
          id: 6,
          name: 'Tomy Debs',
          image: team6,
          data_aos_delay: '100ms',
        },
        {
          id: 7,
          name: 'Dev Kow Tson',
          image: team7,
          data_aos_delay: '200ms',
        },
        {
          id: 8,
          name: 'Jon Watson',
          image: team8,
          data_aos_delay: '300ms',
        },
      ];
  return (
    
    <>
        <HeaderOne></HeaderOne>
        <BreadCrumb></BreadCrumb>
        <div className="team__page p_relative see__pad">
            <div className="auto-container">
                <div className="row">
                    {teamData.map((item, id)=>(
                        <div className="col-lg-3 col-md-6 col-sm-12" key={id}>
                            <Wow  className="team__block wow fadeInUp animated" data-wow-delay={item.data_aos_delay} data-wow-duration="1500ms">
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
                            </Wow >
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <FooterOne></FooterOne>
    </>
  );
};

export default Projects;
