import React from "react";

function HeroEvents() {
  return (
    <div className="lg:w-full flex flex-col justify-center items-center px-6 ">
      <div className="flex lg:flex-row flex-col justify-around mt-24">
        <img src="/events/scratch1.png" className="lg:w-2/6  " />
        <h1 className=" font-extrabold lg:text-[80px] text-2xl lg:mt-32 lg:text-start text-center text-[#EDA822] strokeme">
          Contest 2023
        </h1>
      </div>
      <p className=" text-[#EDA822] lg:text-4xl text-2xl font-bold text-center my-12 ">
        <span className="text-purple-600 strokeme">Open for all</span>{" "}
        <span className="text-orange-400 strokeme">&nbsp; SCRATCH </span>{" "}
        <span className="text-white"> &nbsp; PROGRAMMING</span>{" "}
        <span className="text-green-500 strokeme">&nbsp; CONTEST</span>
      </p>
      <div className="flex lg:flex-row flex-col justify-center gap-12 items-center">
        <div className="text-center text-[#EDA822] strokeme">
          <p className=" lg:text-3xl text-2xl -my-1 font-semibold ">
            Cheers! Scratch Contest 2023 is live again
          </p>

          <p className=" lg:text-4xl text-2xl -my-1  font-bold">
            TOPIC - <span className="text-green-600">Tree Plantation</span>{" "}
          </p>
          <p className="text-3xl -my-1  font-semibold">Resister Now!!</p>
        </div>
        <img src="/events/pile.png" className="lg:w-1/3" />
      </div>
      <h1 className="mt-24 my-3 lg:text-3xl">
        Follow the Instructions as per the following video
        <br></br>
        <p className="lg:text-xl text-xs my-4 font-semibold text-center">
          {" "}
          For any further Queries Call/Whatsapp us at +91 8013100878{" "}
        </p>
      </h1>
      <video
        src="/banner/event.mp4"
        id="watch"
        loop={true}
        controls={true}
        className="lg:w-4/5 rounded-3xl bg-[#EDA822] p-2 "
        draggable={false}
      />
    </div>
  );
}

export default HeroEvents;
