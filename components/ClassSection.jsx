import Image from "next/image";
import React from "react";

const ClassSection = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center sm:flex-row py-16 px-10">
      <div className="sm:flex-[0.5] flex-1 mb-10 sm:mb-0">
        <Image
          width={420}
          height={371}
          src="/assets/class__img.png"
          alt="Image"
          className="mx-auto"
        />
      </div>
      <div className="flex-[0.5] text-center sm:text-left">
        <h1 className="text-[#1A202C] text-raleway text-xl sm:text-3xl mb-2">
          Live Class From Anywhere Via{" "}
          <span className="text-[#145CEB]">Zoom</span>
        </h1>
        <p className="text-[#575757] font-nunito mb-4">
          Helping employees gain skills and providing career development often
          take a back seat to business priorities but workplace. It employs a
          hybrid teaching format, with core onsite classes complemented by
          online Zoom laboratories and recorded videos.
        </p>
        <button className="bg-[#145CEB] text-[#FFFFFF] rounded-md font-nunito py-3 px-6 sm:px-10 mt-7">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ClassSection;
