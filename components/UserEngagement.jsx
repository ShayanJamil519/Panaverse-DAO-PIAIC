import Image from "next/image";
import React from "react";
import { eventsData } from "./data";

const UserEngagement = () => {
  return (
    <div className="bg-[#EDEEF3] w-full flex py-20 px-8 gap-8">
      <Events />
      <Feedback />
    </div>
  );
};

export default UserEngagement;

const Events = () => {
  return (
    <div className="flex-[0.5]">
      <h1 className="font-raleway text-4xl mb-14 ">Upcoming Events</h1>
      {eventsData.map((event) => (
        <Event event={event} key={event.date} />
      ))}
    </div>
  );
};

const Event = ({ event }) => {
  const { date, year, name, time, location } = event;

  return (
    <div className="flex gap-5 mb-5">
      {/* Left Container */}
      <div className="flex-[0.1] text-center">
        <h1 className="bg-[#145CEB] text-white text-4xl py-2 px-8  font-raleway">
          {date}
        </h1>
        <p className="bg-[#FFFFFF] text-[#1A202C] text-base py-2 font-nunito">
          {year}
        </p>
      </div>
      {/* Right Container */}
      <div className="flex-[0.9] flex bg-[#FFFFFF] py-3 px-5">
        {/* Left Container */}
        <div className="flex-[0.8]">
          <h3 className="font-raleway  mb-4 text-xl text-[#1A202C]">{name}</h3>
          <span className="inline-flex text-sm mr-10 font-nunito text-[#575757]">
            <Image
              width={16}
              height={16}
              src="/assets/engagement__time.png"
              alt="Time Logo"
              className="object-contain mr-1"
            />
            {time}
          </span>
          <span className="inline-flex text-sm font-nunito text-[#575757]">
            <Image
              width={16}
              height={16}
              src="/assets/engagement__location.png"
              alt="Location Logo"
              className="object-contain mr-1"
            />
            {location}
          </span>
        </div>
        {/* Right Container */}
        <div className="flex-[0.2] flex justify-center items-center">
          <div className="p-4 rounded-md border-[#104ABC] border-[1px]">
            <Image
              width={16}
              height={16}
              src="/assets/engagement__arrow.png"
              alt="Goto Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Feedback = () => {
  return (
    <div className="flex-[0.5]">
      <h1 className="font-raleway text-4xl mb-14 ">Student's Feedback</h1>
      <div className="py-5 px-8 bg-white text-center">
        <Image
          width={60}
          height={60}
          src="/assets/engagement__quote.png"
          alt="Logo"
          className="mx-auto mb-4"
        />
        <p className="font-nunito text-[#1A202C] text-base mb-4">
          "This course was an eye-opening experience that challenged my
          understanding of how the internet and technology can shape the future.
          I learned about decentralized systems and how they can be applied in
          creating immersive virtual worlds."
        </p>
        <Image
          width={64}
          height={64}
          src="/assets/engagement__me.png"
          alt="Profile Pic"
          className="w-16 h-16 object-contain rounded-full mx-auto mb-3"
        />
        <h6 className="text-[#1A202C] font-nunito  text-xl">Shayan Jamil</h6>
        <p className="text-[#718096] font-nunito  text-sm">
          Fullstack Web & Blockchain Developer
        </p>
      </div>
    </div>
  );
};
