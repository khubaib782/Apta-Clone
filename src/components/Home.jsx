import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CardList from "./Content";
import Icons from "./Icons";
import Box from "./Box";
import Reviews from "./Reviews";
import BannerTwo from "./BannerTwo";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Banner />
      <Icons />
      <CardList />
      <Box />
      <Reviews />
      <BannerTwo />
      <Footer />
    </div>
  );
};

export default Home;
