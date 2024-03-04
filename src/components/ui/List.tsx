import React from "react";
interface listProps {
  step: string;
  title: string;
  children: React.ReactNode;
}
const List = ({ step, title, children }: listProps) => {
  return (
    <div className="flex flex-col space-y-0 sm:space-y-5 ">
      <div className="flex items-center space-x-0 sm:space-x-5">
        <span className="bg-orange-500 sm:text-2xl text-xl w-10 h-8 rounded-2xl px-8 text-white flex justify-center items-center ">
          {step}
        </span>
        <h3 className="text-sm sm:text-[18px] text-gray-500 py-1.5 sm:text-gray-600 font-medium px-1 sm:px-0 rounded-r-full bg-orange-200 sm:bg-white">
          {title}
        </h3>
      </div>

      <div className="flex justify-start sm:justify-center items-start  py-2 sm:py-5">
        {children}
      </div>
    </div>
  );
};

export default List;
