import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex justify-around gap-16 pt-16 px-5 bg-[#0C0C0E]">
        {/* Left Container */}
        <div className="flex-[0.4]">
          <div className="mb-10">
            <Image
              width={172}
              height={90}
              src="/assets/footer__logo.png"
              alt="Panaverse Logo"
            />
          </div>
          <p className="font-nunito text-[#A2A2A2] mb-7 text-sm leading-6">
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
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
        <div className="flex-[0.3] flex gap-10">
          {/* left */}
          <div className="flex-[0.5]">
            <h3 className="font-raleway mb-10 text-[#fff] text-xl">Company</h3>
            <ul className="list-none">
              <li className="font-nunito text-[#A2A2A2]  mb-1">About us</li>
              <li className="font-nunito text-[#A2A2A2] mb-1">Blog</li>
              <li className="font-nunito text-[#A2A2A2] mb-1">Instructors</li>
              <li className="font-nunito text-[#A2A2A2] mb-1">Testimonials</li>
              <li className="font-nunito text-[#A2A2A2] mb-1">Build Career</li>
              <li className="font-nunito text-[#A2A2A2] mb-1">
                Become Instructor
              </li>
            </ul>
          </div>
          {/* Right */}
          <div className="flex-[0.5]">
            <h3 className="font-raleway mb-10 text-[#fff] text-xl">Support</h3>
            <ul className="list-none">
              <li className="font-nunito text-[#A2A2A2] mb-1">Help Center</li>
              <li className="font-nunito text-[#A2A2A2] mb-1">
                Terms of Service
              </li>
              <li className="font-nunito text-[#A2A2A2] mb-1">Legal</li>
              <li className="font-nunito text-[#A2A2A2] mb-1">
                Privacy Policy
              </li>
              <li className="font-nunito text-[#A2A2A2] mb-1">Status</li>
            </ul>
          </div>
        </div>
        {/* <Right Container */}
        <div className="flex-[0.3]">
          <h3 className="font-raleway mb-10 text-[#fff] text-xl">
            Stay up to date
          </h3>
          <div className="flex justify-start items-center gap-2 mb-3">
            <input
              type="email"
              placeholder="Enter email..."
              className="bg-[#3E3E3E] rounded-md text-white py-2 px-3 outline-none border-none w-[70%]"
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
          <p className="font-nunito text-[#A2A2A2] w-2/3">
            Get the latest news and updates right at your inbox.
          </p>
        </div>
      </div>
      {/* Bottom Container */}
      <div className="bg-[#0C0C0E] pt-10 flex justify-center items-center">
        <div className="bg-[#373A3E] w-[95%] mx-auto py-4 px-16 rounded-t-xl  flex justify-center items-center gap-28">
          {/* Left */}
          <div className="flex-[0.3] ">
            <p className="font-nunito text-white ">
              &#169; Copyrighted and Designed by
            </p>
            <a
              href="https://github.com/ShayanJamil519"
              target="_blank"
              className="no-underline text-[#145CEB] text-xl font-nunito font-semibold tracking-wide"
            >
              Shayan Jamil
            </a>
          </div>
          {/* Middle */}
          <div className="flex-[0.3] flex justify-start items-center gap-6">
            <Image
              width={44}
              height={50}
              src="/assets/footer__headphones.png"
              alt="Head Phones"
            />
            <div>
              <p className="font-nunito text-[#A2A2A2] ">
                Have a question? Email me at:
              </p>
              <a
                href="mailto:shayanjamil500@.com"
                className="font-raleway text-white text-lg"
              >
                shayanjamil500@gmail.com
              </a>
            </div>
          </div>
          {/* Right */}
          <div className="flex-[0.3]">
            <p className="text-white font-nunito  text-lg ml-1">Powered by:</p>
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
