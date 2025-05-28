import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, News, Page, Services } from "./Menu";
import DropDown from "./DropDown";
import Logo from "../../assets/images/logo.png";

export default function Header({ variant }) {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileToggle, setMobileToggle] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);

    return (
        <>
            <header className={`main-header header__style__one two ${ variant ? variant : "" } header__sticky ${isSticky ? "fixed-header" : ""}`}>
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo">
                                    <Link to="/"><img src={Logo} alt="" /></Link>
                                </figure>
                            </div>
                            <div className="menu-area clearfix">
                                <div className= {mobileToggle ? "mobile-menu-visible" : "mobile-menus"} >
                                    <div className="mobile-nav-toggler" onClick={() => setMobileToggle(!mobileToggle)}>
                                        <i className="icon-bar"></i>
                                        <i className="icon-bar"></i>
                                        <i className="icon-bar"></i>
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
                                <nav className="main-menu navbar-expand-md navbar-light">
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
                                </nav>    
                            </div>
                            <div className="btn-box">
                                <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Discuses</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><Link to="/"><img src={Logo} alt="" /></Link></figure>
                            </div>
                            <div className="menu-area clearfix">
                                <nav className="main-menu clearfix">
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
                                </nav>
                            </div>
                            <div className="btn-box">
                                <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Discuses</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}
