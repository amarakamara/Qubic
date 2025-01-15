import React from "react";
import bgImg from "../assets/tq-bg.jpg";
import BlackLogo from "../assets/blacklogo.png";
import Cursor from "../components/Cursor";

export default function MeetingBooked() {
  return (
    <>
      <head>
        <title>Meeting Booked - We Are Excited to See You!</title>
        <meta
          name="description"
          content="Your meeting has been successfully booked. We're excited to meet you! Stay tuned for more details."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Meeting Booked - We Are Excited to See You!"
        />
        <meta
          property="og:description"
          content="Your meeting has been successfully booked. We're excited to meet you! Stay tuned for more details."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={BlackLogo} />
        <meta property="og:image:alt" content="Logo for the booking" />
        <link rel="canonical" href="https://www.yoursite.com/meeting-booked" />
      </head>

      <div className="w-screen h-screen">
        <Cursor />
        <div className="cursor-dot"></div>
        <div className="cursor-outline"></div>
        <div className="w-full h-full flex flex-col justify-center lg:justify-end items-center px-10 pt-10">
          <div className="w-full flex justify-center mb-10">
            <img
              className="w-40"
              src={BlackLogo}
              alt="Company Logo"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="font-black text-6xl lg:text-9xl 2md:text-8xl md:text-8xl whitespace-nowrap">
              Amazing
            </h1>
            <h3 className="font-thin text-sm text-center my-4 lg:my-6 md:my-4">
              Your meeting has been booked. We are hyped right now. See you on
              the other side.
            </h3>
          </div>
          <div
            className="w-full h-40 md:h-80 bg-cover"
            style={{ backgroundImage: `url(${bgImg})` }}
            alt="Background image for meeting booked"
            loading="lazy"
          ></div>
        </div>
      </div>
    </>
  );
}
