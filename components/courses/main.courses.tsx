import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { Category } from "@mui/icons-material";
import React from "react";
import  CoursesData  from "../../database/courseData";

// interface ICourses {
//   category: string;
//   first: string;
//   second: string;
//   third: string;
//   fourth: string;
//   fifth: string;
//   sixth: string;
// }

const data =[
  {
    category:"Ages 6+ to 10+",
    id:1,
    courses:[
      {
        name:"Scratch Junior",
        quote:"Entry level coding platform for logical developement. Register Now!!",
        id:1,
      },
      {
        name:"Blocky Programming",
        quote:"Games that help to learn with fun. Simple programable code blocks for beginners to start skill training. Register now!!",
        id:2,
      },
      {
        name:"Robotics and Artificial Intelligence",
        quote:"Build a robot, code it and run it. Encourage curiosity, creativity and innovation using robots. Register now!!",
        id:3,
      },
      {
        name:"Scratch Coding",
        quote:"Math’s is fun and solving problem is easy now. Elementary level educational tool for children by a Block-Based Visual Programming Language. Register now! ",
        id:4,
      }
    ]
  },
  {
    category:"Ages 10+ to 14+",
    id:2,
    courses:[
      {
        name:"Mobile App Developement",
        quote:"Bored using preinstalled aops and games in your mobile then make your own. Register Now !!",
        id:1,
      },
      {
        name:"IoT and Arduino",
        quote:"Skills that Combine hardwar and software togethaer. Step into Innovation and hands-on Technology. Register Now !!",
        id:2,
      },
      {
        name:"Web Design & Development",
        quote:"Make your own identity in internet by creating and designing a website. Register Now !! ",
        id:3,
      },
      {
        name:"Python Programming",
        quote:"A high-level general-purpose programming language extremely popular among code developers. Register Now !!",
        id:4,
      },
      {
        name:"Robotics",
        quote:"Build a robot, code it and run it. Encourage curiosity, creativity and innovation using robots. Register now!!",
        id:5,
      },
      {
        name:"Artificial Intelligence",
        quote:"Machines can be made inteligent and programmed to enhance its ability. Want to know more.. Register Now !!",
        id:6,
      }
    ]
  },
  {
    category:"Ages 14+ onwards",
    id:3,
    courses:[
      {
        name:"Mobile App Developement",
        quote:"Bored using preinstalled aops and games in your mobile then make your own. Register Now !!",
        id:1,
      },
      {
        name:"IoT and Arduino/Rasphberry Pi",
        quote:"Skills that Combine hardwar and software togethaer. Step into Innovation and hands-on Technology. Register Now !!",
        id:2,
      },
      {
        name:"Web Design & Development",
        quote:"Make your own identity in internet by creating and designing a website. Register Now !! ",
        id:3,
      },
      {
        name:"Python Programming",
        quote:"A high-level general-purpose programming language extremely popular among code developers. Register Now !!",
        id:4,
      },
      {
        name:"Robotics",
        quote:"Build a robot, code it and run it. Encourage curiosity, creativity and innovation using robots. Register now!!",
        id:5,
      },
      {
        name:"Artificial Intelligence",
        quote:"Machines can be made inteligent and programmed to enhance its ability. Want to know more.. Register Now !!",
        id:6,
      },
      {
        name:"Drone Developement",
        quote:"Knowledge is limitless as the sky, it is time to fly high. Register Now !!",
        id:6,
      },
      {
        name:"Autonomus and Manual Bots",
        quote:"Robots are build to solve task and work effectively and efficiently. Register Now !!",
        id:6,
      },
      {
        name:"Combat Robotics",
        quote:"Have you ever seen robots fighting, NO! lets join the battle of bots because It's Robot Fighting Time. Register Now !!",
        id:6,
      }
    ]
  }
]




console.log(CoursesData);
const Courses = () => {
  return (
    <div
      className=" text-black space-y-8  flex flex-col justify-center lg:pb-32  lg:pt-0 font-quicksand"
      id="courses"
    >
      <h1 className="text-center text-3xl font-semibold my-4 "> Courses</h1>
      <>
        {data.map((data, id) => {
          return (
            <Accordion key={id} id={data.category} className="rounded-xl border " >
              <AccordionItem className="rounded-xl border  ">
                <h2>
                  <AccordionButton
                    
                    className="rounded-xl  bg-emerald-300"
                  >
                    <Box
                      as="span"
                      flex="1"
                      className="text-center font-semibold p-2 text-xl "
                    >
                       {data.category} 
                    </Box>
               
                  </AccordionButton>
                </h2>
                
                


                  {data.courses?.map((category, id) => {
                    return (
                      <>
                        {category.name && (
                          <Accordion key={id} className="" allowMultiple>
                            <AccordionItem className="border-none ">
                              <h2>
                                <AccordionButton >
                                  <Box as="span" >
                                    
                                    <div className="text-xl font-semibold">◉ {category.name}</div>
                                  </Box>
                                  
                                </AccordionButton>
                              </h2>
                              <AccordionPanel>
                                <p>{category.quote}</p>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        )}
                      </>
                    );
                  })}
             
              </AccordionItem>
            </Accordion>
          );

        })}
      </>
      <h1 className="text-center text-2xl text-theme">For any Queries Book a Demo Session or Call/Whatsapp us at +91 8013100878 </h1>
    </div>
  );
};

export default Courses;
