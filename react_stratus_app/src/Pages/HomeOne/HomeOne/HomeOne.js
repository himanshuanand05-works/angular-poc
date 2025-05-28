import React from 'react';
import HeaderOne from '../../Header/HeaderOne';
import FooterOne from '../../Footer/FooterOne';
import BannerOne from '../../HomeOne/BannerOne/BannerOne';
import Service from '../../HomeOne/Service/Service';
import AboutOne from '../../HomeOne/AboutOne/AboutOne';
import Choose from '../../HomeOne/Choose/Choose';
import Team from '../../HomeOne/Team/Team';
import Testimonial from '../../HomeOne/Testimonial/Testimonial';
import Brand from '../../HomeOne/Brand/Brand';
import Blog from '../../HomeOne/Blog/Blog';
import { pageTitle } from '../../PageTitle';


const HomeOne = () => {
    pageTitle('DataMatrix');
    return (
        <>
            <HeaderOne></HeaderOne>
            <BannerOne></BannerOne>
            <Service></Service>
            <AboutOne></AboutOne>
            <Choose></Choose>
            <Team></Team>
            <Testimonial></Testimonial>
            <Brand></Brand>
            <Blog></Blog>
            <FooterOne></FooterOne>
        </>
    );
};

export default HomeOne;