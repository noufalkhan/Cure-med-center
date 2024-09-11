"use client";
import { IconArrowAutofitDown, IconCalendar, IconDroplet, IconGenderAgender, IconGenderFemale, IconUser, IconUserDown } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/ContextProvider";

const HeroSection = () => {
  const { userState, setUserState } = useDataContext();

  console.log("userState", userState);

  const [userData, setUserData] = useState([]);

  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 ">
      {/* First Card */}
      <div className="bg-base-100 shadow-md rounded-xl p-5 flex flex-col justify-between gap-5">
        <div className="flex justify-between">


          {/* {userData && userData[0] && (
            <div className="flex gap-3" key={userData[0].id}>
              <div className="md:h-28 md:w-28 h-16 w-16">
                <img
                  className="object-contain max-w-full max-h-full rounded-lg"
                  src="/img/user3.jpg"
                  alt="doc image"
                />
              </div>
              <div>
                <div className="font-semibold">{userData[0].patientName}</div>
                <div className="font-light">{userData[0].phoneNumber}</div>
              </div>
            </div>
          )} */}

          <div>
          <div className="flex gap-3" >
              <div className="md:h-28 md:w-28 h-16 w-16">
                <img
                  className="object-contain max-w-full max-h-full rounded-lg"
                  src="/img/user3.jpg"
                  alt="doc image"
                />
              </div>
              <div className="p-3">
                <div className="font-semibold">John Wick</div>
                <div className="font-light">485789</div>
              </div>
            </div>
          </div>


          <div>


          <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">
    <IconUserDown/>
  </div>
  <ul tabIndex={0} className="dropdown-content menu  rounded-box z-[1] w-52 p-2 shadow bg-base-200 ">
    <li><a>Leonardo</a></li>
    <li><a>Robert Downy</a></li>
  </ul>
</div>
          </div>
        </div>

        <div>
          {/* <p className="md:font-bold md:text-xl">Details of family</p>
          <p className="font-light md:font-bold">Details of family</p> */}




<div className="grid grid-cols-2 md:grid-cols-4 glass gap-5 justify-center items-center  p-2 rounded-lg">
  <div className="flex gap-2 items-center scale-75 md:scale-100">
    <div><IconGenderFemale/></div>
    <div>
      <div className="text-sm font-thin">Gender</div>
      <div>Female</div>
    </div>
  </div>

  <div className="flex gap-2 items-center scale-75 md:scale-100">
    <div><IconCalendar/></div>
    <div>
      <div className="text-sm font-thin">Date Of Birth</div>
      <div>01-18-1997</div>
    </div>
  </div>

  <div className="flex gap-2 items-center scale-75 md:scale-100">
    <div><IconDroplet/></div>
    <div>
      <div className="text-sm font-thin">Blood Group</div>
      <div>O -ve</div>
    </div>
  </div>

  <div className="flex gap-2 items-center scale-75 md:scale-100">
    <div><IconUser/></div>
    <div>
      <div className="text-sm font-thin">Age</div>
      <div>28</div>
    </div>
  </div>
</div>



        </div>

        <div className="card-actions">
          <button className="btn btn-warning btn-outline md:btn-md btn-sm">
            View Details
          </button>
        </div>
      </div>

      {/* Second Card */}
      <div className="w-full shadow-md flex rounded-xl bg-base-100">
        <div className="w-4/6 md:w-3/5 flex flex-col gap-5 p-5 justify-between">
          <div className="gap-5 flex flex-col">
            <p className="text-md font-normal sm:text-3xl w-full">
            Set Up Your Next Check-Up!
            </p>
            <p className="text-sm font-light sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="card-actions">
            <Link href="/booking-details">
              <button className="btn btn-warning btn-sm md:btn-md">
                New Appointment
              </button>
            </Link>
          </div>
        </div>

        <div className="h-full w-2/6 md:w-2/5 my-auto flex items-center justify-center relative">
          <img
            className="object-contain max-w-full max-h-full absolute bottom-0 sm:static sm:bottom-auto"
            src="./img/med.png"
            alt="doc img"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
