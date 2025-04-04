import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Cards = ({ data }) => {

  const colorClasses = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
  };
  
  return (
    <div className="relative bg-zinc-800 w-56 h-72 rounded-4xl py-10 px-5 text-white   overflow-hidden">
      <FaRegFileAlt />
      <p className="mt-3 font-semibold text-md leading-tight">{data.desc}</p>

      <div className="absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-5 w-full h-10 absolute bottom-0 left-0 mb-14">
          <h5>{data.size}</h5>
          <span className="pr-2 cursor-pointer">
            {data.close ? <IoMdCloseCircle size="1.3em" /> : <FaDownload />}
          </span>
        </div>

        {data.tag.isOpen ? (
          <div className={`w-full h-14 ${colorClasses[data.tag.tagColor]} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold cursor-pointer">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cards;
