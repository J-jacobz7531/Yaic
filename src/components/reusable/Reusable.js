import React from "react";
import pic from "../../assets/img/hero-bg.jpg";
import pic1 from "../../assets/img/pics1.jpg";
import pic2 from "../../assets/img/pics2.jpg";

export default function Reusable() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 cursor-pointer w-full h-max p-8">
      <div className="flex flex-row items-center justify-center translate-y-3 py-4 px-6 h-10 rotate-12 bg-yellow-400 -skew-y-12">
        <h5 className="text-white text-xs font-normal ">WELCOME</h5>
      </div>
      <div>
        <h5 className="text-base font-semibold">
          Welcome to aBi Development ltd
        </h5>
      </div>
      <div className="sm:w-2/4 ">
        <p className="text-xs font-normal break-normal">
          The ABI Development strategy supports market-driven enterprises using
          a value chain approach for specific commodity groups (sub sectors)
          where six value chains are being supported. These include: maize;
          pulses, coffee, oilseeds, Horticulture and Dairy.
        </p>
      </div>
      <div className="flex flex-col space-y-6 items-center justify-center sm:flex-row space-x-4">
        <div className="max-w-sm sm:relative rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-lg object-cover h-48 w-96 "
            src={`${pic}`}
            alt="about aBi Development"
          />

          <div className="p-4 bg-green-600 absolute h-6 flex items-center justify-center top-4 text-white">
            <h5 className="text-xs">about aBi Development</h5>
          </div>
        </div>
        <div className="max-w-sm sm:relative rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-lg object-cover h-48 w-96 "
            src={`${pic1}`}
            alt="about aBi Development"
          />

          <div className="p-4 bg-green-600 absolute h-6 flex items-center justify-center top-4 text-white">
            <h5 className="text-xs">about aBi Development</h5>
          </div>
        </div>
        <div className="max-w-sm sm:relative rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-lg object-cover h-48 w-96 "
            src={`${pic2}`}
            alt="about aBi Development"
          />

          <div className="p-4 bg-green-600 absolute h-6 flex items-center justify-center top-4 text-white">
            <h5 className="text-xs">about aBi Development</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
