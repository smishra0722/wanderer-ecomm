import React, { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import Navbar from "../../Components/Navbar/Navbar";
import Loader from "../../Components/Loader/Loader";
import { ApiContext } from "../../ApiContext/AllContextApi";
import Hero from "../../Components/Card/Hero";
import Footermain from "../../Components/Footer/Footermain";
import NavbarNew from "../../Components/Navbar Main/NavbarNew";
import Slider from "../../Components/Slider/Slider";
import Blog from "../Blog/Blog";
import BlogCArd from "../Blog/BlogCArd";
import Test from "../../Components/TestCompo/Test";
function Home() {
  const { setLoading, loading } = useContext(ApiContext);
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarNew />
      <Slider />
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Hero /> */}
          <Card />
        </>
      )}
      <BlogCArd />
      {/* <NavbarNew /> */}

      <Footermain />
    </div>
  );
}

export default Home;
