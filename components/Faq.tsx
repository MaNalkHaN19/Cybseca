// "use client";
// import Link from "next/link";
// import React from "react";
// import { useState } from "react";

// type FAQItem = {
//   question: string;
//   answer: string;
// };

// const faqItems: FAQItem[] = [
//   {
//     question: "Bridging Vision With Strategy For Success.",
//     answer:
//       "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes...",
//   },
//   {
//     question: "Bridging Vision With Strategy For Success.",
//     answer:
//       "Nor again is there anyone who loves or pursues or desires to obtain pain of itself...",
//   },
//   {
//     question: "Bridging Vision With Strategy For Success.",
//     answer:
//       "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes...",
//   },
//   {
//     question: "Bridging Vision With Strategy For Success.",
//     answer:
//       "Nor again is there anyone who loves or pursues or desires to obtain pain of itself...",
//   },

//   // Add more FAQ items here
// ];

// export default function page() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <>
//       <section>
//         <div className="flex flex-col text-center content-center justify-center">
//           {" "}
//           <Link href={"#Faq"} className="text-blue-400 text-sm hover:underline">FAQS</Link>
//           <h1 className="text-black text-3xl text-bold">Frequently Asked Questions</h1>
//         </div>

//         <div className="bg-indigo-600 w-3/12  md:h-96 rounded-r-xl  -bottom-8 lg:-top-16 left-0"></div>
//         <div className="flex justify-center items-center content-center left-12 sm:left-16 md:left-24  lg:top-4">
//           <div className="bg-gray-300 w-[550px] h-[350px] rounded-3xl "></div>
//           <div className="ml-8 mt-16 w-1/3 ">
//             <ul>
//               {faqItems.map((item, index) => (
//                 <li key={index} className="mb-4">
//                   <button
//                     className="w-full text-left text-xl font-semibold flex justify-between items-center"
//                     onClick={() => toggleFAQ(index)}
//                   >
//                     {item.question}
//                     <span className="ml-2 text-2xl">
//                       {activeIndex === index ? "−" : "+"}
//                     </span>
//                   </button>
//                   {activeIndex === index && (
//                     <p className="mt-2 text-gray-600">{item.answer}</p>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import Link from "next/link";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Bridging Vision With Strategy For Success.",
    answer:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes...",
  },
  {
    question: "Bridging Vision With Strategy For Success.",
    answer:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself...",
  },
  {
    question: "Bridging Vision With Strategy For Success.",
    answer:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes...",
  },
  {
    question: "Bridging Vision With Strategy For Success.",
    answer:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself...",
  },
  {
    question: "Bridging Vision With Strategy For Success.",
    answer:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes...",
  },
  {
    question: "Bridging Vision With Strategy For Success.",
    answer:
      "Nor again is there anyone who loves or pursues or desires to obtain pain of itself...",
  },
  // Add more FAQ items here
 ];

 export default function FAQ() {
 const [activeIndex, setActiveIndex] = useState<number | null>(0);

 const toggleFAQ = (index: number) => {
   setActiveIndex(activeIndex === index ? null : index);
 };

   return (
    <section id="Faq" className="py-6 my-5 space-y-2 lg:space-y-6 md:space-y-4">
      <div className="text-center align-middle items-center space-y-3">
        <Link href={"#Faq"} className="text-blue-400 text-center">
          FAQs
        </Link>
        <h2 className="text-3xl font-bold text-center lg:text-center md:text-center mb-8">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        {/* Image Placeholder */}
        <div className="relative flex w-full md:w-1/4  ">
          <div className=" bg-indigo-600 md:block md:w-auto md:h-auto lg:w-5/6 lg:h-[550px]  rounded-r-xl mb-8 md:mb-0 md:mr-8 relative">
            <div className="absolute bg-gray-400 w-auto h-auto lg:w-[550px] lg:h-[430px] rounded-3xl  left-8 md:left-12 md:top-14"></div>
          </div>
        </div>


<div className="mx-5 mt-16 w-auto lg:w-1/3 lg:ml-96 md:mx-2">
  <ul>
    {faqItems.map((item, index) => (
      <li key={index} className="mb-4">
        <button
          className="w-full text-left text-xl font-semibold flex justify-between items-center"
          onClick={() => toggleFAQ(index)}
        >
          {item.question}
          <span className="ml-2 text-2xl">
            {activeIndex === index ? "−" : "+"}
          </span>
        </button>
        {activeIndex === index && (
          <p className="mt-2 text-gray-600">{item.answer}</p>
        )}
      </li>
    ))}
  </ul>
</div>
      </div>
    </section>
  );
}
