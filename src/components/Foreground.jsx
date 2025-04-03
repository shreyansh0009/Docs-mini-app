import React from "react";
import Cards from "./Cards";

function Foreground() {
  const data = [
    {
      desc: "Project report document for review.",
      size: "1.2mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        tagColor: "blue",
      },
    },
    {
      desc: "Client proposal draft version 2.",
      size: "2.5mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "red",
      },
    },
    {
      desc: "Meeting notes from last discussion.",
      size: "0.7mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        tagColor: "green",
      },
    },
    {
      desc: "Design assets for the new website.",
      size: "3.1mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "yellow",
      },
    },
    {
      desc: "Finalized contract document.",
      size: "1.8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "purple",
      },
    },
  ];
  
  return (
    <div className="fixed z-[3] w-full h-full top-0 left-0 p-5 flex gap-5">
      {data.map((item, idx) => (
        <Cards data={item} />
      ))}
    </div>
  );
}

export default Foreground;
