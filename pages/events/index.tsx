import React from 'react'
import Header from "@/components/header/main.navbar";
import  Hero from "@/components/events/hero.events";
import Demo from "@/components/events/register.event";

type Props = {}

const Events = () => {
  return (
    <div className='bg-[#E4E5E7] w-screen h-screen'>
        <Header/>
         <Hero/>
         <Demo/>

         </div>
  )
}

export default Events