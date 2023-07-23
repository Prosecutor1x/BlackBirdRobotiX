import React from "react";
import Demo from "../demo/Demo.main";
import ImageCarouselHero from "./swiper.hero";

const heroCardData = [
  {
    text: "Competitions",
    img: "/hero/comp.png",
  },
  {
    text: "Events",
    img: "/hero/event.png",
  },
  {
    text: "Workshops",
    img: "/hero/workshop.png",
  },
  {
    text: "learning Kits",
    img: "/hero/lkit.png",
  },
];

export default function Hero() {
  return (
    <div className="relative space-y-24 my-12 ">
      <div className="">
   
        <div className=" text-black font-quicksand top-1/3 left-20 lg:hidden text-center">
          {" "}
          <h1 className="text-2xl leading-tight font-semibold ">
            Skill Developement Training and Innovative Learning with
            Robotics,AI,Drone and STEM
          </h1>
          <p className="my-2 ">
            Blackbird RobotiX is revolutionizing the way of learning by
            developing 21st-century skills and provides for the students to
            nurture their curiosity , creativity, innovation and immagination to
            shape next generation go Young Innovators.
          </p>{" "}
          <button className="px-4 py-0.5 bg-[#FF0000] rounded-2xl mx-3 my-2 font-bold border-white text-white border-2 active:opacity-90 active:scale-95">
            Watch ▶
          </button>
          <button className="px-3 py-0.5 bg-[#FFFF00] rounded-2xl mx-4 my-2 font-bold border-black border-2 text-black active:opacity-90 active:scale-95">
            Book Demo
          </button>
        </div>
      </div>
      <div className="lg:flex justify-evenly space-y-4 ">
        {heroCardData?.map((item, index) => {
          return (
            <div className="rounded-2xl bg-white shadow-[2px_2px_3px_3px_#B0B3BB] ">
              <img
                src={item.img}
                className="rounded-2xl lg:h-[15rem]    object-cover"
              />
              <h1 className="text-xl font-semibold text-center p-3">
                {item.text}{" "}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="lg:flex   justify-between  lg:px-12 gap-">
        <div className="lg:w-1/3    lg:mt-0 lg:p-10  rounded-2xl  flex flex-col space-y-4  ">
          <p className="lg:text-lg  font-semibold text-justify leading-2 mb-4 ">
            {" "}
            <span className="font-bold">BlackBird RobotiX</span> is an
            innovative educational ecosystem that is recommended by teachers and
            embraced by students for its innovative learning and skill
            development program. Courses are designed for educators of all ages
            with hi-tech equipment's to cultivate 21st century skills like
            teamwork, problem-solving ability, creativity, thinking and
            analysis, innovation, and so on.
          </p>
        </div>
        {/* <div className="lg:w-3/5  relative  flex-col justify-center items-center  lg:mt-0">
          <ImageCarouselHero />
        </div> */}
        <video
          src="/hero/sample.mp4"
          autoPlay
          loop
          controls
          className="lg:w-3/5 rounded-2xl"
        />
      </div>
    </div>
  );
}
