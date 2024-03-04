"use client";
import React, { useState } from "react";
import List from "./ui/List";
import Button from "./Button";
import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const Main = () => {
  const images = [
    {
      name: "Anisha Li",
      image: "/images/avatar-anisha.png",
      description:
        "we have been able to cancel so many other subscriptions since using manage. there is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      name: "Ali Bravo",
      image: "/images/avatar-ali.png",
      description:
        "we have been able to cancel so many other subscriptions since using manage. there is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      name: "Rechard Watts",
      image: "/images/avatar-richard.png",
      description:
        "we have been able to cancel so many other subscriptions since using manage. there is no more cross-channel confusion and everyone is much more focused.",
    },

    {
      name: "Shanai",
      image: "/images/avatar-shanai.png",
      description:
        "we have been able to cancel so many other subscriptions since using manage. there is no more cross-channel confusion and everyone is much more focused.",
    },
  ];

  const description = [
    {
      step: "01",
      title: "track company-wide progress",
      content: (
        <p className="text-sm  font-normal leading-6  text-gray-400">
          See how your day-to-day tasks fit into the wider vission.
          <br className="hidden sm:flex" />
          Go from tracking prigres at the milestone level all the
          <br className="hidden sm:flex" />
          way done to the smallest of details never lose sight of
          <br className="hidden sm:flex" />
          the bigger picture again.
        </p>
      ),
    },
    {
      step: "02",
      title: "   Advanced built-in reports",
      content: (
        <p className="text-sm font-normal leading-6  text-gray-400">
          Set internal delivery estimates and track progress toward
          <br className="hidden sm:flex" />
          company goals. Our customisable dashboard helps you
          <br className="hidden sm:flex" />
          build out the reports you need to keep key stokeholders
          <br className="hidden sm:flex" />
          informed
        </p>
      ),
    },
    {
      step: "03",
      title: " Everything you need in one place",
      content: (
        <p className="text-sm font-normal leading-6  text-gray-400">
          Stop jumping from one service to another to
          <br className="hidden sm:flex" /> communicate, store files, track
          tasks and share <br className="hidden sm:flex" /> documents. manage
          offers an all-in-one team <br className="hidden sm:flex" />
          prodictivity solution.
        </p>
      ),
    },
  ];

  return (
    <main className="bg_main">
      <div className="flex fle-col justify-center items-center py-5 px-2 sm:px-20 w-full mx-auto container  sm:mx-0 sm:max-w-none">
        <div className="flex flex-col sm:flex-row flex-1 justify-center sm:justify-between items-center sm:items-start ">
          <div className="flex flex-col flex-1 justify-center sm:justify-between items-center sm:items-start py-5 sm:py-0 ">
            <h2 className="text-2xl  leading-80 sm:leading-[40px] text-center sm:text-start text-gray-800 font-bold">
              What&apos;s different <br className="sm:hidden flex" /> about
              <br className="hidden sm:flex" /> manage ?
            </h2>
            <p className="text-gray-400 text-center sm:text-start font-normal leading-6 pt-5 sm:text-[18px] text-[18px]">
              manage provides all the functionality your <br /> team needs,
              without the complexity, our <br /> software is tailor-made for
              modern digital <br /> product teams
            </p>
          </div>
          <div className="flex flex-col flex-1  space-y-4 mx-auto container sm:mx-0 max-w-none sm:mt-0 mt-10">
            {description.map((item, index) => (
              <List key={index} step={item.step} title={item.title}>
                {item.content}
              </List>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-10 items-center mt-2 sm:mt-40">
        <h3 className="text-xl sm:text-3xl text-gray-700 font-semibold">
          what they&apos;ve said
        </h3>
        <div className="flex">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
            }}
            className=""
          >
            <CarouselContent className="flex">
              {images.map((image, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="py-5 px-0 sm:px-10 w-full container mx-auto sm:mx-0 max-w-none ">
                    <Card className="flex flex-col justify-center items-center space-y-5 relative mt-10 w-fit">
                      <Image
                        src={image.image}
                        width={80}
                        height={80}
                        alt={image.name}
                        className="absolute -top-[30px] left-auto object-contain"
                      />
                      <span className="text-gray-700 font-bold text-sm pt-10">
                        {image.name}
                      </span>
                      <p className="text-sm font-normal flex text-gray-400 text-center pb-2">
                        {image.description}
                      </p>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <Button />
      </div>
    </main>
  );
};

export default Main;
