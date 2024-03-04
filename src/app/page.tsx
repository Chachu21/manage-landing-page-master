"use client";
import React from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <>
      <div className="flex flex-col w-screen min-h-screen bg_desktop ">
        <Navigation />
        <Hero />
        <Main />
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default Home;
