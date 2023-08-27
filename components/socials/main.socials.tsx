import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="text-white  fixed bottom-10 right-0 bg-green-400 z-40 px-4 hover:w-24 py-2 rounded-l-full  ">
      <a href="https://wa.me/+918013100878" target="_blank" rel="noreferrer">
        <BsWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default Socials;
