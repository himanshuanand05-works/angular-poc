import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import g1 from "../assets/images/resource/page-title-bg.jpg";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <section className="page__title p_relative">
        <div className="bg-layer" style={{ backgroundImage: `url(${g1})` }}></div>
        <div className="auto-container">
            <div className="content__box p_relative">
                <ul className="bread__crumb">
                    <li><Link to="/">Home</Link></li>
                    {pathnames.map((name, index) => (
                    <li key={index}>
                        <span> -</span>
                        <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>{name}</Link>
                    </li>
                    ))}
                </ul>
                <h1 className="title">{pathnames.length > 0 ? pathnames[pathnames.length - 1] : 'Home'}</h1>
            </div>
        </div>
    </section>
  );
};

export default BreadCrumb;
