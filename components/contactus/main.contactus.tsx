import React from "react";

function Contact() {
  return (
    <div
      className="bg-slate-800 text-white p-10 font-quicksand pb-12"
      id="contactus"
    >
      <h1 className="text-2xl text-center mb-5 lg:mb-0 font-semibold">
        Contact US
      </h1>

      <div className="space-y-12 flex lg:flex-row flex-col items-center justify-evenly text-center">
        <div>
          <h1 className="text-xl my-3">Black Bird RobotiXs </h1>
          Email: blackbirdrobotix10@gmail.com
        </div>
        <div>
          <h1 className="text-xl  my-3">Address </h1>
          BlackBird RobotiX, 7/29, <br></br> Ramkrishna Pally, Chit Kalikapur,
          Mukundapur<br></br>
          Kolkata - 700099 West Bengal India
        </div>
        <div>
          <h1 className="text-xl  my-3">Mobile Contact </h1>
          Online/Offline classes - 8013100878<br></br>
          School quarries - 8013100878
        </div>
      </div>
    </div>
  );
}

export default Contact;
