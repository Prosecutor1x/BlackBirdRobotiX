import React from "react";

function HeroEvents() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="flex justify-around mt-24">
        <img src="/events/scratch1.png" className="w-2/6 " />
        <h1 className=" font-extrabold text-[80px] mt-32 text-[#EDA822] strokeme">
          Contest 2023
        </h1>
      </div>
      <p className=" text-[#EDA822] text-4xl font-bold text-center my-12 strokeme">
        <span className="text-purple-600">Open for all</span>{" "}
        <span className="text-orange-400">&nbsp; SCRATCH </span>{" "}
        <span className="text-[#dcdcdb]"> &nbsp; PROGRAMMING</span>{" "}
        <span className="text-green-500">&nbsp; CONTEST</span>
      </p>
      <div className="flex justify-center gap-12 items-center">
        <div className="text-center text-[#EDA822] strokeme">
          <p className=" text-3xl -my-1 font-semibold ">
            Cheers! Scratch Contest 2023 is live again
          </p>

          <p className=" text-4xl -my-1  font-bold">TOPIC - Tree Plantation </p>
          <p className="text-3xl -my-1  font-semibold">Resister Now!!</p>
        </div>
        <img src="/events/pile.png" className="w-1/3" />
      </div>
    </div>
  );
}

export default HeroEvents;
