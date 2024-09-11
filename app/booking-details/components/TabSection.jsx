"use client";
import { useEffect, useState } from "react";
import Doctors from "./Doctors";
import Specialties from "./Specialities";
import { useDataContext } from "../../context/ContextProvider";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const { specialtiesData } = useDataContext();
  const [allDoctors, setAllDoctors] = useState([]);

  useEffect(() => {
    if (activeTab === "tab1") {
      const allDoctorsList = specialtiesData.flatMap(
        (specialty) => specialty.doctors
      );
      setAllDoctors(allDoctorsList);
    }
  }, [activeTab]);

  const handleSpecialityClick = (id) => {
    const specialities = specialtiesData.find((sp) => sp.id === id);
    if (specialities && specialities.doctors) {
      setAllDoctors(specialities.doctors);
      setActiveTab("tab2");
    }
  };

  return (
    <div className="flex flex-col items-center  ">
      <div className="flex gap-3 m-4">
        <button
          className={`btn  ${
            activeTab === "tab1" ? "btn-accent " : "btn-outline "
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Specialities
        </button>
        <button
          className={`btn  ${
            activeTab === "tab2" ? "btn-accent" : "btn-outline"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Doctors
        </button>
      </div>
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="w-full m-5">
        {activeTab === "tab1" && (
          <div>
            <Specialties handleSpecialityClick={handleSpecialityClick} />
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <Doctors doctorsList={allDoctors} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSection;
