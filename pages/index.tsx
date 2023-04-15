import Header from "@/components/Header/Navbar.main";
import Navbar from "@/components/Header/Navbar.main";
import React from "react";

const Home = () => {
  return (
    <>
      <Header/>
    <div className="flex h-screen items-center justify-center bg-slate-900 flex-col">
      <img src="/shape3.png"  className="mt-10"/>
    
      <h1 className="text-5xl font-semibold text-white">
        Hello welcome to BlackBird RobotiX
      </h1>
      <a
        href="https://github.com/Rajdip019"
        target="_blank"
        className=" text-gray-200 mt-10 "
        rel="noreferrer"
      >
        -by BlackBird India Ayan Da
      </a>
    </div>
    </>
  );
};

export default Home;
