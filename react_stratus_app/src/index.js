import React, { useEffect } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'swiper/css';
import "swiper/css/pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import './assets/scss/Style.scss';
import MousePointer from './Pages/MousePointer';
import { ParallaxProvider } from "react-scroll-parallax";

const RootComponent = () => {
  useEffect(() => {
    const handlePreloader = () => {
      if ($('.loader-wrap').length) {
        $('.loader-wrap').delay(1000).fadeOut(500);
      }
    };

    const createPreloaderRing = () => {
      $(".preloader-ring").each(function () {
        let text = $(this).text(),
          textArr = text.split(''),
          a = 0;
        $(this).html('');
        for (let i = 0; i <= 30; i++) {
          if (!textArr[i] || textArr[i] === " ") {
            textArr[i] = "";
          }
          $(this).append(
            '<div class="preloader-sector" style="transform: rotateY(' + a + 'deg) translateZ(160px)">' + textArr[i] + '</div>'
          );
          a = a + 12;
        }
      });
    };

    handlePreloader();
    createPreloaderRing();
  }, []);

  return (
    <>
      <div className="boxed_wrapper">
      <MousePointer />
        <div className="loader-wrap">
          <div className="hendel__preloder">
            <div className="preloader">
              <div className="preloader-ring">datamatrix datamatrix datamatrix</div>
              <div className="preloader-ring">datamatrix datamatrix datamatrix</div>
            </div>
          </div>
        </div>
        <React.StrictMode>
          <ParallaxProvider>
            <App />
          </ParallaxProvider>
        </React.StrictMode>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
reportWebVitals();
