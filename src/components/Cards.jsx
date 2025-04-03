import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const Cards = ({data}) => {
  return (
    <div className="relative bg-zinc-800 w-56 h-72 rounded-4xl py-10 px-5 text-white   overflow-hidden">
      <FaRegFileAlt />
      <p className="mt-3 font-semibold text-md leading-tight">{data.desc}</p>

      <div className="absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-5 w-full h-10 absolute bottom-0 left-0 mb-14">
          <h5>{data.size}</h5>
          <span className="pr-2 cursor-pointer">
            <FaDownload />
          </span>
        </div>

        <div className="w-full h-14 bg-green-500 flex items-center justify-center">

          <h3 className="text-sm font-semibold">Download Now</h3>

        </div>
      </div>
    </div>
  );
};

export default Cards;
