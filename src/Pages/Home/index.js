import React from "react";
import Slider from "react-slick";

const Home = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
     <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/Jack_and_Jones_Tommy_and_more_web_2f62a7dc9f/Jack_and_Jones_Tommy_and_more_web_2f62a7dc9f.png"
            className="w-100"
            alt="Banner 1"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/J_and_J_web_d8ab3c4dbb/J_and_J_web_d8ab3c4dbb.png"
            className="w-100"
            alt="Banner 2"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/Puma_web_fd5eb32ca8/Puma_web_fd5eb32ca8.png"
            className="w-100"
            alt="Banner 3"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/casio_web_6a470e70bf/casio_web_6a470e70bf.png"
            className="w-100"
            alt="Banner 4"
          />
        </div>
      </Slider>
    </div>

  );
};

export default Home;
