import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <section id="About" className="flex flex-col lg:flex-row mt-24 mb-16 lg:mr-24 relative ">
        {/* Boxes */}
        <div className="flex relative w-full lg:w-1/2 justify-center lg:justify-start mb-12 lg:mb-0 z-10">
          {/* Blue Box (Hidden on small and medium screens) */}
          <div className="absolute w-48 h-36 sm:w-56 sm:h-40 md:w-64 md:h-48 bg-indigo-600 rounded-e-3xl -top-8 lg:-top-16 left-0 lg:left-0 hidden lg:block"></div>
          {/* Gray Box */}
          <div className="relative bg-gray-400 sm:w-10/12 w-10/12 h-[380px] md:w-full md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-3xl lg:absolute lg:left-12 sm:left-0 top-2 lg:top-4 mx-8 lg:mx-0 mb-8 lg:mb-0"></div>
          {/* Play Demo Button */}
          <div className="absolute lg:bg-white lg:w-56 lg:h-24 w-40 h-22 md:w-44 md:h-24 rounded-tl-3xl left-[120px] sm:left-[200px] md:left-[270px] top-[250px] sm:top-[320px] md:top-[370px] lg:left-[330px] lg:top-[420px]">
            <button className="absolute border m-7 sm:my-4 sm:mx-4 border-indigo-500 text-indigo-500 rounded-full bg-white lg:px-10 lg:py-1.5 px-5 py-2 md:px-6 md:py-2 flex items-center lg:gap-2 gap-3 md:gap-4 hover:shadow-blue-500 hover:shadow-sm">
              <div className="p-2 sm:p-2.5 md:p-3 bg-indigo-500 rounded-full">
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 14 18"
                  fill="indigo"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 17.75V0.25L13.75 9L0 17.75ZM2.5 13.1875L9.0625 9L2.5 4.8125V13.1875Z"
                    fill="white"
                  />
                </svg>
              </div>
              Play Demo
            </button>
          </div>
        </div>
        {/* Text Data */}
        <div className="w-full lg:w-6/12 px-4 sm:px-8 lg:px-4 lg:pl-24">
          <Link href={"#About"} className="text-indigo-600 text-lg">
            About Us
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mt-4 leading-snug">
            Strengthening Defenses, <br />
            Securing Networks
          </h1>
          <p className="text-gray-600 mt-6 leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem.
          </p>
          <h4 className="text-indigo-600 mt-8 font-bold">
            At Vero Eos Et Accusamus Et Iusto
          </h4>
          <p className="text-gray-600 mt-2">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate
          </p>
          <hr className="mt-8 border-gray-300" />
          <div className="flex flex-col sm:flex-row sm:space-x-4 lg:space-x-8 mt-6">
            <div className="flex flex-col mb-4 sm:mb-0">
              <span className="text-2xl font-bold">297+</span>
              <span className="text-gray-500">Molestias Excepituri Sint</span>
            </div>
            <div className="flex flex-col mb-4 sm:mb-0">
              <span className="text-2xl font-bold">17K</span>
              <span className="text-gray-500">Occaecati Cupiditate</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">78%</span>
              <span className="text-gray-500">Cupiditate Non Provident</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
