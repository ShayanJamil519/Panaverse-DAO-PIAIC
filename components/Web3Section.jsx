import Image from "next/image";
import React from "react";

const Web3Section = () => {
  return (
    <div className="flex gap-10">
      <div className="flex-[0.5] bg-web3-bg bg-no-repeat">
        {/* <img src="/assets/web3__img.png" alt="Image" className="mx-auto" /> */}
        <Image
          width={500}
          height={500}
          src="/assets/web3__img.png"
          alt="Image"
          className="mx-auto"
        />
      </div>
      <div className="flex-[0.5] pr-10">
        <h1 className="text-4xl font-raleway mb-6 mt-5 ">
          What is Web <span className="pt-5 text-[#145CEB] ">3.0</span>
        </h1>
        <p className="font-nunito text-[#575757] leading-7">
          Web 3.0 has the potential to change the internet as we know it
          forever. You're still early in catching the trend and building your
          first blockchain application, acquiring the skills to get a high-
          paying job, or creating your own web 3.0 projects that can make you
          money. In Web 2.0 all the data is controlled by the Big Tech
          companies, such as Google, Apple, etc. In the decentralized web, no
          single person/ company owns any data or information about anyone, and
          everything is visible to the public. Web3, also known as the
          decentralized web, is the third and latest" phase” of the internet.
          Web3 is built on peer-to-peer networks of computers that talk to each
          other without middlemen.
        </p>
        <button className="bg-[#145CEB] text-[#FFFFFF] rounded-md font-nunito py-3 px-10 mt-3">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Web3Section;
