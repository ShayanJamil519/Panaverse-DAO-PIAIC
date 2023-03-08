import React from "react";

const GoalsSection = () => {
  return (
    <div className="flex gap-10 py-6 pl-8">
      <div className="flex-[0.5] bg-goals-bg bg-no-repeat">
        <h1 className="text-[#1A202C] text-4xl mb-5 mt-16">
          Achieve Your <span className="text-[#145CEB]">Goals</span>
        </h1>
        <p className="font-nunito text-[#575757]">
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
        <button className="bg-[#145CEB] text-[#FFFFFF] rounded-md font-nunito py-3 px-10 mt-5">
          Apply Now
        </button>
      </div>
      <div className="flex-[0.5] flex flex-col">
        <div className="flex self-end">
          <img
            src="/assets/goals__lines.png"
            alt="Image"
            className="flex flex-end"
          />
        </div>
        <div>
          <img src="/assets/goals__img.png" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
