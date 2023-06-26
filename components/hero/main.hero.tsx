import React from "react";
import Demo from "../demo/Demo.main";
import ImageCarouselHero from "./swiper.hero";

export default function Hero() {
  return (
    <div className="relative ">
    
      <div className="lg:flex  lg:min-h-screen justify-between items-center  lg:px-9 gap-20 bg-[#FAF9F6]">
        <div className="lg:w-3/5 relative  flex-col justify-center items-center mt-32 lg:mt-0">
          {/* <img
            src="/logo.png"
            className="absolute z-20  top-1/2  rounded-xl lg:h-64 h-32  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          /> */}
          <ImageCarouselHero />
        </div>
        <div className="lg:w-1/3 mt-12 lg:mt-0">
          <Demo />
        </div>
      </div>
      <div className=" w-full justify-evenly flex items-center px-12 gap-4">
        {/* <img src="/hero/hero.png" className="w-2/5 bg-theme p-1 rounded-2xl "/> */}
        {/* <div className="typewriter">

      <h1 className="lg:text-5xl font-semibold text-font1  ">
        Be Innovative <br></br> Be Imaginative <br></br> Be Inventive <br></br>The 3 pillars of success
      </h1>
      <a
        href=""
        target="_blank"
        className=" text-font1 lg:mt-6 "
        rel="noreferrer"
      >
        -by BlackBird India
      </a>
      </div> */}
      </div>
    </div>
  );
}
