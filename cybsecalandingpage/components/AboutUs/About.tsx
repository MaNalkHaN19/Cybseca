import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <section id="About" className="flex flex-col lg:flex-row mt-24 mb-16 lg:mr-24">
        {/* Boxes */}
        <div className="flex relative w-full lg:w-1/2 justify-center lg:justify-start mb-12 lg:mb-0">
          <div className="absolute w-48 h-36 sm:w-56 sm:h-40 md:w-64 md:h-48 bg-indigo-600 rounded-e-3xl -top-8 lg:-top-16 left-0"></div>
          <div className="absolute bg-gray-400 w-72 h-96 sm:w-[300px] sm:h-[380px] md:w-[350px] md:h-[450px] rounded-3xl left-12 sm:left-16 md:left-24 top-2 lg:top-4"></div>
          <div className="absolute bg-white w-36 h-20 sm:w-40 sm:h-22 md:w-44 md:h-24 rounded-tl-xl left-[170px] sm:left-[200px] md:left-[270px] top-[290px] sm:top-[320px] md:top-[370px]">
            <button className="absolute border my-3 mx-3 sm:my-4 sm:mx-4 border-indigo-500 text-indigo-500 rounded-full bg-white px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2 flex items-center gap-2 sm:gap-3 md:gap-4 hover:shadow-blue-500 hover:shadow-sm">
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
        <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-0">
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
