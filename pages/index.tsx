
import Header from "../components/header/Navbar.main";
import Hero from "../components/hero/Hero.main";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-4">
        <Hero />
      </div>
    </>
  );
};

export default Home;
