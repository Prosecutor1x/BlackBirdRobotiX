import React, { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import countries from "@/database/countries";
import { countryCodes } from "@/database/CountryCodes";
import { FileUploader } from "react-drag-drop-files";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { uploadSB3File } from "@/functions/addFile";
import TimeRemaining from "../shared/timeremainning";

interface RegisterProps {
  phoneNumber: string;
  // emailId: string;
  name: string;
  countryCode: string;
  country: string;
  institution: string;
  // age: number;
  // course: string;
}

const Register = () => {
  const [RegisterData, setRegisterData] = useState<RegisterProps>({
    phoneNumber: "",
    // emailId: "",
    name: "",
    countryCode: "+91",
    country: "India",
    // age: NaN,
    // course: "",
    institution: "",
  });
  const [popup, setPopup] = React.useState(0);
  const [uploadname, setUploadname] = useState<string>("");
  const [uploadStatus, setUploadStatus] = useState<string>("not-uploaded");

  const fileTypes = ["SB3"];
  const targetDate = "2023-08-29T23:59:59";
  const targetDate2 = "2023-09-24T23:59:59";
  const [disable, setDisable] = useState<boolean>(false);
  const [disable2, setDisable2] = useState<boolean>(false);

  const [file, setFile] = useState(null);

  const handledisableUpload = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const timeDifference = target.getTime() - now.getTime();
    if (timeDifference > 0) {
      setDisable(true);
    } else if (timeDifference < -86400000) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  const handledisableRegistration = () => {
    const now = new Date();
    const target = new Date(targetDate2);
    const timeDifference = target.getTime() - now.getTime();
    if (timeDifference > 0) {
      setDisable2(false);
    } else if (timeDifference < 0) {
      setDisable2(true);
    }
  };

  const handleChange = (file: any) => {
    setFile(file);
    const sb3File: File = file;
    const username: string = uploadname;
    if (username) {
      uploadSB3File(sb3File, username)
        .then(() => {
          console.log("File upload completed");
          setUploadStatus("uploaded");
        })
        .catch((error) => {
          console.error("Error:", error);
          setUploadStatus("failed");
        });
    } else {
      console.error("Username is missing.");
      setUploadStatus("missing-username");
    }
  };

  useEffect(() => {
    const tempCode = countryCodes.find(
      (data) => data.name == RegisterData.country,
    );
    tempCode &&
      setRegisterData((data) => {
        return { ...data, countryCode: tempCode.dial_code };
      });
    handledisableUpload();
    handledisableRegistration();
  }, [RegisterData.country]);

  async function addRegister(Registerdata: RegisterProps) {
    if (Registerdata) {
      const RegisterRef = doc(db, "register", Registerdata.phoneNumber);
      const RegisterSnap = await getDoc(RegisterRef);
      if (RegisterSnap.exists()) {
        setPopup(2);
        setRegisterData({
          name: "",
          // emailId: "",
          countryCode: "",
          phoneNumber: "",
          country: "",
          // age: NaN,
          // course: "",
          institution: "",
        });
        setTimeout(() => {
          setPopup(0);
        }, 4000);
      } else {
        try {
          await setDoc(RegisterRef, Registerdata);
          setPopup(3);
        } catch (e: any) {
          console.log(e.message);
        }
      }
    } else {
      console.log("No value entered");
    }
  }

  return (
    <>
      <TimeRemaining
        targetDate={targetDate2}
        timenowtext="Registration Closed"
        timetext="Registration Closes in"
        timeuptext="Registration Closed"
      />
      <div className="flex justify-evenly  ">
        <div className="text-[#EDA822] w-1/3 border shadow-[2px_3px_2px_2px_#EDA822] p-4 rounded-lg  my-5 bg-white -mt-7">
          {popup == 3 ? (
            <div className="flex justify-center items-center flex-col ">
              <img src="/RobotGif.gif" className="h-60" />
              <h1 className="font-semibold text-xl text-green-500 text-center  my-6">
                Thank You, Registered Successfully.
              </h1>
            </div>
          ) : popup == 2 ? (
            <div className="flex justify-center items-center flex-col ">
              <img src="/RobotGif.gif" className="h-60" />
              <h1 className="font-semibold text-xl text-yellow-500  my-6">
                Already Registered . Register with other phone number.
              </h1>
            </div>
          ) : (
            <div>
              <div className="flex flex-col ">
                {/* <h1 className=" text-center text-base font-bold ">
                                Book a FREE Register
                            </h1> */}

                <div className="p-2 mt-4 space-y-3 ">
                  <Input
                    type="text"
                    placeholder="Enter  Name"
                    _placeholder={{ color: "#EDA822", fontSize: "15px" }}
                    value={RegisterData.name}
                    onChange={(e) => {
                      setRegisterData((data) => {
                        return { ...data, name: e.target.value };
                      });
                    }}
                  />
                  {/* <Input
                                    type="number"
                                    placeholder="Child's Age"
                                    _placeholder={{ color: "gray.400", fontSize: "15px" }}
                                    value={RegisterData.age}
                                    onChange={(e) => {
                                        setRegisterData((data: any) => {
                                            return { ...data, age: e.target.value };
                                        });
                                    }}
                                /> */}
                  <Select
                    onChange={(e: any) =>
                      setRegisterData((data) => {
                        return { ...data, country: e.target.value };
                      })
                    }
                    value={RegisterData.country}
                    backgroundColor={"#FBFAFF"}
                    placeholder="Select Country"
                  >
                    {countries.map((c, i) => {
                      return (
                        <option value={c} key={`${c}-${i}`}>
                          {c}
                        </option>
                      );
                    })}
                  </Select>
                  <InputGroup>
                    <InputLeftAddon children={RegisterData.countryCode} />
                    <Input
                      type="tel"
                      placeholder="Mobile Number(Whatsapp Only)"
                      _placeholder={{ color: "#EDA822", fontSize: "15px" }}
                      value={RegisterData.phoneNumber.slice(
                        RegisterData.countryCode.length,
                      )}
                      onChange={(e) => {
                        setRegisterData((data) => {
                          return {
                            ...data,
                            phoneNumber:
                              RegisterData.countryCode + e.target.value,
                          };
                        });
                      }}
                    />
                  </InputGroup>

                  <Input
                    type="text"
                    placeholder="Institute Name"
                    value={RegisterData.institution}
                    _placeholder={{ color: "#EDA822", fontSize: "15px" }}
                    onChange={(e) => {
                      setRegisterData((data) => {
                        return { ...data, institution: e.target.value };
                      });
                    }}
                  />
                  {/* <Input
                                    type="text"
                                    placeholder="Preferred Course"
                                    value={RegisterData.course}
                                    _placeholder={{ color: "gray.400", fontSize: "15px" }}
                                    onChange={(e) => {
                                        setRegisterData((data) => {
                                            return { ...data, course: e.target.value };
                                        });
                                    }}
                                /> */}
                </div>

                <div className="w-full flex justify-center"></div>
                <div className="w-full flex justify-center">
                  <button
                    className=" w-[95%] bg-orange-500 my-4 text-base rounded-[24px] p-2 text-white font-semibold active:scale-95 disabled:bg-[#ebdec4] disabled:cursor-not-allowed disabled:active:scale-100 z-20"
                    disabled={
                      disable2 ||
                      !RegisterData.name ||
                      !RegisterData.phoneNumber
                      // !RegisterData.age ||
                      // !RegisterData.course
                    }
                    onClick={() => addRegister(RegisterData)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-1/3 text-[22px] font-semibold space-y-4">
          <p className=" ">
            Scratch Contest unites participants of all continents. Scratch
            contest brings an opportunity for al to showcase creative and
            innovative skills.
          </p>
          <p className="   mt-2">
            {" "}
            Scratch is free programming environments designed to engage students
            in creative learning experience.{" "}
            <span className="font-thin italic text-lg">
              This Scratch contest is not affiliated with scratch or scratch
              foundation.
            </span>
          </p>
        </div>
      </div>
      <div className="h-1/6 bg-[#EDA822] rounded-xl py-12 ">
        <h1 className="text-white text-4xl font-bold text-center ">STEPS</h1>
        <TimeRemaining
          targetDate={targetDate}
          timenowtext="Submit Now !!"
          timeuptext="Times Up !!"
          timetext="Submission Starts in"
          textcolor="white"
        />
        <div className="flex justify-evenly items-center py-10 ">
          <img src="/events/steps.png" className="w-1/3" />

          <div className="h-[18rem]  bg-white flex flex-col justify-center items-center p-6 rounded-xl space-y-2 ">
            {uploadStatus == "uploaded" || uploadStatus == "failed" ? null : (
              <>
                <Input
                  placeholder="Enter your name"
                  focusBorderColor="orange.500"
                  type="text"
                  value={uploadname}
                  onChange={(e) => setUploadname(e.target.value)}
                  className="my-2"
                />
              </>
            )}

            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              disabled={disable}
              children={
                <>
                  {uploadStatus == "uploaded" ? (
                    <p className="text-center text-xl font-semibold text-green-500">
                      File Uploaded Successfully
                    </p>
                  ) : uploadStatus == "failed" ? (
                    <p className="text-center text-xl font-semibold text-red-500">
                      File Upload Failed
                    </p>
                  ) : uploadStatus == "missing-username" ? (
                    <p className="text-center text-xl font-semibold text-red-500">
                      Please Enter a Valid Name and Click here again
                    </p>
                  ) : (
                    <div className="flex flex-col justify-center items-center gap-2 text-black space-y-2 border-dotted border-2 border-red-800  p-8 rounded-xl">
                      <p className="text-center text-xl font-semibold  ">
                        Upload your SB3 file here
                      </p>

                      <p className="text-center text-sm font-semibold bg-red-300 rounded-full p-4 active:scale-90 ">
                        Click or Drag and Drop
                      </p>
                    </div>
                  )}
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
