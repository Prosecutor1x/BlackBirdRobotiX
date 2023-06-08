import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

interface DemoProps {
  phoneNumber: string;
  emailId: string;
  name: string;
}

const Demo = () => {
  const [demoData, setDemoData] = useState<DemoProps>({
    phoneNumber: "",
    emailId: "",
    name: "",
  });
  const [popup, setPopup] = React.useState(0);

  async function addDemo(demodata: DemoProps) {
    if (demodata) {
      const demoRef = doc(db, "demo", demodata.emailId);
      const demoSnap = await getDoc(demoRef);
      if (demoSnap.exists()) {
        setPopup(2);
        setDemoData({
          name: "",
          emailId: "",
          phoneNumber: "+91",
        });
        setTimeout(()=>{
            setPopup(0)
        },4000)
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
    <div className="text-slate-700 border shadow-[1px_1px_2px_2px_#d1d1d1] p-4 rounded-lg ">
      {popup == 3 ? (
        <div className="flex justify-center items-center flex-col ">
            <img src="/success.png" className="h-60"/>
          <h1 className="font-semibold text-xl text-green-500  my-6">Sucessfully Registered</h1>
        </div>
      ) : popup == 2 ? (
        <div className="flex justify-center items-center flex-col ">
        <img src="/success.png" className="h-60"/>
      <h1 className="font-semibold text-xl text-yellow-500  my-6">Already Registered  </h1>
    </div>
      ) : (
        <div>
          <div>
            <h1 className=" text-center text-lg">
              🌟 Dive into the world of knowledge: Book your ✨ demo class
              today! ✨
            </h1>
            <div className="p-2 mt-4 space-y-3">
              <Input
                type="text"
                placeholder="Name"
                value={demoData.name}
                onChange={(e) => {
                  setDemoData((data) => {
                    return { ...data, name:  e.target.value };
                  });
                }}
              />
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={demoData.phoneNumber.slice(3)}
                  onChange={(e) => {
                    setDemoData((data) => {
                      return { ...data, phoneNumber:"+91" + e.target.value };
                    });
                  }}
                />
              </InputGroup>
              <Input
                type="text"
                placeholder="Email Id"
                value={demoData.emailId}
                onChange={(e) => {
                  setDemoData((data) => {
                    return { ...data, emailId: e.target.value };
                  });
                }}
              />
            </div>
            <button
              className="w-full bg-slate-800 my-4 rounded-md p-2 text-white font-semibold active:scale-95 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:active:scale-100"
              disabled={
                !demoData.emailId || !demoData.name || !demoData.phoneNumber
              }
              onClick={() => addDemo(demoData)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;
