import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image3 from "../../assets/img/pics5.jpg";
import image4 from "../../assets/img/pics8.jpg";
import image5 from "../../assets/img/pics9.jpg";
export default function Coursel() {
  return (
    <div className="relative">
      <div className="absolute w-full h-20 bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        dynamicHeight={false}
      >
        <div>
          <img className="h-[70vh]" src={`${image3}`} alt="" />
          <p>Legend 1</p>
        </div>
        <div>
          <img className="h-[70vh]" src={`${image4}`} alt="" />
          <p>Legend 2</p>
        </div>
        <div>
          <img className="h-[70vh] " src={`${image5}`} alt="" />
          <p>Legend 1</p>
        </div>
      </Carousel>
    </div>
  );
}
