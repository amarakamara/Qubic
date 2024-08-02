import React, { useState, useEffect } from "react";
import OnboardForm from "../components/OnboardForm";
import PopUp from "../components/PopUp";
import Cursor from "../components/Cursor";

export default function Onboard() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");

  useEffect(() => {
    if (showPopUp) {
      const timer = setTimeout(() => {
        setShowPopUp(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showPopUp]);

  return (
    <>
      <Cursor />
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      <div className="w-full h-full flex justify-center items-center py-20">
        {showPopUp && <PopUp message={popUpMessage} />}
        <OnboardForm
          setShowPopUp={setShowPopUp}
          setPopUpMessage={setPopUpMessage}
        />
      </div>
    </>
  );
}
