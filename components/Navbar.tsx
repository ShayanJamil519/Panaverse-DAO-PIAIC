import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between py-3 px-5 font-nunito text-lg bg-white">
        {/* Left Container */}
        <div className="flex justify-between items-center gap-16">
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
          {/* Links Container */}
          <ul className="flex justify-between items-center gap-10 ">
            <li>About</li>
            <li>Blog</li>
            <li>Community</li>
            <li>Web3.0</li>
          </ul>
        </div>
        {/* Right Container */}
        <div className="flex justify-between items-center gap-5">
          <div className="flex justify-center items-center">
            <span className="mr-1">Github</span>
            <Image
              src="/assets/nav__icon.PNG"
              width={20}
              height={20}
              alt="Github Link"
            />
          </div>
          <button className="py-3 px-12 bg-[#145CEB] text-white rounded-lg">
            Apply
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
