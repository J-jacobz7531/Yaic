import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
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

  return (
    <header className="w-full flex flex-col bg-white shadow-lg dark:bg-gray-800 h-24">
      <div className="flex justify-between items-center w-full sm:px-8 h-full">
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
            <SearchIcon className="w-5 h-5 text-gray-500 font-thin" />
          </div>
        </div>
      </div>
      <div
        id="hidden"
        className="bg-green-600 text-white p-2 flex items-center justify-center"
      >
        <div className="bg-yellow-300 w-[16%] px-2 rounded-tl-xl rounded-bl-xl">
          <h5 className="text-xs">Pre-qualification Exercise 2020-2025</h5>
        </div>
        <TextScroller text="Pre-qualification Exercise 2022-2025, not later than 29th June 2022 before 5pm EAT" />
      </div>
    </header>
  );
};

export default Header;
