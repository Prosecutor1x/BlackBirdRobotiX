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

interface DemoProps {
  phoneNumber: string;
  emailId: string;
  name: string;
  countryCode: string;
  country: string;
  age: number;
}

const Demo = () => {
  const [demoData, setDemoData] = useState<DemoProps>({
    phoneNumber: "",
    emailId: "",
    name: "",
    countryCode: "",
    country: "",
    age: NaN,
  });
  const [popup, setPopup] = React.useState(0);
  useEffect(() => {
    const tempCode = countryCodes.find((data) => data.name == demoData.country);
    tempCode &&
      setDemoData((data) => {
        return { ...data, countryCode: tempCode.dial_code };
      });
  }, [demoData.country]);

  async function addDemo(demodata: DemoProps) {
    if (demodata) {
      const demoRef = doc(db, "demo", demodata.emailId);
      const demoSnap = await getDoc(demoRef);
      if (demoSnap.exists()) {
        setPopup(2);
        setDemoData({
          name: "",
          emailId: "",
          countryCode: "",
          phoneNumber: "",
          country: "",
          age: NaN,
        });
        setTimeout(() => {
          setPopup(0);
        }, 4000);
      } else {
        try {
          await setDoc(demoRef, demodata);
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
    <div className="text-slate-700 border shadow-[1px_1px_2px_1px_#d1d1d1] p-4 rounded-lg  mt-16 bg-white ">
      {popup == 3 ? (
        <div className="flex justify-center items-center flex-col ">
          <img src="/success.png" className="h-60" />
          <h1 className="font-semibold text-xl text-green-500  my-6">
            Sucessfully Registered . You will be contacted soon{" "}
          </h1>
        </div>
      ) : popup == 2 ? (
        <div className="flex justify-center items-center flex-col ">
          <img src="/success.png" className="h-60" />
          <h1 className="font-semibold text-xl text-yellow-500  my-6">
            Already Registered{" "}. Try registering with another email id .
          </h1>
        </div>
      ) : (
        <div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className=" text-center text-base font-bold ">
              Book a Demo Session
            </h1>
            
            <div className="p-2 mt-4 space-y-3">
              <Input
                type="text"
                placeholder="Child's Name"
                _placeholder={{ color: "gray.400" ,fontSize:"15px"}}
                value={demoData.name}
                onChange={(e) => {
                  setDemoData((data) => {
                    return { ...data, name: e.target.value };
                  });
                }}
              />
              <Input
                type="number"
                placeholder="Age"
                _placeholder={{ color: "gray.400" ,fontSize:"15px"}}
                value={demoData.age}
                onChange={(e) => {
                  setDemoData((data :any) => {
                    return { ...data, age: e.target.value };
                  });
                }}
              />
              <Select
         
                onChange={(e: any) =>
                  setDemoData((data) => {
                    return { ...data, country: e.target.value };
                  })
                }
                value={demoData.country}
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
                <InputLeftAddon children={demoData.countryCode} />
                <Input
                  type="tel"
                  placeholder="Phone Number (Whatsapp)"
                  _placeholder={{ color: "gray.400" ,fontSize:"15px"}}
                  value={demoData.phoneNumber.slice(
                    demoData.countryCode.length
                  )}
                  onChange={(e) => {
                    setDemoData((data) => {
                      return {
                        ...data,
                        phoneNumber: demoData.countryCode + e.target.value,
                      };
                    });
                  }}
                />
              </InputGroup>
              
              <Input
                type="text"
                placeholder="Email Id"
                value={demoData.emailId}
                _placeholder={{ color: "gray.400" ,fontSize:"15px"}}
                onChange={(e) => {
                  setDemoData((data) => {
                    return { ...data, emailId: e.target.value };
                  });
                }}
              />
            </div>
            <button
              className="w-[95%]  bg-theme my-4 text-base rounded-md p-2 text-white font-semibold active:scale-95 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:active:scale-100"
              disabled={
                !demoData.emailId || !demoData.name || !demoData.phoneNumber
              }
              onClick={() => addDemo(demoData)}
            >
              Book
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;
