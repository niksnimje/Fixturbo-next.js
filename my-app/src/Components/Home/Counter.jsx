import React from 'react'
import { LuBookAudio } from "react-icons/lu";
import { FaTools, FaCarCrash, FaWrench } from "react-icons/fa";

function Counter() {

  const count = [
    {
      icon: <LuBookAudio />,
      numberofCount: "2,540+",
      label: "Project Done"
    },
    {
      icon: <FaTools />,
      numberofCount: "1,200+",
      label: "Repairs Completed"
    },
    {
      icon: <FaCarCrash />,
      numberofCount: "800+",
      label: "Accidents Handled"
    },
    {
      icon: <FaWrench />,
      numberofCount: "950+",
      label: "Custom Services"
    },
  ];

  return (
    <div className="container mx-auto bg-theam py-16 ps-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          count.map((el, index) => (
            <div key={index} className="flex border-e-2 border-e-white space-x-4 px- group ">
              <div className="bg-white rounded-full h-[80px] w-[80px] flex justify-center items-center">
                <i className="text-3xl text-theam transform transition-transform duration-500 group-hover:rotate-y-180">
                  {el.icon}
                </i>
              </div>
              <div className="text-white">
                <h2 className="text-2xl font-bold font-yantramanav">
                  {el.numberofCount} <br /> {el.label}
                </h2>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Counter;
