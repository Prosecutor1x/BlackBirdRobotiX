import React from "react";
import Demo from "../demo/Demo.main";




export default function Hero () {
  return (
    <div className="lg:flex lg:min-h-screen justify-center items-center bg-white px-9 gap-20">
      <div className="lg:w-2/3 flex flex-col justify-center items-center">
        <img src="/logo.png" className="mt-10 " />

        <h1 className="lg:text-3xl font-semibold text-font1">
          Hello welcome to BlackBird RobotiX
        </h1>
        <a
          href=""
          target="_blank"
          className=" text-font1 lg:mt-6 "
          rel="noreferrer"
        >
          -by BlackBird India
        </a>
      </div>
      <div className="lg:w-3/5 mt-12 lg:mt-0">
        <Demo/>
      </div>
    </div>
  );
}

