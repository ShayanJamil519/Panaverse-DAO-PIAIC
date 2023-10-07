import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around gap-8 pt-16 px-5 bg-[#0C0C0E]">
        {/* Left Container */}
        <div className="md:w-1/4">
          <div className="mb-6">
            <Image
              width={172}
              height={90}
              src="/assets/footer__logo.png"
              alt="Panaverse Logo"
            />
          </div>
          <p className="font-nunito text-[#A2A2A2] mb-6 text-sm leading-6">
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technologies globally.
            It is a community of Web 3 and Metaverse developers, designers,
            trainers, startup founders, and service providers.
          </p>
          <div className="flex justify-start items-center gap-4">
            <span className="p-3 bg-[#4e545c] rounded-full text-xl">
              <FaTwitter />
            </span>
            <span className="p-3 bg-[#4e545c] rounded-full  text-xl">
              <BsYoutube />
            </span>
            <span className="p-3 bg-[#4e545c] rounded-full text-xl">
              <FiInstagram />
            </span>
            <span className="p-3 bg-[#4e545c] rounded-full text-xl">
              <FaDiscord />
            </span>
            <span className="p-3 bg-[#4e545c] rounded-full text-xl">
              <BsGithub />
            </span>
          </div>
        </div>
        {/* Middle Container */}
        <div className="md:w-1/4 flex flex-col md:flex-row gap-6">
          {/* Left */}
          <div className="flex-1">
            <h3 className="font-raleway mb-6 text-[#fff] text-lg">Company</h3>
            <ul className="list-none">
              <li className="font-nunito text-[#A2A2A2]  mb-2">About us</li>
              <li className="font-nunito text-[#A2A2A2] mb-2">Blog</li>
              <li className="font-nunito text-[#A2A2A2] mb-2">Instructors</li>
              <li className="font-nunito text-[#A2A2A2] mb-2">Testimonials</li>
              <li className="font-nunito text-[#A2A2A2] mb-2">Build Career</li>
              <li className="font-nunito text-[#A2A2A2] mb-2">
                Become Instructor
              </li>
            </ul>
          </div>
          {/* Right */}
          <div className="flex-1">
            <h3 className="font-raleway mb-6 text-[#fff] text-lg">Support</h3>
            <ul className="list-none">
              <li className="font-nunito text-[#A2A2A2] mb-2">Help Center</li>
              <li className="font-nunito text-[#A2A2A2] mb-2">
                Terms of Service
              </li>
              <li className="font-nunito text-[#A2A2A2] mb-2">Legal</li>
              <li className="font-nunito text-[#A2A2A2] mb-2">
                Privacy Policy
              </li>
              <li className="font-nunito text-[#A2A2A2] mb-2">Status</li>
            </ul>
          </div>
        </div>
        {/* Right Container */}
        <div className="md:w-1/4">
          <h3 className="font-raleway mb-6 text-[#fff] text-lg">
            Stay up to date
          </h3>
          <div className="flex justify-start items-center gap-2 mb-4">
            <input
              type="email"
              placeholder="Enter email..."
              className="bg-[#3E3E3E] rounded-md text-white py-2 px-3 outline-none border-none w-full"
            />
            <div className="p-3 bg-[#48BB78] rounded-md">
              <Image
                width={16}
                height={16}
                src="/assets/footer__email.png"
                alt="Email Icon"
                className="text-2xl"
              />
            </div>
          </div>
          <p className="font-nunito text-[#A2A2A2]">
            Get the latest news and updates right in your inbox.
          </p>
        </div>
      </div>
      {/* Bottom Container */}
      <div className="bg-[#0C0C0E] pt-10 flex justify-center items-center">
        <div className="bg-[#373A3E] w-full md:w-[95%] mx-auto py-4 px-8 md:px-16 rounded-t-xl  flex flex-col md:flex-row justify-center items-center md:gap-16">
          {/* Left */}
          <div className="flex-1 md:flex-none mb-4 md:mb-0">
            <p className="font-nunito text-white">
              &#169; Copyrighted and Designed by
            </p>
            <Link
              href="https://github.com/ShayanJamil519"
              target="_blank"
              className="no-underline text-[#145CEB] text-base font-nunito font-semibold tracking-wide"
            >
              Shayan Jamil
            </Link>
          </div>
          {/* Middle */}
          <div className="flex-1 md:flex-none flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Image
              width={44}
              height={50}
              src="/assets/footer__headphones.png"
              alt="Head Phones"
            />
            <div>
              <p className="font-nunito text-[#A2A2A2] text-base">
                Have a question? Email me at:
              </p>
              <Link
                href="mailto:shayanjamil500@.com"
                className="font-raleway text-white text-base"
              >
                shayanjamil500@gmail.com
              </Link>
            </div>
          </div>
          {/* Right */}
          <div className="flex-1 md:flex-none">
            <p className="text-white font-nunito text-base">Powered by:</p>
            <Image
              width={100}
              height={56}
              src="/assets/footer__panacloud.png"
              alt="Pana Cloud"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
