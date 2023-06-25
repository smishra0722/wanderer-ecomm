import React, { useEffect, useState } from "react";
import "../Footer/style.css";
import "@fortawesome/fontawesome-free/js/all.js";
function Footer() {
  const [sub, setSub] = useState("");

  function isEmail(emailString) {
    var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailString.match(regEx) != null;
  }

  console.log(sub);
  return (
    <>
      <div className="footer-main " id="footer">
        <div className="footer-detail">
          <div className="footer-text">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h4>Find Us</h4>
              <span>Nallsopara West-401203</span>
            </div>
          </div>
          <div className="footer-text">
            <i className="fa-solid fa-phone fas"></i>
            <h4>Call Us</h4>
            <span>+917715945071</span>
          </div>
          <div className="footer-text">
            <i className="fa-solid fa-envelope fas"></i>
            <h4>Email Us</h4>
            <span>ankushskingh086@gmail.com</span>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-about">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore dolore deserunt tempore non nihil tenetur alias ratione
              vitae saepe nobis.
            </p>
            <h3>Follow Us</h3>
            <div className="footer-social">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-google-plus-g"></i>
            </div>
          </div>

          <div className="footer-all-links">
            <h4>Useful Links</h4>
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Contacts</a>
            <a href="">Our Services</a>
            <a href="">Contact Us</a>
          </div>

          <div className="footer-sub">
            <h3>Subscribe</h3>
            <p>Don't miss to subscribe our new feeds.</p>
            <div className="footer-sub-btn">
              <input
                type="text"
                placeholder="Email Address"
                required
                value={sub}
                onChange={(e) => setSub(e.target.value)}
              />
              <button
                onClick={
                  console.log("Hello")
                  // () => isEmail(sub)
                }
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
