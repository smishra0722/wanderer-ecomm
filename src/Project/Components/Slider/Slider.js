import React, { useState } from "react";
import "../Slider/style.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
function Slider() {
  return (
    <div className="silder__main">
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="hd2.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="h3.jpg" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
