import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, News, Page, Services } from "./Menu";
import DropDown from "./DropDown";
import Logo2 from "../../assets/images/favicon.svg";
import Logo from "../../assets/images/logo.png";

export default function Header() {
    const [mobileToggle, setMobileToggle] = useState(false);

    return (
        <>
            <header className="main-header header__three">
            <div className="header-lower">
                <div className="outer-box">
                    <div className="logo-box">
                        <figure className="logo"><Link to="/"><img src={Logo2} alt="" /></Link></figure>
                    </div>
                    <div className= {mobileToggle ? "mobile-menu-visible" : "mobile-menus"} >
                    <div className="menu-area clearfix">
                        <div className="mobile-nav-toggler" onClick={() => setMobileToggle(!mobileToggle)}>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix home-menu">
                                    <li className=" dropdown"><Link to="#">Home</Link>
                                        <ul>
                                            <li><Link to="/">Home One </Link></li>
                                            <li><Link to="index-2.html">Home Two </Link></li>
                                            <li><Link to="index-3.html">Home Three </Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="about.html">About  </Link></li>
                                    <li className="dropdown"><Link to="#">Services </Link>
                                        <ul>
                                            <li><Link to="services.html">Services </Link></li>
                                            <li><Link to="service-details.html">Services Details</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link to="#">Page</Link>
                                        <ul>
                                            <li className="dropdown"><Link to="#">Projects </Link>
                                                <ul>
                                                    <li><Link to="projects.html">Projects </Link></li>
                                                    <li><Link to="projects-details.html">Projects Details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="pricing.html">Pricing</Link></li>
                                            <li><Link to="team.html">Team</Link></li>
                                            <li><Link to="testimonial.html">Testimonial</Link></li>
                                            <li><Link to="404.html">404 Page</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link to="#">Blog</Link>
                                        <ul>
                                            <li><Link to="blog.html">Blog </Link></li>
                                            <li><Link to="blog-details.html">Blog Details</Link></li>
                                        </ul>
                                    </li>  
                                    <li><Link to="/contact">Contact</Link></li> 
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="mobile-menu">
                        <div className="menu-backdrop"></div>
                        <div className="close-btn" onClick={() => setMobileToggle(!mobileToggle)}><i className="icon-fa-times"></i></div>
                        
                        <nav className="menu-box">
                            <div className="nav-logo">
                                <Link to="/"><img src={Logo} alt="" title="" /></Link>
                            </div>
                            <div className="menu-outer">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix home-menu">
                                        <li className="dropdown" >
                                            <NavLink to="/">Home</NavLink>
                                            <DropDown>
                                                <ul>
                                                <Home />
                                                </ul>
                                            </DropDown>
                                        </li>
                                        <li >
                                            <NavLink to="/about">About</NavLink>
                                        </li>
                                        <li className="dropdown" >
                                            <NavLink to="/services">Services</NavLink>
                                            <DropDown>
                                                <ul>
                                                <Services />
                                                </ul>
                                            </DropDown>
                                        </li>
                                        <li className="dropdown" >
                                            <NavLink to="/page">Page</NavLink>
                                            <DropDown>
                                                <ul>
                                                <Page />
                                                </ul>
                                            </DropDown>
                                        </li>
                                        <li className="dropdown" >
                                            <NavLink to="/blog">Blog</NavLink>
                                            <DropDown>
                                                <ul>
                                                <News />
                                                </ul>
                                            </DropDown>
                                        </li>  
                                        <li >
                                            <NavLink to="/contact">Contact</NavLink>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="contact-info">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li>Chicago 12, Melborne City, USA</li>
                                    <li><Link to="tel:+8801682648101">+88 01682648101</Link></li>
                                    <li><Link to="mailto:info@example.com">info@example.com</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    </div>
                    <div className="banner__media_two">
                        <ul>
                            <li><Link to="#">FB </Link></li>
                            <li><Link to="#">TW </Link></li>
                            <li><Link to="#">LI </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}
