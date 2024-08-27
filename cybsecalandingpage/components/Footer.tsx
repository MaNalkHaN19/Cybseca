"use client";
import React, { useState, type FC } from "react";
import Image from "next/image";
import up from "@/assets/up.png";
import down from "@/assets/down.png";
import LogoImg from "@/assets/CybsecaLogo.png";
import Link from "next/link";

interface SectionProps {
  title: string;
  links: { href: string; label: string }[];
}

const Section: React.FC<SectionProps> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="contact">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
      >
        <h3 className="text-white  text-sm lg:text-base mb-4">{title}</h3>
        <div
          className={`transition-transform duration-500 transform ${
            isOpen ? "rotate-180" : "rotate-180"
          }`}
        >
          <Image
            src={isOpen ? up : down}
            alt="toggle icon"
            width={16}
            height={16}
            className="lg:hidden md:hidden"
          />
        </div>
      </div>
      <ul className={`${isOpen ? "block" : "hidden"} md:block`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="hover:underline space-y-2 text-gray-400 text-xs hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0D36] text-white p-4 md:p-12 lg:p-16 space-y-4">
      <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Description */}
        <div className="flex flex-col  items-start  mb-6 md:mb-0 w-auto md:w-64 lg:w-96 space-y-5">
          <div className="flex items-center text-white text-lg font-bold md:text-xl lg:text-3xl">
            <Image
              src={LogoImg}
              alt="Cybseca Logo"
              className="w-14 md:w-16 lg:w-20"
            />
            <span className="ml-0 md:ml-2 lg:ml-2">Cybseca</span>
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 md:ml-3 lg:ml-4 ">
            A platform that helps you make appointments with specialist doctors
            easily and with fast service.
          </p>

          <div className="flex md:ml-4 lg:ml-6 pt-9 space-x-4">
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.55016 19.7497C16.6045 19.7497 21.5583 12.2465 21.5583 5.74162C21.5583 5.53068 21.5536 5.31505 21.5442 5.10412C22.5079 4.40722 23.3395 3.54401 24 2.55505C23.1025 2.95436 22.1496 3.21514 21.1739 3.32849C22.2013 2.71266 22.9705 1.74523 23.3391 0.605523C22.3726 1.17831 21.3156 1.58237 20.2134 1.80037C19.4708 1.01132 18.489 0.488872 17.4197 0.313807C16.3504 0.138742 15.2532 0.320806 14.2977 0.831852C13.3423 1.3429 12.5818 2.15446 12.1338 3.14107C11.6859 4.12767 11.5754 5.23437 11.8195 6.29005C9.86249 6.19185 7.94794 5.68346 6.19998 4.79785C4.45203 3.91225 2.90969 2.66919 1.67297 1.14927C1.0444 2.233 0.852057 3.5154 1.13503 4.73585C1.418 5.95629 2.15506 7.0232 3.19641 7.71974C2.41463 7.69492 1.64998 7.48444 0.965625 7.10568V7.16662C0.964925 8.30391 1.3581 9.40634 2.07831 10.2865C2.79852 11.1667 3.80132 11.7703 4.91625 11.9947C4.19206 12.1929 3.43198 12.2218 2.69484 12.0791C3.00945 13.0572 3.62157 13.9126 4.44577 14.5261C5.26997 15.1395 6.26512 15.4804 7.29234 15.501C5.54842 16.8709 3.39417 17.6139 1.17656 17.6104C0.783287 17.6098 0.390399 17.5857 0 17.5382C2.25286 18.9835 4.87353 19.7511 7.55016 19.7497Z"
                fill="white"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_14_521)">
                <path
                  d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_14_521">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_14_524)">
                <path
                  d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_14_524">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        {/* Links Section */}
        <div className="w-full md:w-auto flex flex-col md:flex-row justify-end space-y-6 md:space-y-0 md:space-x-10 ">
          {/* Legal Links */}
          <Section
            title="Legal"
            links={[
              { href: "#", label: "Term" },
              { href: "#", label: "Privacy" },
              { href: "#", label: "Cookies" },
              { href: "#", label: "Settings" },
            ]}
          />
          {/* Resources Links */}
          <Section
            title="Resources"
            links={[
              { href: "#", label: "Blog" },
              { href: "#", label: "Events" },
              { href: "#", label: "Help Center" },
              { href: "#", label: "Support" },
            ]}
          />
          {/* Additional Resources Links */}
          <Section
            title="Resources"
            links={[
              { href: "#", label: "Blog" },
              { href: "#", label: "Events" },
              { href: "#", label: "Help Center" },
              { href: "#", label: "Support" },
            ]}
          />
        </div>
      </div>
      {/* Footer Bottom Text */}
      <div className="container mx-auto px-10 mt-14 text-center text-gray-400 text-sm">
        <p>Copyrighted © 2024 UI UX By Sansitve.std</p>
      </div>
    </footer>
  );
};

export default Footer;
