import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

type Props = {};

function Judge({}: Props) {
  const judgedata = [
    {
      name: "Krishnarjun Nanda",
      country: "India",
      image: "/judges/arjun.jpg",
      description:
        "BTech 2022  in Computer Science and Artificial Intelligence from Heritage Institute of Technology.Tech Lead at Blackbird Robotix.  Developer at DetectBox.",
      linkedin: "https://www.linkedin.com/in/krishnarjun-nanda-57763b1a0/",
      // twitter: "https://twitter.com/_kArjun_",
      // instagram: "https://www.instagram.com/__k.arjun__/",
    },
    {
      name: "Sourav Payra",
      country: "India",
      image: "/judges/du.jpg",
      description:
        " BTech 2018 in Computer science and engineering from Academy of technology.Tech Support of BlackBird RobotiX. SEO at Quantageeks",
      linkedin: "https://www.linkedin.com/in/sourav-payra-141693183",
      // twitter: "https://twitter.com/",
      // instagram: "https://www.instagram.com/",
    },
    {
      name: "Biswayan Paul",
      country: "USA",
      image: "/judges/bs.jpg",
      description:
        "BTech 2021  in Information Technology from Techno India Saltlake MS in Computer Science and Information Systems 2023 New York Institute of technology ",
      linkedin: "https://www.linkedin.com/in/biswayan-paul-609a32144",
      // twitter: "https://twitter.com/",
      // instagram: "https://www.instagram.com/",
    },
  ];

  return (
    <>
      <h1 className="text-center text-3xl my-16 font-semibold ">Our Judges</h1>
      <div className="flex justify-around items-center ">
        {judgedata.map((judge, id) => {
          return (
            <div
              className="bg-[#EDA822] h-[24rem] w-1/5 my-12 rounded-xl relative p-1"
              key={id}
            >
              <Wrap className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <WrapItem className="">
                  <Avatar
                    name={judge.name}
                    src={judge.image}
                    boxSize={36}
                    borderColor="orange.300"
                    borderWidth="4px"
                    className=" object-contain "
                  />{" "}
                </WrapItem>
              </Wrap>
              <div className="mt-20 text-white">
                <h1 className="text-center  font-semibold text-xl text-white">
                  {judge.name}
                  <br />
                  <p className="text-center text-lg ">{judge.country}</p>
                </h1>

                <p className=" px-2 my-4 font-semibold text-center text-black">
                  {judge.description}
                </p>

                <div className="flex justify-center gap-4">
                  {/* <a href={judge.instagram} target="_blank" rel="norefferer">
                    <AiFillInstagram size={30} />
                  </a> */}
                  {/* <a href={judge.twitter} target="_blank" rel="norefferer">
                    <AiFillTwitterSquare size={30} />
                  </a> */}
                  <a href={judge.linkedin} target="_blank" rel="norefferer">
                    <AiFillLinkedin
                      size={30}
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                    />
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
