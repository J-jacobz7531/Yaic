import React from "react";

export default function Button({ text, onClick, type, ...others }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-gray-400 via-gray-500  to-gray-600 hover:bg-gradient-to-br focus:ring-0 focus:outline-none   rounded-lg  mr-2 mb-2"
      {...others}
    >
      {text}
    </button>
  );
}
