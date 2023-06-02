import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

// interface ICourses {
//   category: string;
//   first: string;
//   second: string;
//   third: string;
//   fourth: string;
//   fifth: string;
//   sixth: string;
// }
const CoursesData = [
  {
    category: "Classes 3 to 5",
    first: "Machine and Mechanisms",
    second: "Robotics",
    third: "IOT and 3D designs",
    fourth: "Website Developement",
    fifth: "",
    sixth: "",
  },
  {
    category: "Classes 6 to 8",
    first: "App Developement",
    second: "Learn to build and fly Drones and RC planes",
    third: "IOT and Arduino",
    fourth: "Artificial Intelligience",
    fifth: "Programming with Python and Java",
    sixth: "Virtual Reality",
  },
  {
    category: "Classes 9 and above",
    first: "Programming with Python and Javascript",
    second: "Robotics",
    third: "Learn to build and fly Drones and RC planes",
    fourth: "Artificial Intelligience",
    fifth: "Combat Robotics",
    sixth: "",
  },
];

console.log(CoursesData);
const Courses = () => {
  return (
    <div className=" text-black space-y-8 lg:my-6 flex flex-col justify-center lg:pb-32  lg:pt-0 font-quicksand" id="courses">
      <h1 className="text-center text-3xl font-semibold my-4 "> Courses</h1>
      <>
        {CoursesData.map((data, id) => {
          return(
            <Accordion key={id} className="rounded-xl border " allowMultiple>
            <AccordionItem className="rounded-xl border  ">
              <h2>
                <AccordionButton _expanded={{ bg:"#2f4f4f " , color: "white" }} className="rounded-xl bg-slate-300">
                  <Box as="span" flex="1"  className="text-center font-semibold p-12 text-xl ">
                  🧑‍🏫 {data.category} ✨⏰
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <div className="text-xl font-semibold">

                <h1>📱{data.first}</h1>
                <h1>🤖{data.second}</h1>
                <h1>🔥{data.third}</h1>
                <h1>❤️{data.fourth}</h1>
                {data.fifth && <h1>🧸{data.fifth}</h1>}
                {data.sixth && <h1>🛬 {data.sixth}</h1>}
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
         
            
          )
          
        })}
      </>
      
    </div>
  );
};

export default Courses;
