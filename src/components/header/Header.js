import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid";
import TextScroller from "../textScroller/TextScroller";

const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    {
      name: "ABOUT DEVELOPMENT",
      link: "/about",
      icon: <ChevronDownIcon className="w-5 h-5 text-gray-500" />,
    },
    {
      name: "FUNDING WINDOWS",
      link: "/funding",
      icon: <ChevronDownIcon className="w-5 h-5 text-gray-500" />,
    },
    {
      name: "NEWS & MEDIA",
      link: "/news",
      icon: <ChevronDownIcon className="w-5 h-5 text-gray-500" />,
    },
    {
      name: "NETWORK PARTNERS",
      link: "/network",
      icon: <ChevronDownIcon className="w-5 h-5 text-gray-500" />,
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ];

  const [active, setActive] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [small, setSmall] = useState(false);
  console.log(small);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 100)
      );
    }
  }, []);

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  return (
    <header
      className={`w-full flex flex-col fixed top-0 z-50 bg-white dark:bg-gray-800  hover:transition duration-700 ease-in-out  ${
        small ? "h-14" : "h-24"
      }`}
    >
      <div className={`flex justify-between items-center w-full sm:px-8 h-full px-4 ${showInput && "mb-4"}`}>
        <Link to="/" className="cursor-pointer">
          <h4 className="text-lg font-bold">Yaic</h4>
        </Link>
        <div className="flex items-center space-x-8 cursor-pointer">
          <div className="hidden sm:flex space-x-8">
            {Links.map((link, index) => (
              <Link
                key={index}
                onClick={() => setActive(index)}
                className={`flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg  ${
                  active === index && "bg-gray-200 rounded-lg"
                }`}
                to={link.link}
              >
                <h5 className="text-xs text-slate-700">{link.name}</h5>
                <div>{link.icon}</div>
              </Link>
            ))}
          </div>
          <div>
            <div onClick={handleShowInput}>
              <SearchIcon className="w-5 h-5 text-gray-500 font-thin" />
            </div>
            {showInput && (
              <div className="hover:transition duration-700 z-20 px-4 text-white ease-in-out bg-orange-400 absolute left-0 p-4 w-full flex gap-2 items-center">
                <SearchIcon className="w-5 h-5 text-white " />
                <input
                  type="text"
                  placeholder="Enter your search"
                  className=" block p-1 w-full text-base focus:ring-orange-400 text-white focus:outline-0 border border-orange-400 bg-orange-400 rounded-sm"
                />
                <XIcon
                  className="w-5 h-5 text-white "
                  onClick={() => setShowInput(false)}
                />
              </div>
            )}
          </div>
          <div className="sm:hidden">
            <MenuIcon className="w-5 h-5 text-gray-500 font-thin" />
          </div>
        </div>
      </div>
      {!showInput && (
        <div
          className={`w-full bg-green-600 text-white p-2 flex items-center justify-center hover:transition duration-700 ease-in-out ${
            small && "hidden"
          }`}
        >
          <div className="bg-yellow-300 flex w-full sm:w-[16%] px-2 rounded-tl-xl rounded-bl-xl">
            <h5 className="text-xs">Pre-qualification Exercise 2020-2025</h5>
          </div>
          <TextScroller text="Pre-qualification Exercise 2022-2025, not later than 29th June 2022 before 5pm EAT" />
        </div>
      )}
    </header>
  );
};

export default Header;
