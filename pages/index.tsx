


import About from "@/components/aboutus/main.aboutus";
import Contact from "@/components/contactus/main.contactus";
import Courses from "@/components/courses/main.courses";
import Header from "@/components/header/main.navbar";
import Hero from "@/components/hero/main.hero";
import React from "react";


const Home = () => {
  return (
    <div className="bg-[#FAF9F6]">
      <Header />
      <div className="px-4 font-quicksand space-y-12 my-12 bg-[#FAF9F6] ">
        <Hero />
        <Courses/>
        <About/>
        
      </div>
      <Contact/>
    </div>
  );
};

export default Home;
