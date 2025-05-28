import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import authorImg1 from "../../../assets/images/resource/author-01.png";
import authorImg2 from "../../../assets/images/resource/author-02.png";
import authorImg3 from "../../../assets/images/resource/author-03.png";
import authorImg4 from "../../../assets/images/resource/author-04.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      authorImg: authorImg1,
      authorName: 'Wade Warren',
      authorRole: 'Manager',
      rating: [1, 2, 3, 4, 5],
      text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
    },
    {
      authorImg: authorImg2,
      authorName: 'Wade Warren',
      authorRole: 'Manager',
      rating: [1, 2, 3, 4, 5],
      text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
    },
    {
      authorImg: authorImg3,
      authorName: 'Wade Warren',
      authorRole: 'Manager',
      rating: [1, 2, 3, 4, 5],
      text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
    },
    {
      authorImg: authorImg4,
      authorName: 'Wade Warren',
      authorRole: 'Manager',
      rating: [1, 2, 3, 4, 5],
      text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
    },
    {
      authorImg: authorImg1,
      authorName: 'Wade Warren',
      authorRole: 'Manager',
      rating: [1, 2, 3, 4, 5],
      text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
    },
    {
        authorImg: authorImg2,
        authorName: 'Wade Warren',
        authorRole: 'Manager',
        rating: [1, 2, 3, 4, 5],
        text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
      },
      {
        authorImg: authorImg3,
        authorName: 'Wade Warren',
        authorRole: 'Manager',
        rating: [1, 2, 3, 4, 5],
        text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
      },
      {
        authorImg: authorImg4,
        authorName: 'Wade Warren',
        authorRole: 'Manager',
        rating: [1, 2, 3, 4, 5],
        text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
      },
      {
        authorImg: authorImg1,
        authorName: 'Wade Warren',
        authorRole: 'Manager',
        rating: [1, 2, 3, 4, 5],
        text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
      },
      {
          authorImg: authorImg2,
          authorName: 'Wade Warren',
          authorRole: 'Manager',
          rating: [1, 2, 3, 4, 5],
          text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
        },
        {
          authorImg: authorImg3,
          authorName: 'Wade Warren',
          authorRole: 'Manager',
          rating: [1, 2, 3, 4, 5],
          text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
        },
        {
          authorImg: authorImg4,
          authorName: 'Wade Warren',
          authorRole: 'Manager',
          rating: [1, 2, 3, 4, 5],
          text: 'Our technologies are designed to seamlessly integrate with your existing systems, minimizing disruption and maximizing productivity.',
        },
    
  ];

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      preloadImages: false,
			loop: true,
			grabCursor: true,
			centeredSlides: false,
			resistance: true,
			resistanceRatio: 0.6,
			slidesPerView: 4,
			speed: 400,
			spaceBetween: 45,
			parallax: false,
			effect: "slide",
			active: 'active',
			autoplay: {
				delay: 800000000000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: '.button_next',
				prevEl: '.button_prev',
			},
			pagination: {
				el: '.slider__pagination',
				clickable: true,
			},
			breakpoints: {
        1800: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 1,
        }, 
        320: {
          slidesPerView: 1,
        }, 
      }
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="testimonial__section p_relative">
      <div className="auto-container">
        <div className="testimonial__top">
          <div className="title__data">
            <div className="sub__title">
              <h4>Testimonial </h4>
            </div>
            <div className="title">
              <h2>What Our Client Says</h2>
            </div>
          </div>
          <div className="swiper__button">
            <div className="button_next"><i className="icon-06"></i></div>
            <div className="button_prev"><i className="icon-05"></i></div>
          </div>
        </div>
      </div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="swiper-slide testimonials__block__one">
                <div className="test__bg"></div>
                <div className="testimonials__info">
                    <div className="authore__img">
                        <figure className="image">
                        <img src={testimonial.authorImg} alt={testimonial.authorName} />
                        </figure>
                    </div>
                    <div className="authore__rating">
                        <ul>
                        {testimonial.rating.map((_, i) => (
                            <li key={i}><i className="icon-13"></i></li>
                        ))}
                        </ul>
                    </div>
                    <div className="authore__info">
                        <h5>{testimonial.authorName}</h5>
                        <p>{testimonial.authorRole}</p>
                    </div>
                    <div className="testimonials__text">
                        <p>{testimonial.text}</p>
                    </div>
                </div>
                <div className="quote">
                    <span className="icon-03"></span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
