import React from 'react';
import HeaderThree from '../../Header/HeaderThree';
import FooterThree from '../../Footer/FooterThree';
import Banner from '../../HomeThree/Banner/Banner';
import About from '../../HomeThree/About/About';
import Choose from '../../HomeThree/Choose/Choose';
import Portfolio from '../../HomeThree/Portfolio/Portfolio';
import Accomplised from '../../HomeThree/Accomplised/Accomplised';
import Pride from '../../HomeThree/Pride/Pride';
import Consultation from '../../HomeThree/Consultation/Consultation';
import Pricing from '../../HomeThree/Pricing/Pricing';
import ServiceForm from '../../HomeThree/ServiceForm/ServiceForm';
import { pageTitle } from '../../PageTitle';


const HomeOne = () => {
    pageTitle('DataMatrix');
    return (
        <>  
            <div className='home__three'>
                <HeaderThree></HeaderThree>
                <Banner></Banner>
                <About></About>
                <Choose></Choose>
                <Portfolio></Portfolio>
                <Accomplised></Accomplised>
                <Pride></Pride>
                <Consultation></Consultation>
                <Pricing></Pricing>
                <ServiceForm></ServiceForm>
                <FooterThree></FooterThree>
            </div>
        </>
    );
};

export default HomeOne;