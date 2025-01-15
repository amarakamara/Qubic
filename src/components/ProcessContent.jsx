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
        <h3 className="text-wrap my-2 font-bold text-[1.6rem] lg:text-[1.7rem] leading-tight">
          {props.title}
        </h3>
        <p className="font-thin text-base">{props.content}</p>
      </div>
    </div>
  );
}
