import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import { useDataContext } from "../../context/ContextProvider";

const Specialties = ({ handleSpecialityClick }) => {
  const { specialtiesData } = useDataContext();
  return (
    <div className=" h-screen w-full container mx-auto px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {specialtiesData.map((specialty, index) => (
          <div
            key={index}
            className="bg-base-100 rounded-xl md:rounded-3xl   h-28 flex items-center justify-between px-5"
          >
            <div className="gap-5 flex items-center justify-center ">
              <div className="card bg-accent bg-opacity-20 h-20 w-20 flex items-center justify-center ">
                {specialty.icon}
              </div>
              <div className="flex flex-col gap-1+">
                <p className="text-xl">{specialty.title}</p>
                <p className="text-sm">{specialty.description}</p>
              </div>
            </div>
            <div
              role="button"
              onClick={() => handleSpecialityClick(specialty.id)}
            >
              <IconArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
