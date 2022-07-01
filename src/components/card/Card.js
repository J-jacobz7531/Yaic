import React from "react";

export default function Card({ item }) {
  return (
    <>
      <img
        className="rounded-t-lg object-cover h-48 w-96 "
        src={item.img}
        alt={item.text}
      />

      <div className="p-4 bg-green-600 absolute h-6 flex items-center justify-center top-4 text-white">
        <h5 className="text-xs">{item.text}</h5>
      </div>
    </>
  );
}
