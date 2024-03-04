"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavBar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header>
      <nav className="flex justify-between items-center relative px-2 py-4 sm:py-8 sm:px-20">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={120}
          height={100}
          className=""
        />
        <div className="flex sm:hidden">
          {navOpen ? (
            <Image
              onClick={handleNavBar}
              src="/images/icon-close.svg"
              width={18}
              height={18}
              alt="close"
              className="flex sm:hidden items-center "
            />
          ) : (
            <Image
              onClick={handleNavBar}
              src="/images/icon-hamburger.svg"
              width={20}
              height={20}
              alt="humberger"
              className="flex sm:hidden items-center"
            />
          )}
        </div>

        <ul
          className={`${
            navOpen ? "flex sm:hidden" : "hidden sm:flex"
          }  flex flex-col sm:flex-row space-y-2 sm:space-y-0 bg-white sm:bg-transparent sm:space-x-8 py-5 sm:py-0 px-20 sm:px-0 justify-center sm:justify-between container mx-auto sm:mx-2 rounded-lg sm:rounded-none w-full  absolute sm:relative sm:top-0 top-4 start-0 mt-12 sm:mt-0 items-center list-none `}
        >
          <li className="hover:text-gray-400 font-normal text-[15px]">
            <Link href={"/"} className="active:text-gray-200">
              pricing
            </Link>
          </li>
          <li className="hover:text-gray-400 font-normal text-[15px]">
            <Link href={"/products"} className="active:text-gray-200">
              product
            </Link>{" "}
          </li>
          <li className="hover:text-gray-400 font-normal text-[15px]">
            <Link href={"/about"} className="active:text-gray-200">
              about_us
            </Link>
          </li>
          <li className="hover:text-gray-400 font-normal text-[15px]">
            <Link href={"/careers"} className="active:text-gray-200">
              careers
            </Link>
          </li>
          <li className="hover:text-gray-400 font-normal text-[15px]">
            <Link href={"/community"} className="active:text-gray-200">
              community
            </Link>
          </li>
        </ul>

        <div className="sm:flex hidden">
          <button className="bg-orange-500 text-white text-sm px-5 py-2 rounded-2xl hover:bg-orange-400 active:bg-orange-400">
            GetStarted
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
