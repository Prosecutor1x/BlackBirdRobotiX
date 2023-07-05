import React from "react";
import Demo from "../demo/Demo.main";
import ImageCarouselHero from "./swiper.hero";

export default function Hero() {
  return (
    <div className="relative ">
    
      <div className="lg:flex  lg:min-h-screen justify-between items-center  lg:px-12 gap-28 bg-[#FAF9F6]">
        
        <div className="lg:w-2/3 mt-12 lg:mt-0 p-10 rounded-2xl bg-emerald-100 flex flex-col space-y-4  ">
          <p className="lg:text-lg  font-semibold text-center leading-2 "> A blog (a truncation of "weblog")[1] is an informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.</p>
         <a href="#book"><button  className="bg-font2 p-2 w-full rounded-lg text-white font-semibold active:scale-95">Book Now</button></a> 
        </div>
        <div className="lg:w-2/5 relative  flex-col justify-center items-center mt-32 lg:mt-0">
         
          <ImageCarouselHero />
        </div>
      </div>
      
    </div>
  );
}
