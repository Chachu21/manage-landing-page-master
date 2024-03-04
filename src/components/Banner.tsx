import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center bg-orange-600 px-2 sm:px-20 mt-10 mx-auto container sm:max-w-none">
      <h2 className="text-xl text-white sm:text-start text-center py-2 font-semibold">
        Simplfy how your team <br /> works today
      </h2>
      <div className="my-5">
        <button className="bg-white text-black text-sm px-5 py-2 rounded-2xl hover:text-orange-500">
          GetStarted
        </button>
      </div>
    </div>
  );
};

export default Banner;
