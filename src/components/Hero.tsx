import Image from "next/image";
import React from "react";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-start px-2 sm:px-12 mt-0 sm:mt-20 space-x-0 sm:space-x-40  mx-auto w-full container sm:max-w-none sm:mx-0">
      <div className=" flex flex-col flex-1 mx-0 sm:mx-auto max-w-none sm:container  justify-center sm:justify-start items-center sm:items-start order-2 sm:order-1">
        <h1 className="text-4xl  leading-10 sm:leading-[50px] text-center sm:text-start text-gray-800 font-bold  py-4">
          bring everyone together to bulid better products.
        </h1>
        <p className="text-gray-400 text-center sm:text-start font-normal leading-6 sm:text-[16px] text-[18px]">
          manage makes its simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="my-6">
          <Button />
        </div>
      </div>
      <div className="order-1 sm:order-2 flex-1">
        <Image
          src="/images/illustration-intro.svg"
          width={500}
          height={100}
          alt="illustration"
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
