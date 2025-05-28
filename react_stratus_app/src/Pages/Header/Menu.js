import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Home = () => (
    <Fragment>
        <li><Link to="/">Home One</Link></li>
        <li><Link to="/home-two">Home Two</Link></li>
        <li><Link to="/home-three">Home Three</Link></li>
    </Fragment>
);
export const Services = () => (
    <Fragment>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/services-details">Services Details</Link></li>
    </Fragment>
);
export const Page = () => (
    <Fragment>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/projects-details">Projects Details</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/testimonial">Testimonial</Link></li>
        <li><Link to="/error">404 Page</Link></li>
    </Fragment>
);
export const News = () => (
    <Fragment>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/blog-details">Blog Details</Link></li>
    </Fragment>
);
