


import Courses from "@/components/courses/main.courses";
import Header from "@/components/header/main.navbar";
import Hero from "@/components/hero/main.hero";
import React from "react";


const Home = () => {
  return (
    <>
      <Header />
      <div className="px-4 font-quicksand space-y-12 my-12">
        <Hero />
        <Courses/>
      </div>
    </>
  );
};

export default Home;
