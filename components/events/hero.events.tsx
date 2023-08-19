import React from 'react'

function Hero() {
  return (
    <div className=' mt-20 mx-64 '>
      <div className='flex gap-16'>

        <img src="/events/scratch1.png" className='w-4/12 h-4/12' />
        <h1 className=' font-extrabold text-7xl mt-32 text-[#EDA822] '>Contest 2023</h1>
      </div>
      <p className=' text-[#EDA822] text-2xl font-bold text-center flex justify-center'>Open for all Scratch Programming Contest</p>
      <div className='flex mt-20 space-x-16'>
        <div className=''>

          <p className='text-[#EDA822] text-2xl -my-1 '>Cheers! Scratch Contest 2023 is live again ,</p>
         

          <p className='text-[#950DC7] text-3xl -my-1  font-bold'>TOPIC - Tree Plantation </p>
          <p className='text-[#2FF737] text-2xl -my-1  font-bold'>Resister Now!!</p>
        </div>
        <img src="/events/pile.png" className='w-5/12 h-5/12' />



      </div>





    </div>
  )
}

export default Hero