import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <section className="flex justify-center items-center mt-24 mb-16 mx-8 lg:mx-16">
        <div className="w-full bg-blue-950 text-white rounded-3xl flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="lg:w-2/4 space-y-6 pl-8 lg:pl-16 py-8 lg:py-16 pr-8">
            <Link href={"#AboutUs"} className="text-indigo-300 text-lg">
              Our About Us
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold leading-snug">
              Strengthening Defenses, <br />
              Securing Networks.
            </h1>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                At Vero Eos Et Accusamus Et Iusto
              </h4>
              <p className="text-gray-300">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                At Vero Eos Et Accusamus Et Iusto
              </h4>
              <p className="text-gray-300">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
              </p>
            </div>
          </div>

          {/* Gray Box */}
          <div className="lg:w-2/4 flex flex-col items-center lg:items-end">
            <div className="bg-gray-400 w-full h-64 sm:h-72 md:h-96 lg:h-4/6 rounded-tr-3xl rounded-bl-3xl"></div>
            <div className="space-y-4 mt-6 px-8 lg:px-0 lg:pr-16">
              <h4 className="text-lg font-semibold">
                At Vero Eos Et Accusamus Et Iusto
              </h4>
              <p className="text-gray-300">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
