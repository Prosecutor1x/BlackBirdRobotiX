import About from "@/components/aboutus/main.aboutus";
import Contact from "@/components/contactus/main.contactus";
import Courses from "@/components/courses/main.courses";
import Demo from "@/components/demo/Demo.main";
import Header from "@/components/header/main.navbar";
import Hero from "@/components/hero/main.hero";
import Stem from "@/components/stem/main.stem";
import React from "react";

const Home = () => {
  return (
    <div className="bg-[#E4E5E7] ">
      <Header />
      <div className="relative">
        <img src="/hero/bg.png" className="w-screen" />
        <img src="/hero/ban.png" className="absolute top-1/4 right-0 h-[24rem] lg:block hidden" />
        <div className="absolute text-white font-quicksand top-1/3 w-1/2 left-20 hidden lg:block text-center">
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
          <button className="px-4 py-0.5 bg-[#FF0000] rounded-2xl mx-3 my-2 font-bold border-white border-2 active:opacity-90 active:scale-95">
            Watch ▶
          </button>
          <button className="px-3 py-0.5 bg-[#FFFF00] rounded-2xl mx-4 my-2 font-bold border-black border-2 text-black active:opacity-90 active:scale-95">
            Book Demo
          </button>
        </div>
      </div>

      <div className="px-4 font-quicksand  bg-[#E4E5E7] space-y-8">
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
        <Stem />
        <div className="flex lg:flex-row flex-col justify-evenly items-center  ">
          <div className="flex flex-col justify-center items-center py-12 ">
            <h1 className="text-2xl font-semibold">
              Book a <span className="text-3xl">Free Demo </span>Today!
            </h1>
            <p className="mb-12 text-lg my-2 lg:text-center">
              Book a Free Demo Today! Ready to explore the power of Robots, AI,
              Drones and many more! Book a Free Demo of our Innovative
              Educational Ecosystem
            </p>
            <Demo />
          </div>
          <div className="flex flex-col justify-center items-center py-12 ">
            <p className="lg:p-12">
              Explore the significance and advantages of innovative learning
              with <span className="font-bold">BlackBird RobotiX</span>. A revolutionary learning ecosystem
              designed to develop future skills through coding, robotics, AI,
              drones. <br/>  Our <span className="font-bold"> Education Specialist</span> is here to guide you through the
              right resources for the educators and assess the educators with
              their ability and knowledge for best outcome.  <br/> Contact us for a
              free demonstration.<span className="font-bold italic">Act today to frame a better tomorrow</span> 
            </p>
            <img src="/stem/stm.png"  className="my-4 lg:p-12"/>
          </div>
        </div>
        <Courses />

        <About />
      </div>

      <Contact />
    </div>
  );
};

export default Home;
