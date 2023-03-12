import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className=" bg-[#EDEEF3] w-full flex  before:bg-hero-blob  before:w-[3.45rem] before:h-48 before:object-contain before:top-40 before:relative ">
        {/* Left Container */}
        <div className="flex-[0.4] pt-16 pl-4 pr-10 relative after:bg-hero-arrow after:w-52 after:h-48 after:relative after:block after:object-contain after:top-[-12rem] after:left-[-5rem]">
          <Link href="/" className="text-[#145CEB] font-raleway text-lg">
            Discover your journey
          </Link>
          <h1 className="font-raleway text-6xl my-6 tracking-[-1px] ">
            Launch Your Dev <br /> Career With Web 3 <br /> and Metaverse
          </h1>
          <p className="font-nunito text-md font-thin mb-4 text-[#575757]">
            Certified Web 3.0 and Metaverse Developer. A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet.
          </p>
          <button className="text-white bg-[#145CEB] text-lg font-nunito py-3 px-12 rounded-md">
            Explore Course
          </button>
        </div>
        {/* Right Container */}
        <div className="flex-[0.6]  pt-24 pl-20">
          <div className="flex">
            <div className="flex-[0.1] relative">
              <Image
                width={200}
                height={500}
                src="/assets/hero__green__dots.png"
                alt="Image"
                className="absolute top-44 left-10"
              />
              {/* <img
                src="/assets/hero__green__dots.png"
                alt=""
                className="absolute top-44 left-10"
              /> */}
            </div>
            <div className=" mx-auto relative flex-[0.8] ">
              <Image
                width={600}
                height={600}
                src="/assets/hero__code.png"
                alt="Image"
              />
              {/* <img
                src="/assets/hero__code.png"
                alt=""
                className="w-full h-full"
              /> */}
            </div>
            <div className="flex-[0.1] relative">
              <Image
                width={47}
                height={74}
                src="/assets/hero__blue__dots.png"
                alt="Image2"
                className="absolute top-32 right-0 "
              />
              {/* <img
                src="/assets/hero__blue__dots.png"
                alt=""
                className="absolute top-32 right-0 object-contain"
              /> */}
            </div>
          </div>
          <div className="bg-white ml-32 shadow-2xl mr-0 py-3 px-8 w-[45vmin] text-center">
            <h6 className="font-nunito text-[#474956]">Tomorrow is our</h6>
            <h4 className="font-raleway text-[#1A202C]">
              "When I Grow Up" Spirit Day!
            </h4>
          </div>
        </div>
        {/* -------------- */}
      </div>
    </div>
  );
};

export default Hero;
