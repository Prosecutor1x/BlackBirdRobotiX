import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

type Props = {};

function Judge({}: Props) {
  const judgedata = [
    {
      name: "Judge 1",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Judge 2",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Judge 3",
      image: "https://www.w3schools.com/howto/img_avatar.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  ];

  return (
    <>
      <h1 className="text-center text-3xl my-16 font-semibold ">Our Judges</h1>
      <div className="flex justify-around items-center">
        {judgedata.map((judge, id) => {
          return (
            <div
              className="bg-[#EDA822] h-[24rem] w-1/5 my-12 rounded-xl relative p-1"
              key={id}
            >
              <Wrap className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <WrapItem>
                  <Avatar size="2xl" name={judge.name} src={judge.image} />{" "}
                </WrapItem>
              </Wrap>
              <div className="mt-20">
                <h1 className="text-center  font-semibold text-xl">
                  {judge.name}
                </h1>
                <p className="text-center px-2 my-4 font-semibold">
                  {judge.description}
                </p>

                <div className="flex justify-center gap-4">
                  <a href={judge.instagram} target="_blank" rel="norefferer">
                    <AiFillInstagram size={30} />
                  </a>
                  <a href={judge.twitter} target="_blank" rel="norefferer">
                    <AiFillTwitterSquare size={30} />
                  </a>
                  <a href={judge.twitter} target="_blank" rel="norefferer">
                    <AiFillLinkedin size={30} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Judge;
