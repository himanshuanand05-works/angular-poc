import React, { useEffect, useState } from 'react';
import $ from 'jquery';

const MousePointer = () => {
  const [pointerStyle, setPointerStyle] = useState('');

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX + 'px';
      const mouseY = event.clientY + 'px';
      document.getElementById('mouse-pointer').style.left = mouseX;
      document.getElementById('mouse-pointer').style.top = mouseY;
    };

    const handleMouseEnter = (style) => {
      setPointerStyle(style);
    };

    const handleMouseLeave = () => {
      setPointerStyle('');
    };

    document.getElementsByTagName('body')[0].addEventListener('mousemove', handleMouseMove);

    $('.funfact-eight, .subscribe-one.home-16, .clients-one.home-7').on('mouseenter', function () {
      handleMouseEnter('black');
    }).on('mouseleave', function () {
      handleMouseLeave();
    });

    $('.pointer-large, .owl-prev, .owl-next, a.theme-btn').on('mouseenter', function () {
      handleMouseEnter('large');
    }).on('mouseleave', function () {
      handleMouseLeave();
    });

    $('a').on('mouseenter', function () {
      handleMouseEnter('transparent');
    }).on('mouseleave', function () {
      handleMouseLeave();
    });

    $('.pointer-right, .banner-carousel, .two-item-carousel, .portfolio-carousel').on('mouseenter', function () {
      handleMouseEnter('right');
    }).on('mouseleave', function () {
      handleMouseLeave();
    });

    return () => {
      document.getElementsByTagName('body')[0].removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`mouse-pointer ${pointerStyle}`} id="mouse-pointer">
      <div className="icon"><i className="icon-06"></i><i className="icon-05"></i></div>
    </div>
  );
};

export default MousePointer;
