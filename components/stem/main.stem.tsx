import React from 'react'

const stemCardData = [
    {
      text: "Scratch Coding",
      img: "/stem/scr.png",
    },
    {
      text: "Mobile App Development",
      img: "/stem/app.png",
    },
    {
      text: "Robotics",
      img: "/stem/rob.png",
    },
    {
      text: "Artificial Intelligence",
      img: "/stem/ai.png",
    },
    {
        text: "Block Programming",
        img: "/stem/block.png",
      },
      {
        text: "Programming Languages",
        img: "/stem/lang.png",
      },
      {
        text: "Drone Developement",
        img: "/stem/drone.png",
      },
      {
        text: "Combat Robotsx",
        img: "/stem/cb.png",
      },
  ];

const Stem = () => {
  return (
    <div className=' bg-[#16CEF7] rounded-t-2xl lg:mx-6'>
        <h1 className='lg:text-3xl text-xl text-center text-white font-semibold py-4 px-2'>Empowering Learning with Future Skills</h1>
        <p className='lg:text-lg  text-center text-white p-2 px-6'>With Innovative Learning through Robotics, AI, Drones, Coding, Designing and STEM, we provide a platform for students to nurture their curiosity, creativity, and imagination to unleash the true potential of Young Innovators.</p>
        <section className='grid grid-flow-col lg:col-span-4 col-span-2 lg:grid-rows-2 grid-rows-4 lg:px-12 px-4 py-12 lg:gap-12 gap-4'>
        {stemCardData?.map((item, index) => {
          return (
            <div className="rounded-2xl bg-white flex flex-col justify-center items-center p-2 shadow-lg">
              <img
                src={item.img}
                className="rounded-2xl  object-contain lg:h-[12rem] lg:w-[18rem] h-[10rem] w-[10rem] bg-slate-200 p-4"
              />
              <h1 className="lg:text-xl text-xs  font-semibold text-center p-3">{item.text} </h1>
            </div>
          );
        })}

        </section>
       

    </div>
  )
}

export default Stem