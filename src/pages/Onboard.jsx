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
      <head>
        <title>Onboarding - Join Us Today!</title>
        <meta
          name="description"
          content="Welcome to the onboarding page. Complete your details and get started with our platform. We are excited to have you!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Onboarding - Join Us Today!" />
        <meta
          property="og:description"
          content="Welcome to the onboarding page. Complete your details and get started with our platform. We are excited to have you!"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.yoursite.com/onboarding" />
      </head>

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
