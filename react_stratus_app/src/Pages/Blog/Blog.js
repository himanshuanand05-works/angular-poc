import React from 'react';
import { pageTitle } from '../PageTitle';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';
import BreadCrumb  from '../BreadCrumb';
import { Link } from 'react-router-dom';
import news1 from "../../assets/images/news/news-1.jpg";
import news2 from "../../assets/images/news/news-2.jpg";
import news3 from "../../assets/images/news/news-3.jpg";
import news4 from "../../assets/images/news/news-4.jpg";
import news5 from "../../assets/images/news/news-5.jpg";
import news6 from "../../assets/images/news/news-6.jpg";


const Blog = () => {
      pageTitle('Blog');
      const blogData = [
        {
          id: 1,
          title: '4 Cybersecurity Takeaways from China’s Largest Data Breach',
          date: '26 July 2023',
          author: 'Admin',
          image: news1,
          href: '/blog-details',
          data_aos_delay: '00ms',
        },
        {
          id: 2,
          title: '4 Cybersecurity Takeaways from China’s Largest Data Breach',
          date: '26 July 2023',
          author: 'Admin',
          image: news2,
          href: '/blog-details',
          data_aos_delay: '100ms',
        },
        {
          id: 3,
          title: '4 Cybersecurity Takeaways from China’s Largest Data Breach',
          date: '26 July 2023',
          author: 'Admin',
          image: news3,
          href: '/blog-details',
          data_aos_delay: '200ms',
        },
        {
          id: 4,
          title: '4 Cybersecurity Takeaways from China’s Largest Data Breach',
          date: '26 July 2023',
          author: 'Admin',
          image: news4,
          href: '/blog-details',
          data_aos_delay: '200ms',
        },
        {
          id: 5,
          title: '4 Cybersecurity Takeaways from China’s Largest Data Breach',
          date: '26 July 2023',
          author: 'Admin',
          image: news5,
          href: '/blog-details',
          data_aos_delay: '200ms',
        },
        {
          id: 6,
          title: '4 Cybersecurity Takeaways from China’s Largest Data Breach',
          date: '26 July 2023',
          author: 'Admin',
          image: news6,
          href: '/blog-details',
          data_aos_delay: '200ms',
        },
      ];
    
  return (
    
    <>
        <HeaderOne></HeaderOne>
        <BreadCrumb></BreadCrumb>
        <div className="blog__page p_relative see__pad">
            <div className="auto-container">
                <div className="row">
                    {blogData.map((item, id)=>(
                        <div className="col-lg-4 col-md-6 col-sm-12 news__block" key={id}>
                            <div className="news___block wow slideInUp animated animated" data-wow-delay={item.data_aos_delay} data-wow-duration="1500ms">
                                <div className="inner-box p_relative">
                                    <div className="image-box p_relative d_block">
                                        <figure className="image p_relative d_block">
                                            <Link to={item.href}><img src={item.image} alt="" /></Link>
                                        </figure>
                                        <div className="post__date">
                                            <ul>
                                                <li> <i className="icon-15"></i>{item.date}</li>
                                                <li className="two"></li>
                                                <li><i className="icon-09"></i> {item.author}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lower___content p_relative">
                                        <h4><Link to={item.href}>{item.title}</Link></h4>
                                        
                                        <div className="btn__box__two">
                                            <Link to={item.href} className="theme__btn__two"><i className="icon-02"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>
        <FooterOne></FooterOne>
    </>
  );
};

export default Blog;
