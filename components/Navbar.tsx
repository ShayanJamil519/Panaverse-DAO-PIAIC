"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Navbar = ({ isOpen, setIsOpen }: Props) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex z-20 relative justify-between py-3 px-5 font-nunito text-lg bg-white">
        {/* Left Container */}
        <div className="flex justify-between items-center gap-4 lg:gap-16">
          {/* Logo Container */}
          <div className="flex items-center justify-between">
            <Image
              src="/assets/panaverse__logo.png"
              alt="Panaverse Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          {/* Hamburger Icon for Small Screens */}

          {/* Links Container */}
          <ul
            className={`lg:flex ${
              isOpen
                ? "flex flex-col py-2 lg:flex-row absolute z-20 top-0 mt-24 left-0 right-0 mx-auto border rounded-lg  shadow-xl w-[90vw] bg-gray-100 text-black"
                : "hidden"
            } justify-between items-center gap-4 lg:gap-10`}
          >
            <Link href="/">About</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Community</Link>
            <Link href="/">Web3.0</Link>
            <Link href="/" className="lg:hidden">
              Github
            </Link>
          </ul>
        </div>
        {/* Right Container */}
        <div className="lg:flex hidden justify-between items-center gap-4 lg:gap-5">
          <div className="flex justify-center items-center">
            <span className="mr-1">Github</span>
            <Image
              src="/assets/nav__icon.PNG"
              width={20}
              height={20}
              alt="Github Link"
            />
          </div>
          <button className="py-3 px-8 bg-[#145CEB] text-white rounded-lg">
            Apply
          </button>
        </div>

        <div className="flex gap-3 lg:hidden ">
          <button className="py-3 px-4 smallerscreen:px-8 bg-[#145CEB] text-white rounded-lg">
            Apply
          </button>
          {isOpen ? (
            <button
              onClick={toggleMenu}
              className="py-1  bg-gray-200 text-lg text-white"
            >
              <Image
                src="/assets/crossss.png"
                width={40}
                height={40}
                alt="Hamburger Icon"
              />
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="py-1  bg-gray-200 text-lg text-white"
            >
              <Image
                src="/assets/icon_hb.png"
                width={60}
                height={60}
                alt="Hamburger Icon"
              />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
