import React from "react";
import styled from "styled-components";
import "../Card/style.css";
function Hero() {
  // let counter = 1;
  // setInterval(function () {
  //   document.getElementById("radio" + counter).checked = true;
  //   if (counter > 6) {
  //     counter++;
  //   }
  //   counter = 1;
  // }, 5000);
  return (
    <>
      {/* <Slider> */}
      <div className="slider-main">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <div className="slide first">
              <img src="h3.jpg" alt="image" />
            </div>
            <div className="slide second">
              <img src="hd2.jpg" alt="image" />
            </div>
            <div className="slide third">
              <img src="sale2.jpg" alt="image" />
            </div>
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
            </div>
          </div>
          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
          </div>
        </div>
      </div>
      {/* </Slider> */}
    </>
  );
}

export default Hero;
