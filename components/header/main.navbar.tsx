import Link from "next/link";
import React from "react";
import MuiDrawer from "./drawer.navbar";

export default function Header() {
  return (
    <div className="flex  bg-gradient-to-r  via-theme  from-emerald-500  to-emerald-500   justify-center h-20 space-x-16 z-40 fixed top-0  w-full items-center px-4 lg:px-20 xl:text-base lg:text-sm text-white ">
      <div className="flex justify-between w-full items-center  xl:space-x-8 lg:space-x-4">
        <div className=" flex items-center">
          <img src="/fl.png" className="h-24" />
          <img src="/bb.png" className="h-40" />
        </div>
        <div className="hidden lg:flex md:gap-10">
          <a href="#" target="_blank" rel="noreferrer">
            <h1
              className="anchor-custom text-white whitespace-nowrap  font-semibold"
              aria-current="page"
            >
              Home
            </h1>
          </a>
          {/* <Link
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              Products
            </h1>
          </Link> */}

          {/* <a href="">
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              Events
            </h1>
          </a> */}
          <a href="#courses">
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              Courses
            </h1>
          </a>
          <a href="#aboutus">
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              About Us
            </h1>
          </a>
          <a href="#contactus">
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              Contact Us
            </h1>
          </a>
        </div>
      </div>

      {/* <div className="flex items-center gap-2 z-20 text-base">
        <Link href="/">
          <button className="lg:block justify-center btn-primary   whitespace-nowrap">
            <span className="font-bold ">Login</span>
          </button>
        </Link>
        <Link href="/">
          <button className="lg:block justify-center btn-primary whitespace-nowrap">
            <span className="font-bold">Register</span>
          </button>
        </Link>
       

      </div> */}
      {/* <div className="lg:hidden">
        <MuiDrawer/>
       </div> */}
    </div>
  );
}
