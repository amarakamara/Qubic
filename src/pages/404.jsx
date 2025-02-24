import React from "react";
import bgImg from "../assets/tq-bg.jpg";
import BlackLogo from "../assets/blacklogo.png";
import Cursor from "../components/Cursor";

export default function ThankYou() {
  return (
    <div className="w-screen h-screen">
      <Cursor />
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      <div className="w-full h-full flex flex-col justify-center lg:justify-end items-center px-10 pt-10">
        <div className="w-full flex justify-center mb-10">
          <img className="w-40" src={BlackLogo} alt="logo" />
        </div>
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="font-black text-4xl lg:text-9xl 2md:text-8xl md:text-8xl whitespace-nowrap">
            OPPS....404 error!
          </h1>
          <h3 className="font-thin text-sm text-center my-2">
            You're probably in the wrong direction
          </h3>
        </div>
        <div
          className="w-full h-40 md:h-80 bg-cover"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
      </div>
    </div>
  );
}
