import React from "react";
import vapiLogo from "../assets/vapi-logo.jpg";
import openAiLogo from "../assets/openai-logo.png";
import zapierLogo from "../assets/zapier-logo.png";
import botpressLogo from "../assets/botpress-logo.png";
import makeLogo from "../assets/make-logo.png";
import retellLogo from "../assets/retell-logo.png";
import pythonLogo from "../assets/python-logo.png";

const Marquee = () => {
  const content = [
    "Announcement 1: This is some scrolling text content.",
    "Announcement 2: New features are coming soon!",
    "Announcement 3: Check out our latest blog post.",
  ];
  const logos = [
    { src: retellLogo, alt: "retell ai logo" },
    { src: vapiLogo, alt: "vapi logo" },
    { src: openAiLogo, alt: "open ai logo" },
    { src: zapierLogo, alt: "zapier logo" },
    { src: botpressLogo, alt: "botpress logo" },
    { src: makeLogo, alt: "make.com logo" },
  ];

  return (
    <div className="flex items-center  w-full px-[20px] ">
      <div className="marquee-wrapper w-full h-full bg-white whitespace-nowrap inline-block relative overflow-hidden  py-4 tb-border">
        <div className="marquee">
          {logos.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="inline-block whitespace-nowrap px-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
