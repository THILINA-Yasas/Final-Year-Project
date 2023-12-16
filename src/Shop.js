import React from "react";
import aa from "./images/1.jpg";
import ab from "./images/2.jpg";
import ac from "./images/3.jpg";
import ad from "./images/4.png";
import { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Slider from "react-slick";
import "./Container.css";

const images = [aa, ab, ac, ad];

function Shop() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowRightIcon fontSize="inherit" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowLeftIcon fontSize="inherit" />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="home">
      <div className="hometxt">Shop</div>

      <div className="home1">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={"slide1"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Shop;
