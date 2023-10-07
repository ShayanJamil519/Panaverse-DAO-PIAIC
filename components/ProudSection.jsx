import Image from "next/image";
import React from "react";
import { proudData } from "./data";

const ProudSection = () => {
  return (
    <div className="py-10 px-5 md:py-20 lg:py-28">
      <h1 className="font-raleway text-center text-3xl md:text-4xl lg:text-5xl">
        We are <span className="text-[#145CEB]">Proud</span>
      </h1>
      <p className="font-nunito text-center text-[#53545B] mt-3 md:mt-5">
        You don't have to struggle alone, you've got our assistance and help.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-5 ">
        {proudData.map((data) => (
          <ProudCard data={data} key={data.bgColor} />
        ))}
      </div>
    </div>
  );
};

export default ProudSection;

const ProudCard = ({ data }) => {
  const { bgColor, imgUrl, num, text } = data;
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="lg:w-[22%] sm:w-[45%]  w-[90vw]  rounded-md mt-5 sm:mt-8 py-8 text-center text-white"
    >
      <Image
        width={60}
        height={60}
        src={imgUrl}
        alt={imgUrl}
        className="mx-auto mb-3"
      />
      <h1 className="font-raleway text-xl md:text-2xl mb-1 tracking-[1px]">
        {num}
      </h1>
      <p className="font-nunito text-[#FFFFFFCC] text-sm md:text-base">
        {text}
      </p>
    </div>
  );
};
