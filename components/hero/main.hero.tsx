import React from "react";
import Demo from "../demo/Demo.main";
import ImageCarouselHero from "./swiper.hero";

const heroCardData = [
  {
    text: "Competitions",
    img: "/hero/comp.png",
  },
  {
    text: "learning Kits",
    img: "/hero/lkit.png",
  },
  {
    text: "learning Kits",
    img: "/hero/lkit.png",
  },
  {
    text: "learning Kits",
    img: "/hero/lkit.png",
  },
];

export default function Hero() {
  return (
    <div className="relative space-y-24 my-12 ">
      <div className="flex justify-evenly">
        {heroCardData?.map((item, index) => {
          return (
            <div className="rounded-2xl bg-white shadow-[2px_2px_3px_3px_#B0B3BB] ">
              <img
                src={item.img}
                className="rounded-2xl h-[15rem] object-cover"
              />
              <h1 className="text-xl font-semibold text-center p-3">{item.text} </h1>
            </div>
          );
        })}
      </div>

      <div className="lg:flex   justify-between  lg:px-12 gap-">
        <div className="lg:w-1/3    lg:mt-0 p-10 rounded-2xl  flex flex-col space-y-4  ">
          <p className="lg:text-lg  font-semibold text-justify leading-2  ">
            {" "}
            <span className="font-bold">BlackBird RobotiX</span> is an innovative educational ecosystem that is
            recommended by teachers and embraced by students for its innovative
            learning and skill development program. Courses are designed for
            educators of all ages with hi-tech equipment's to cultivate 21st
            century skills like teamwork, problem-solving ability, creativity,
            thinking and analysis, innovation, and so on.
          </p>
         
        </div>
        {/* <div className="lg:w-3/5  relative  flex-col justify-center items-center  lg:mt-0">
          <ImageCarouselHero />
        </div> */}
        <video src="/hero/sample.mp4" autoPlay loop controls  className="w-3/5 rounded-2xl"/>
      </div>
    </div>
  );
}
