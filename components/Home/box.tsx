import React from "react";

const CertainCircumstances: React.FC = () => {
  return (
    <div className="w-11/12 flex flex-col md:flex-row h-auto md:h-96 mx-auto lg:mx-16 p-4 md:p-0">
      <div className="bg-gray-400  md:w-3/5 h-64 md:h-96 rounded-3xl mb-4 md:mb-0 "></div>
      <div className="flex flex-col md:w-2/4">
        {/* This div will be hidden on small screens */}
        <div className="hidden md:block bg-gray-400 w-full h-64 md:h-3/4 rounded-3xl md:-ml-10 mb-4 md:mb-0"></div>
        <div className="bg-white rounded-tl-3xl w-full md:w-11/12 h-auto  md:h-3/4 -ml-4  lg:p-2 md:p-0">
          <div className="bg-indigo-500 w-full rounded-3xl mt-4 ml-0 md:ml-4 flex flex-col md:flex-row p-4 md:p-7 text-gray-200">
            <div className="w-full md:w-1/4 lg:w-1/4 bg-gray-300 rounded-3xl h-24 md:h-auto mb-4 md:mb-0"></div>
            <div className="ml-0 md:ml-4 w-full md:w-2/3">
              <h2 className="text-xs lg:text-xl md:text-sm font-semibold">Certain Circumstances</h2>
              <p className="text-xs md:text-sm font-light mt-1 leading-tight">
                But in certain circumstances and owing to the test claims of duty or the obligations of
              </p>
              <hr className="mt-2"></hr>
              <div className="flex flex-col md:flex-row items-start md:items-center mt-2 md:space-x-8 space-y-4 md:space-y-0">
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold">120+</span>
                  <span className="text-xs md:text-sm font-light">But in circumstances</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold">89%</span>
                  <span className="text-xs md:text-sm font-light">But will in circumstances</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertainCircumstances;
