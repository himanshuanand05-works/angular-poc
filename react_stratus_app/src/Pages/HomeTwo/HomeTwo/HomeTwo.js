import React from 'react';
import HeaderTwo from '../../Header/HeaderTwo';
import FooterTwo from '../../Footer/FooterTwo';
import Blog from '../../HomeOne/Blog/Blog';
import Banner from '../../HomeTwo/Banner/Banner';
import About from '../../HomeTwo/About/About';
import Service from '../../HomeTwo/Service/Service';
import Choose from '../../HomeTwo/Choose/Choose';
import Brand from '../../HomeTwo/Brand/Brand';
import Pricing from '../../HomeTwo/Pricing/Pricing';
import Accomplised from '../../HomeTwo/Accomplised/Accomplised';
import Portfolio from '../../HomeTwo/Portfolio/Portfolio';
import { pageTitle } from '../../PageTitle';


const HomeOne = () => {
    pageTitle('Home Two');
    return (
        <>
            <div className="home__two">
                <HeaderTwo></HeaderTwo>
                <Banner></Banner>
                <About></About>
                <Service></Service>
                <Choose></Choose>
                <Brand></Brand>
                <Accomplised></Accomplised>
                <Pricing></Pricing>
                <Portfolio></Portfolio>
                <Blog></Blog>
                <FooterTwo></FooterTwo>
            </div>
        </>
    );
};

export default HomeOne;