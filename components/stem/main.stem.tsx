import React from 'react'

const stemCardData = [
    {
      text: "Scratch Coding",
      img: "/hero/comp.png",
    },
    {
      text: "learning Kits",
      img: "/hero/lkit.png",
    },
    {
      text: "learning Kits",
      img: "/hero/lkit.png",
    },
    {
      text: "learning Kits",
      img: "/hero/lkit.png",
    },
    {
        text: "learning Kits",
        img: "/hero/lkit.png",
      },
      {
        text: "learning Kits",
        img: "/hero/lkit.png",
      },
      {
        text: "learning Kits",
        img: "/hero/lkit.png",
      },
      {
        text: "learning Kits",
        img: "/hero/lkit.png",
      },
  ];

const Stem = () => {
  return (
    <div className=' bg-[#16CEF7] rounded-t-2xl '>
        <h1 className='text-2xl text-center text-white font-semibold py-4'>Empowering Learning with Future Skills</h1>
        <p className='text-lg text-center text-white p-2'>With Innovative Learning through Robotics, AI, Drones, Coding, Designing and STEM, we provide a platform for students to nurture their curiosity, creativity, and imagination to unleash the true potential of Young Innovators.</p>
        <section className='grid grid-flow-col col-span-4 grid-rows-2 px-12 py-12 gap-12'>
        {stemCardData?.map((item, index) => {
          return (
            <div className="rounded-2xl bg-white ">
              <img
                src={item.img}
                className="rounded-2xl  object-cover"
              />
              <h1 className="text-xl font-semibold text-center p-3">{item.text} </h1>
            </div>
          );
        })}

        </section>
       

    </div>
  )
}

export default Stem