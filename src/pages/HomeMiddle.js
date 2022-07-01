import React from "react";
import { Coursel, Reusable, ReusableOne } from "../components";
import image from "../assets/img/pics12.jpg";
import image1 from "../assets/img/pics13.jpg";
import image2 from "../assets/img/pics11.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
export default function HomeMiddle() {
  return (
    <main>
      {/* <div>
        <div id="default-carousel" class="relative" data-carousel="static">
          <div class="overflow-hidden relative h-56 rounded sm:h-64 xl:h-80 2xl:h-96">
            <div
              class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
              data-carousel-item=""
            >
              <img
                src={`${image3}`}
                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>

            <div
              class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
              data-carousel-item=""
            >
              <img
                src={`${image4}`}
                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>

            <div
              class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
              data-carousel-item=""
            >
              <img
                src={`${image5}`}
                class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          </div>

          <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button
              type="button"
              class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>

          <div className="flex absolute left-0 z-30 justify-center items-center px-4  cursor-pointer group focus:outline-none bg-black opacity-20 rounded-3xl w-10 h-10 top-2/4">
            <ChevronLeftIcon className="w-10 h-10 text-white" />
          </div>
          <div className="flex absolute  right-0 z-30 justify-center items-center px-4  cursor-pointer group focus:outline-none bg-black opacity-20 rounded-3xl w-10 h-10 top-2/4">
            <ChevronRightIcon className="w-16 h-16 text-white" />
          </div>
        </div>
      </div> */}
      <Coursel />
      <Reusable />
      <ReusableOne />
      <div className="flex flex-col items-center justify-center space-y-8 cursor-pointer w-full h-max p-8">
        <div className="flex items-center justify-center translate-y-3 py-4 px-6 h-10 rotate-12 bg-yellow-400 -skew-y-12">
          <h5 className="text-white text-xs font-normal">PARTNERS</h5>
        </div>
        <div>
          <h5 className="text-base font-semibold">Development Partners</h5>
        </div>

        <div className="flex flex-row items-center justify-evenly">
          <img
            className="w-1/6 h-5/6"
            src={`${image}`}
            alt="about aBi Development"
          />

          <img
            className="w-1/6 h-5/6"
            src={`${image1}`}
            alt="about aBi Development"
          />

          <img
            className="w-1/6 h-5/6"
            src={`${image2}`}
            alt="about aBi Development"
          />

          <img
            className="w-1/6 h-5/6"
            src={`${image2}`}
            alt="about aBi Development"
          />
        </div>
      </div>
    </main>
  );
}
