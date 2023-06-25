import React, { useState, useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import BlogApi from "./BlogApi";
import NavbarNew from "../../Components/Navbar Main/NavbarNew";
import Footermain from "../../Components/Footer/Footermain";
import { ApiContext } from "../../ApiContext/AllContextApi";
function Blog() {
  const { blog, setBlog } = useContext(ApiContext);

  return (
    <>
      <NavbarNew />
      <div className="blog-conatiner">
        <div className="blog-sub-container">
          <div className="title">
            <h5>BLOG</h5>
            <h1>Trendy News Feed</h1>
          </div>
          <div className="blog-column-card">
            {blog.map((curElem) => {
              const { id, name, image, description, date } = curElem;
              return (
                <div className="blog-card" key={id}>
                  <img src={image} />
                  <div className="panel">
                    <span className="date">{date}</span>
                    <p>{description}</p>
                    <span className="breaker"></span>
                    <h3>{name}</h3>
                    <a href="#!">
                      Know <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footermain />
    </>
  );
}

export default Blog;
