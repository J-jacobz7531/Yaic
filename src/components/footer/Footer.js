import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
export default function Footer() {
  return (
    <footer className="w-full cursor-pointer left-0 bottom-0 fixed transition duration-700 bg-lime-700 ease-in-out text-white shadow-lg flex items-center justify-center h-2/6 sm:h-10">
      <div className=" flex-col space-y-6 sm:space-y-0 flex sm:flex-row items-center justify-between sm:space-x-4">
        <div className="flex space-x-2 items-center hover:underline-offset-6 hover:underline">
          <CheckCircleIcon className="w-4 h-4 text-yellow-400" />
          <h5 className="text-xs">aBi Performance</h5>
        </div>
        <div className="flex space-x-2 items-center hover:underline-offset-6 hover:underline">
          <CheckCircleIcon className="w-4 h-4 text-yellow-400" />
          <h5 className="text-xs">Value Chain Development</h5>
        </div>
        <div className="flex space-x-2 items-center hover:underline-offset-6 hover:underline">
          <CheckCircleIcon className="w-4 h-4 text-yellow-400" />
          <h5 className="text-xs">Financial Service Dev't</h5>
        </div>
        <div className="flex space-x-2 items-center hover:underline-offset-6 hover:underline">
          <CheckCircleIcon className="w-4 h-4 text-yellow-400" />
          <h5 className="text-xs">Business Development</h5>
        </div>
        <div className="flex space-x-2 items-center hover:underline-offset-6 hover:underline">
          <CheckCircleIcon className="w-4 h-4 text-yellow-400" />
          <h5 className="text-xs">Agribusiness in Uganda</h5>
        </div>
      </div>
    </footer>
  );
}
