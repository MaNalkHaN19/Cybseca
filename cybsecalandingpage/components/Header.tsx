"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoImg from "@/assets/CybsecaLogo.png";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center py-3 px-10">
        <div className="flex items-center">
          <Link href={"/"}>
            <div className="flex items-center text-black text-lg font-bold md:text-xl lg:text-3xl">
              <Image
                src={LogoImg}
                alt="Logo Image"
                height={90}
                className="w-14 md:w-16 lg:w-20"
              />
              Cybseca
            </div>
          </Link>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold text-sm">
          <Link href="#Home" className="text-gray-700 hover:text-indigo-500">
            Home
          </Link>
          <Link href="#About" className="text-gray-700 hover:text-indigo-500">
            About
          </Link>
          <Link
            href="#services"
            className="text-gray-700 hover:text-indigo-500"
          >
            Services
          </Link>
          <Link href="#blog" className="text-gray-700 hover:text-indigo-500">
            Blog
          </Link>
          <Link href="#Faq" className="text-gray-700 hover:text-indigo-500">
            FAQ
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 border hover:shadow-md hover:shadow-indigo-400 hover:rounded-full border-indigo-500 text-indigo-500  rounded-full transition-colors"
          >
            <div className="bg-indigo-500 p-3 rounded-full mr-5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="blue"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 9C16 7.05 15.3208 5.39583 13.9625 4.0375C12.6042 2.67917 10.95 2 9 2V0C10.25 0 11.4208 0.2375 12.5125 0.7125C13.6042 1.1875 14.5542 1.82917 15.3625 2.6375C16.1708 3.44583 16.8125 4.39583 17.2875 5.4875C17.7625 6.57917 18 7.75 18 9H16ZM12 9C12 8.16667 11.7083 7.45833 11.125 6.875C10.5417 6.29167 9.83333 6 9 6V4C10.3833 4 11.5625 4.4875 12.5375 5.4625C13.5125 6.4375 14 7.61667 14 9H12ZM16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2875 15.4583 13.9625 15.625C14.6375 15.7917 15.3167 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z"
                  fill="white"
                />
              </svg>
            </div>
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-indigo-500 focus:outline-none "
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col  space-y-4 font-semibold p-4">
            <Link href="#Home" className="text-gray-700 hover:text-indigo-500">
              Home
            </Link>
            <Link href="#About" className="text-gray-700 hover:text-indigo-500">
              About
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-indigo-500"
            >
              Services
            </Link>
            <Link href="#blog" className="text-gray-700 hover:text-indigo-500">
              Blog
            </Link>
            <Link href="#Faq" className="text-gray-700 hover:text-indigo-500">
              FAQ
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-2 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
