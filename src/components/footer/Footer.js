import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
export default function Footer() {
  return (
    <footer className="w-full cursor-pointer left-0 bottom-0 transition duration-700 ease-in-out  text-white bg-green-600 shadow-lg flex flex-wrap space-y-4  py-4 sm:py-0 sm:p-6 space-x-16 justify-center items-center md:h-60">
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
    </footer>
  );
}
