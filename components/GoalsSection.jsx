import Image from "next/image";
import React from "react";

const GoalsSection = () => {
  return (
    <div className="flex flex-col-reverse gap-10 py-6 pl-8 sm:flex-row">
      <div className="flex-1 flex flex-col  items-center md:items-start">
        <h1 className="text-xl sm:text-4xl text-[#1A202C] mb-3 sm:mb-5 mt-0 sm:mt-16 md:text-left text-center">
          Achieve Your <span className="text-[#145CEB]">Goals</span>
        </h1>
        <p className="font-nunito text-[#575757] leading-7  md:text-left text-center">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects. To accommodate everyone, courses will be
          held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
          weekdays. It employs a hybrid teaching format, with core onsite
          classes complemented by online Zoom laboratories and recorded videos.
        </p>
        <button className="bg-[#145CEB] text-[#FFFFFF] rounded-md font-nunito py-3 px-6 sm:px-10 mt-5 mx-auto">
          Apply Now
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="hidden sm:flex self-end mr-10">
          <Image
            width={66}
            height={60}
            src="/assets/goals__lines.png"
            alt="Image"
          />
        </div>
        <div>
          <Image
            width={560}
            height={374}
            src="/assets/goals__img.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
