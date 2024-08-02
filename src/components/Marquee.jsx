import React from "react";
import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import jsLogo from "../assets/js-logo.png";
import nextLogo from "../assets/next-logo.png";
import reactLogo from "../assets/react-logo.png";
import figmaLogo from "../assets/figma-logo.png";
import webflowLogo from "../assets/webflow-logo.png";
import zapierLogo from "../assets/zapier-logo.png";
import botpressLogo from "../assets/botpress-logo.png";
import makeLogo from "../assets/make-logo.png";
import framerLogo from "../assets/framer-logo.png";

const Marquee = () => {
  const content = [
    "Announcement 1: This is some scrolling text content.",
    "Announcement 2: New features are coming soon!",
    "Announcement 3: Check out our latest blog post.",
  ];
  const logos = [
    { src: htmlLogo, alt: "Logo company 1" },
    { src: cssLogo, alt: "Logo company 2" },
    { src: jsLogo, alt: "Logo company 3" },
    { src: nextLogo, alt: "Logo company 4" },
    { src: reactLogo, alt: "Logo company 5" },
    { src: figmaLogo, alt: "Logo company 5" },
    { src: webflowLogo, alt: "Logo company 6" },
    { src: zapierLogo, alt: "Logo company 7" },
    { src: botpressLogo, alt: "Logo company 7" },
    { src: makeLogo, alt: "Logo company 7" },
    { src: framerLogo, alt: "Logo company 7" },
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
