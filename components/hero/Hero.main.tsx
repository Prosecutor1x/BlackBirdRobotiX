import React from "react";
import Demo from "../demo/Demo.main";



export default function Hero () {
  return (
    <div className="flex h-screen justify-center items-center bg-white px-9">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <img src="/shape3.png" className="mt-10 " />

        <h1 className="text-3xl font-semibold text-font1">
          Hello welcome to BlackBird RobotiX
        </h1>
        <a
          href="https://github.com/Rajdip019"
          target="_blank"
          className=" text-font1 mt-10 "
          rel="noreferrer"
        >
          -by BlackBird India
        </a>
      </div>
      <div className="w-3/5">
        <Demo/>
      </div>
    </div>
  );
}

