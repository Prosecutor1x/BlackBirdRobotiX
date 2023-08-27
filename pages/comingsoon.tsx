import React from "react";

function Comingsoon() {
  return (
    <div className="flex justify-center items-center h-screen font-quicksand font-bold  relative">
      <img
        src="RobotGif.gif "
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent"
      ></img>
      <div className="bg-transparent backdrop-blur-sm  rounded-full p-24 z-40">
        <h1 className="text-center text-3xl my-2">Coming Soon </h1>
        <p>
          We are working hard to bring you something amazing... Stay tuned!!
        </p>
      </div>
    </div>
  );
}

export default Comingsoon;
