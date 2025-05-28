import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeOne from "./Pages/HomeOne/HomeOne/HomeOne";
import HomeTwo from "./Pages/HomeTwo/HomeTwo/HomeTwo";
import HomeThree from "./Pages/HomeThree/HomeThree/HomeThree";
import About from "./Pages/About/About";
import ScrollTop from "./Pages/ScrollTop/ScrollTop";
import Services from "./Pages/Services/Services";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import ContentMarketing from "./Pages/Services/ContentMarketing";
import DigitalMarketing from "./Pages/Services/DigitalMarketing";
import SeoMarketing from "./Pages/Services/SeoMarketing";
import UiDesign from "./Pages/Services/UiDesign";
import Projects from "./Pages/Projects/Projects";
import ProjectsDetails from "./Pages/Projects/ProjectsDetails";
import Pricing from "./Pages/Pricing/Pricing";
import Team from "./Pages/Team/Team";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Error from "./Pages/Error/Error";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/Blog/BlogDetails";
import Contact from "./Pages/Contact/Contact";
import WOW from 'wowjs';

function App() {
  
  useEffect(() => {
    new WOW.WOW({
      mobile: false
    }).init();
  }, []);
    
  return (
    <>
        <Router><Routes>
            <Route path="/" element={<HomeOne />} />
            <Route path="/home-two" element={<HomeTwo/>} />
            <Route path="/home-three" element={<HomeThree/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/services-details" element={<ServicesDetails/>} />
            <Route path="/content-marketing" element={<ContentMarketing/>} />
            <Route path="/digital-marketing" element={<DigitalMarketing/>} />
            <Route path="/seo-marketing" element={<SeoMarketing/>} />
            <Route path="/ui-ux-design" element={<UiDesign/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects-details" element={<ProjectsDetails/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/testimonial" element={<Testimonial/>} />
            <Route path="/error" element={<Error/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog-details" element={<BlogDetails/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes></Router>
        <ScrollTop/>

    </>
  )
}

export default App
