import React, { useEffect, useState } from 'react';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select
} from '@chakra-ui/react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';
import countries from '@/database/countries';
import { countryCodes } from '@/database/CountryCodes';
import { FileUploader } from 'react-drag-drop-files';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { uploadSB3File } from '@/functions/addFile';

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
    phoneNumber: '',
    // emailId: "",
    name: '',
    countryCode: '+91',
    country: 'India',
    // age: NaN,
    // course: "",
    institution: ''
  });
  const [popup, setPopup] = React.useState(0);
  const fileTypes = ['SB3'];

  const [file, setFile] = useState(null);

  const handleChange = (file: any) => {
    setFile(file);
    const sb3File: File = file;
    const username: string = RegisterData.name;
    uploadSB3File(sb3File, username)
      .then(() => {
        console.log('File upload completed');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    const tempCode = countryCodes.find(
      data => data.name == RegisterData.country
    );
    tempCode &&
      setRegisterData(data => {
        return { ...data, countryCode: tempCode.dial_code };
      });
  }, [RegisterData.country]);

  async function addRegister(Registerdata: RegisterProps) {
    if (Registerdata) {
      const RegisterRef = doc(db, 'register', Registerdata.phoneNumber);
      const RegisterSnap = await getDoc(RegisterRef);
      if (RegisterSnap.exists()) {
        setPopup(2);
        setRegisterData({
          name: '',
          // emailId: "",
          countryCode: '',
          phoneNumber: '',
          country: '',
          // age: NaN,
          // course: "",
          institution: ''
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
      console.log('No value entered');
    }
  }

  return (
    <>
      <div className="flex justify-evenly  py-12">
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
                    _placeholder={{ color: '#EDA822', fontSize: '15px' }}
                    value={RegisterData.name}
                    onChange={e => {
                      setRegisterData(data => {
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
                      setRegisterData(data => {
                        return { ...data, country: e.target.value };
                      })
                    }
                    value={RegisterData.country}
                    backgroundColor={'#FBFAFF'}
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
                      _placeholder={{ color: '#EDA822', fontSize: '15px' }}
                      value={RegisterData.phoneNumber.slice(
                        RegisterData.countryCode.length
                      )}
                      onChange={e => {
                        setRegisterData(data => {
                          return {
                            ...data,
                            phoneNumber:
                              RegisterData.countryCode + e.target.value
                          };
                        });
                      }}
                    />
                  </InputGroup>

                  <Input
                    type="text"
                    placeholder="Institute Name"
                    value={RegisterData.institution}
                    _placeholder={{ color: '#EDA822', fontSize: '15px' }}
                    onChange={e => {
                      setRegisterData(data => {
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
                    className=" w-[95%] bg-orange-500 my-4 text-base rounded-[24px] p-2 text-white font-semibold active:scale-95 disabled:bg-[#EDA822] disabled:cursor-not-allowed disabled:active:scale-100 z-20"
                    disabled={
                      !RegisterData.name || !RegisterData.phoneNumber
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
            {' '}
            Scratch is free programming environments designed to engage students
            in creative learning experience. The Scratch contest is not
            affiliated with scratch or scratch foundation.
          </p>
        </div>
      </div>
      <div className="h-1/6 bg-[#EDA822] rounded-full ">
        <h1 className="text-white text-4xl font-bold text-center pt-12">
          STEPS
        </h1>
        <div className="flex justify-center items-center p-12 gap-24">
          <img src="/events/steps.png" className="w-1/2" />
          <div className="h-32 bg-white flex justify-center items-center p-12 rounded-full ">
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
