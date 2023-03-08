import React from "react";
import { proudData } from "./data";

const ProudSection = () => {
  return (
    <div className="py-28 px-5">
      <h1 className="font-raleway text-center text-5xl">
        We are <span className="text-[#145CEB]">Proud</span>
      </h1>
      <p className="font-nunito text-center text-[#53545B]">
        You don't have to struggle alone, you've got our assistance and help.
      </p>
      <div className="flex flex-wrap justify-between items-center gap-5">
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
      className="w-[22%] rounded-md mt-8 py-16 text-center text-white"
    >
      <img src={imgUrl} alt={imgUrl} className="mx-auto mb-3" />
      <h1 className="font-raleway text-4xl mb-1 tracking-[1px]">{num}</h1>
      <p className="font-nunito text-[#FFFFFFCC]">{text}</p>
    </div>
  );
};
