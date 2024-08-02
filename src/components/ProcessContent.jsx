import React from "react";

export default function ProcessContent(props) {
  return (
    <div className="w-full flex justify-center items-center tb-border">
      <div className="w-1/4 flex justify-center items-cen-6">
        <h2 className="font-black text-[6rem] lg:text-[8rem]">
          {props.number}
        </h2>
      </div>
      <div className="w-3/4 p-6 border border-y-0 border-r-0 border-l-[0.5] border-black">
        <h3 className="whitespace-nowrap my-2 font-bold text-[1.2rem] lg:text-[1.7rem]">
          {props.title}
        </h3>
        <p className="font-thin text-base">{props.content}</p>
      </div>
    </div>
  );
}
