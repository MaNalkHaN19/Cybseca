import React from "react";
import Box from "./box";

const EmpoweringSafety: React.FC = () => {
  return (
    <section id="Home" className=" space-y-8">
      <div className="py-10 space-y-8">
        <div className="flex items-center justify-center space-x-3">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-semibold text-gray-900">
            Empowering Digital
          </h1>
          <button className="ml-4 py-1 md:py-2 px-3 md:px-4 text-sm md:text-base lg:text-lg bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
            Read More &rarr;
          </button>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-semibold text-gray-900">
            Confidence
          </h1>
          <span className="flex items-center space-x-2 px-2 md:px-3 py-1 md:py-2 border border-gray-400 rounded-full hover:shadow-sm hover:shadow-purple-400">
            <span className="relative flex">
              <span className="inline-block w-6 h-6 md:w-auto md:h-auto lg:w-9 lg:h-9 bg-gray-400 rounded-full"></span>
              <span className="inline-block w-6 h-6 md:w-auto md:h-auto lg:w-9 lg:h-9 border border-white bg-gray-400 rounded-full ml-[-10px] md:ml-[-12px] lg:ml-[-14px]"></span>
              <span className="inline-block w-6 h-6 md:w-auto md:h-auto lg:w-9 lg:h-9 border border-white bg-gray-400 rounded-full ml-[-10px] md:ml-[-12px] lg:ml-[-14px]"></span>
            </span>
            <span className="inline-block py-1 px-2 md:px-3 text-sm md:text-base lg:text-lg text-indigo-600 font-semibold ml-2">
              287+
            </span>
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-semibold text-gray-900">
            Ensuring Safety.
          </h1>
        </div>
      </div>
      <Box />
    </section>
  );
};

export default EmpoweringSafety;
