import React from "react";
import { Coursel, Reusable, ReusableOne } from "../components";
import image from "../assets/img/pics12.jpg";
import image1 from "../assets/img/pics13.jpg";
import image2 from "../assets/img/pics11.jpg";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { ChevronUpIcon } from "@heroicons/react/outline";
export default function HomeMiddle() {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div>
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
      <div className="w-full flex flex-col items-center bg-green-700  justify-center h-70 gap-y-4 p-4">
        <div className="cursor-pointer transition duration-700 ease-in-out  text-white flex  justify-between space-x-16">
          <div className="flex flex-col gap-y-2">
            <div className="underline underline-offset-6 px-2">
              <h5>Abi Publications</h5>
            </div>
            <div className="flex flex-col gap-y-2 items-start">
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs hover:decoration-yellow-400">
                  Quarterly LKM Briefs
                </h5>
              </div>
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">Annual Reports</h5>
              </div>
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">Research & Impact Studies</h5>
              </div>
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">The DCED Standard</h5>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="underline underline-offset-6 px-2">
              <h5>Results Measurements</h5>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">Result Measurement System</h5>
              </div>
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">aBi Business Plan</h5>
              </div>
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">The DCED Standard</h5>
              </div>
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">DCED Audit Reports</h5>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="underline underline-offset-6 border-red-300 px-2">
              <h5 className="font-xs text-start ">Partner Publications</h5>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">Partner Research & Impact Studies</h5>
              </div>
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">Partner Website Links</h5>
              </div>
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">Quarterly LKM Briefs</h5>
              </div>
              <div className="flex items-center hover:translate-x-2 hover:transition duration-700 ease-in-out hover:text-yellow-400 hover:underline underline-offset-4">
                <ChevronRightIcon className="w-5 h-5 text-white" />
                <h5 className="text-xs">Success Stories</h5>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="underline underline-offset-6 border-red-300">
              <h5>Contact Us</h5>
            </div>
            <div className="flex flex-col gap-y-2">
              <h5 className="text-xs">Tel: +256(0)312054865</h5>
              <h6 className="text-xs">Email:info@gmail.com</h6>
              <h5 className="text-xs">UMOJA Houser,2nd Floor</h5>
              <h5 className="text-xs">plot 20, Nakesero Road</h5>
              <h5 className="text-xs">P.O Box 29851, Kampala, Uganda</h5>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center cursor-pointer gap-y-2">
          <div onClick={scrollToTop}>
            <ChevronUpIcon className="w-6 h-6 text-yellow-400 animate-bounce" />
          </div>
          <div className="mb-4">
            <h5 className="text-white text-xs">
              &copy;2022 | All rights reserved
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
