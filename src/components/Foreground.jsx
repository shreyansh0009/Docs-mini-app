import React from "react";
import Cards from "./Cards";

function Foreground() {
  const data = [
    {
      desc: "This is first card, Lorem ipsum dolor sit amet.",
      size: "0.9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        tagColor: "green",
      },
    },
  ];
  return (
    <div className="fixed z-[3] w-full h-full top-0 left-0">
      {data.map((item, idx) => (
        <Cards data={item} />
      ))}
    </div>
  );
}

export default Foreground;
