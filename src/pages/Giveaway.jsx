import React from "react";
import GiveawayForm from "../components/GiveawayForm";
import Cursor from "../components/Cursor";

export default function Onboard() {
  return (
    <>
      <Cursor />
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      <div className="w-full h-full flex justify-center items-center py-20">
        <GiveawayForm />
      </div>
    </>
  );
}
