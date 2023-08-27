import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Images = ["/hero/1.JPG", "/hero/2.JPG", "/hero/3.JPG", "/hero/4.jpg"];

const ImageCarouselHero = () => {
  const [mySwiper, setMySwiper] = useState<any>(null);

  return (
    <div className="w-full ">
      <div className="rounded-3xl  flex  items-center justify-between ">
        {/* <button
          className=" text-slate-800 lg:border-[3px] border-theme rounded-full "
          onClick={() => {
            if (mySwiper) mySwiper.slidePrev();
          }}
        >
          <IoIosArrowBack
            size={35}
            className="p-1 bg-white  rounded-full md:block hidden "
          />
        </button> */}
        <Swiper
          onInit={(ev: any) => setMySwiper(ev)}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          //pagination={true}
          spaceBetween={10}
          //navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          className=" mx-auto"
        >
          {Images.map((item, i) => {
            return (
              <SwiperSlide key={i} className="">
                <img
                  src={item}
                  className=" border-2  p-1 rounded-br-[80px] rounded-t-[80px] bg-gray-200 "
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <button
          className=" text-slate-800 lg:border-[3px] border-theme rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slideNext();
          }}
        >
          <IoIosArrowForward
            size={35}
            className="p-1 bg-white  rounded-full md:block hidden "
          />
        </button> */}
      </div>
    </div>
  );
};

export default ImageCarouselHero;
