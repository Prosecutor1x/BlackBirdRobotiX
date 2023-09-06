import React, { useState } from "react";
import Header from "@/components/header/main.navbar";
import Hero from "@/components/events/hero.events";
import Demo from "@/components/events/register.event";
import HeroEvents from "@/components/events/hero.events";
import Register from "@/components/events/register.event";
import Judge from "@/components/events/judgep.events";
import TimeRemaining from "@/components/shared/timeremainning";
import Socials from "@/components/socials/main.socials";

type Props = {};

const Events = () => {
  return (
    <div className="bg-[#E4E5E7] w-screen   font-quicksand">
      {/* //Header */}
      {/* <Socials /> */}
      <div className="flex  horizontal-gradient2 shadow-lg backdrop-blur-lg  justify-center h-24  space-x-16 z-40 fixed top-0 w-full items-center px-4 lg:px-20 xl:text-base lg:text-sm text-white font-quicksand ">
        <div className="flex justify-between lg:w-full items-center  xl:space-x-8 lg:space-x-4">
          <div className=" flex items-center">
            <a href="/">
              <img src="/fl.png" className="lg:h-28  " />
            </a>
            <a href="/">
              <img src="/bb.png" className="lg:h-40 " />
            </a>
          </div>
        </div>
      </div>
      {/* //Rest */}
      <div className="lg:px-6 py-6 space-y-24  ">
        <HeroEvents />

        <Register />
        <Judge />
      </div>
    </div>
  );
};

export default Events;
