import Link from "next/link";
import React from "react";

import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  AddIcon,
  ChevronDownIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

export default function Header() {
  return (
    <div className="flex bg-gradient-to-r horizontal-gradient shadow-lg backdrop-blur-lg  justify-center h-20 space-x-16 z-40 fixed top-0  w-screen items-center px-4 lg:px-20 xl:text-base lg:text-sm text-white font-quicksand ">
      <div className="flex justify-between w-full items-center  xl:space-x-8 lg:space-x-4">
        <div className=" flex items-center">
          <a href="/">
            <img src="/fl.png" className="lg:h-24 w- " />
          </a>
          <a href="/">
            <img src="/bb.png" className="lg:h-40 "  />
          </a>
        </div>
        <div className="hidden lg:flex md:gap-6 items-center">
          {/* <a href="#">
            <h1
              className="anchor-custom text-white whitespace-nowrap  font-semibold"
              aria-current="page"
            >
              Home
            </h1>
          </a> */}
          {/* <Link
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              Products
            </h1>
          </Link> */}

          <a href="/events">
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              Events ⭐
            </h1>
          </a>

          <Menu>
            <MenuButton fontWeight={600} className="anchor-custom">
              Courses <ChevronDownIcon />
            </MenuButton>
            <MenuList textColor={"#000000"}>
              <a href="#Ages 6+ to 10+">
                <MenuItem>Ages 6+ to 10+</MenuItem>
              </a>
              <a href="#Ages 10+ to 14+">
                {" "}
                <MenuItem>Ages 10+ to 14+</MenuItem>
              </a>
              <a href="#Ages 14+ onwards">
                {" "}
                <MenuItem>Ages 14+ onwards</MenuItem>
              </a>
            </MenuList>
          </Menu>
          <a href="comingsoon" target="_blank" rel="norefferer">
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              Projects
            </h1>
          </a>
          {/* <Menu>
            <MenuButton fontWeight={600} className="anchor-custom">
              School Programs <ChevronDownIcon />
            </MenuButton>
            <MenuList textColor={"#000000"}>
              <a href="#Ages 6+ to 10+">
                <MenuItem>Ages 6+ to 10+</MenuItem>
              </a>
              <a href="#Ages 10+ to 14+">
                {" "}
                <MenuItem>Ages 10+ to 14+</MenuItem>
              </a>
              <a href="#Ages 14+ onwards">
                {" "}
                <MenuItem>Ages 14+ onwards</MenuItem>
              </a>
            </MenuList>
          </Menu> */}
          <a href="comingsoon" target="_blank" rel="norefferer">
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              School Programs
            </h1>
          </a>

          <a href="#aboutus">
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              About Us
            </h1>
          </a>
          <a href="comingsoon" target="_blank" rel="norefferer">
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              Shop
            </h1>
          </a>
          {/* <a href="#contactus">
            <h1 className="anchor-custom text-white whitespace-nowrap font-semibold">
              Contact Us
            </h1>
          </a> */}
          <a href="#book">
          <button className="px-3 py-0.5 bg-[#FFFF00] rounded-2xl  font-bold border-black border-2 text-black active:opacity-90 active:scale-95">Book Demo</button>
          </a>
        </div>
      </div>

      <div className="lg:hidden">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color={"white"}
          />
          <MenuList textColor={"#000000"}>
            <a href="#aboutus">
              {" "}
              <MenuItem>About Us</MenuItem>
            </a>
            <a href="#contactus">
              {" "}
              <MenuItem>Contact Us</MenuItem>
            </a>
            <a href="#book">
              {" "}
              <MenuItem>Book A Demo</MenuItem>
            </a>
            <Menu>
              <a href="#courses">
                <MenuButton padding={3}>
                  Courses <ChevronDownIcon />
                </MenuButton>
              </a>
              <MenuList textColor={"#000000"}>
                <a href="#Ages 6+ to 10+">
                  <MenuItem>Ages 6+ to 10+</MenuItem>
                </a>
                <a href="#Ages 10+ to 14+">
                  {" "}
                  <MenuItem>Ages 10+ to 14+</MenuItem>
                </a>
                <a href="#Ages 14+ onwards">
                  {" "}
                  <MenuItem>Ages 14+ onwards</MenuItem>
                </a>
              </MenuList>
            </Menu>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
