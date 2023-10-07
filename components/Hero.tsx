import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#EDEEF3] w-full flex lg:flex-row flex-col relative before:bg-hero-blob before:w-[3.45rem] lg:before:h-48 before:object-contain lg:before:top-40 before:h-48 before:absolute before:left-0 before:top-0  lg:before:relative ">
        {/* Left Container */}
        <div className="lg:flex-[0.4] flex-1 pt-16 pl-4 pr-10 relative after:bg-hero-arrow after:w-52 lg:after:h-48 lg:after:relative after:absolute  after:h-48 after:left-0 after:top-0   after:object-contain lg:after:top-[-12rem] lg:after:left-[-5rem] items-center lg:items-start flex flex-col">
          <Link href="/" className="text-[#145CEB] font-raleway text-lg">
            Discover your journey
          </Link>
          <h1 className="font-raleway text-4xl md:text-5xl w-full lg:text-left text-center  lg:text-6xl my-6 tracking-[-1px] ">
            Launch Your Dev <br /> Career With Web 3 <br /> and Metaverse
          </h1>
          <p className="font-nunito text-md font-thin mb-4 text-[#575757] lg:text-left text-center w-full">
            Certified Web 3.0 and Metaverse Developer. A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet.
          </p>
          <button className="text-white bg-[#145CEB] text-lg font-nunito py-3 px-12 rounded-md">
            Explore Course
          </button>
        </div>
        {/* Right Container */}
        <div className="lg:flex-[0.6] flex-1 pt-24 md:pl-20 pl-10">
          <div className="flex">
            <div className="flex-[0.1] relative">
              <Image
                width={200}
                height={500}
                src="/assets/hero__green__dots.png"
                alt="Image"
                className="absolute top-44 left-10"
              />
            </div>
            <div className="mx-auto relative flex-[0.8] ">
              <Image
                width={600}
                height={600}
                src="/assets/hero__code.png"
                alt="Image"
              />
            </div>
            <div className="flex-[0.1] relative">
              <Image
                width={47}
                height={74}
                src="/assets/hero__blue__dots.png"
                alt="Image2"
                className="absolute top-32 right-0 "
              />
            </div>
          </div>
          <div className="bg-white lg:ml-32 shadow-2xl mr-6 lg:mr-0 py-3 md:px-8 px-4 lg:w-[45vmin] w-[80vw] text-center">
            <h6 className="font-nunito text-[#474956]">Tomorrow is our</h6>
            <h4 className="font-raleway text-[#1A202C]">
              "When I Grow Up" Spirit Day!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
