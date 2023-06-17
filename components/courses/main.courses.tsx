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


console.log(CoursesData);
const Courses = () => {
  return (
    <div
      className=" text-black space-y-8 lg:my-6 flex flex-col justify-center lg:pb-32  lg:pt-0 font-quicksand"
      id="courses"
    >
      <h1 className="text-center text-3xl font-semibold my-4 "> Courses</h1>
      <>
        {CoursesData.map((data, id) => {
          return (
            <Accordion key={id} className="rounded-xl border " allowMultiple>
              <AccordionItem className="rounded-xl border  ">
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "#2f4f4f ", color: "white" }}
                    className="rounded-xl bg-slate-300"
                  >
                    <Box
                      as="span"
                      flex="1"
                      className="text-center font-semibold p-12 text-xl "
                    >
                      🧑‍🏫 {data.category} ✨⏰
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  


                  {data.courses?.map((category, id) => {
                    return (
                      <>
                        {category.name && (
                          <Accordion key={id} className="" allowMultiple>
                            <AccordionItem className="border-none ">
                              <h2>
                                <AccordionButton >
                                  <Box as="span" >
                                    <div className="text-xl font-semibold">{category.name}</div>
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
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );

        })}
      </>
    </div>
  );
};

export default Courses;
