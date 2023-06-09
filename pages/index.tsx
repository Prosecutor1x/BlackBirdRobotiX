


import About from "@/components/aboutus/main.aboutus";
import Contact from "@/components/contactus/main.contactus";
import Courses from "@/components/courses/main.courses";
import Demo from "@/components/demo/Demo.main";
import Header from "@/components/header/main.navbar";
import Hero from "@/components/hero/main.hero";
import React from "react";


const Home = () => {
  return (
    <div className="bg-[#FAF9F6]">
      <Header />
      <div className="px-4 font-quicksand  bg-[#FAF9F6] space-y-8">
        <div className="relative ">
          <Hero />
          {/* <img
        src="/hero/Tile.png"   
        className="absolute  -bottom-36 h-[55%]  left-1/2 transform -translate-x-1/2 lg:block hidden "  
      /> */}
          {/* <img
        src="/hero/Tile.png"   
        className=" h-[55%]  lg:hidden "  
      /> */}
        </div>

        <Courses />
        <div className="flex justify-center items-center pb-12 w-screen ">

        <Demo />
        </div>
        <About />
      </div>

      <Contact />
    </div>
  );
};

export default Home;
