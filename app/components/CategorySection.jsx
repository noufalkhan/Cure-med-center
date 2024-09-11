import {
  IconActivityHeartbeat,
  IconBed,
  IconCalendar,
  IconHistory,
  IconReportMedical,
  IconVaccine,
} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";

const CategorySection = () => {
  return (
    <div className=" mt-10">
      <div className="font-bold text-xl mb-5">Category</div>

      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 md:gap-5 p-3">
        <div className="card h-28 sm:h-28  md:h-48 w-full bg-base-100 shadow-sm items-center justify-evenly">
          <IconCalendar stroke={1} className="text-teal-800 font-thin dark:text-teal-500 w-10 h-10 md:w-16 md:h-16 " />
          <p className=" text-sm font-light md:font-normal md:text-xl">
            Appointment
          </p>
        </div>

        <div className="card h-28 sm:h-28 md:h-48 w-full bg-base-100 shadow-sm hover:shadow-xl items-center justify-evenly">
          <IconHistory stroke={1} className="text-teal-800 dark:text-accent w-10 h-10 md:w-16 md:h-16 " />
          <p className="text-sm font-light md:font-normal md:text-xl">
            Visit History
          </p>
        </div>

        <div className="card h-28 sm:h-28  md:h-48 w-full bg-base-100 shadow-sm items-center justify-evenly">
          <IconBed stroke={1} className="text-teal-800 dark:text-teal-500 w-10 h-10 md:w-16 md:h-16 " />
          <p className=" text-sm md:text-xl text-center  font-light md:font-normal ">
            Discharge Summary
          </p>
        </div>

        <div className="card h-28 sm:h-28  md:h-48 w-full bg-base-100 shadow-sm items-center justify-evenly">
          <IconReportMedical stroke={1} className="text-teal-800 dark:text-teal-500 w-10 h-10 md:w-16 md:h-16 " />
          <p className="text-sm font-light md:font-normal md:text-xl">
            Lab Report
          </p>
        </div>

        <div className="card h-28 sm:h-28  md:h-48 w-full bg-base-100 shadow-sm items-center justify-evenly">
          <IconActivityHeartbeat stroke={1} className="text-teal-800 dark:text-teal-500 w-10 h-10 md:w-16 md:h-16 " />
          <p className="text-sm md:text-xl text-center w-3/4 font-light md:font-normal ">
            Radiology Report
          </p>
        </div>

        <div className="card h-28 sm:h-28  md:h-48 w-full bg-base-100 shadow-sm items-center justify-evenly">
          <IconVaccine stroke={1} className="text-teal-800 dark:text-teal-500 w-10 h-10 md:w-16 md:h-16 " />
          <p className=" text-sm md:text-xl text-center w-3/4 font-light md:font-normal  ">
            Immunization
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
