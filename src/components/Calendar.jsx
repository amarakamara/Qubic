import React from "react";
import { InlineWidget } from "react-calendly";

export default function Calendar(props) {
  const { setShowCalendar } = props;

  const handleClick = () => {
    setShowCalendar(false);
  };

  return (
    <div className="w-full h-full bg-white bg-opacity-95 p-[20px] overflow-hidden z-50 fixed">
      <div className="w-full flex justify-end">
        <button className="pr-10" onClick={handleClick}>
          close
        </button>
      </div>
      <InlineWidget url="https://calendly.com/qubicstudio/30min"/>
    </div>
  );
}
