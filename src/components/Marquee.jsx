import React from "react";

const Marquee = () => {
  const content = [
    "Announcement 1: This is some scrolling text content.",
    "Announcement 2: New features are coming soon!",
    "Announcement 3: Check out our latest blog post.",
  ];
  const logos = [
    { src: "src/assets/html-logo.png", alt: "Logo company 1" },
    { src: "src/assets/css-logo.png", alt: "Logo company 2" },
    { src: "src/assets/js-logo.png", alt: "Logo company 3" },
    { src: "src/assets/next-logo.png", alt: "Logo company 4" },
    { src: "src/assets/react-logo.png", alt: "Logo company 5" },
    { src: "src/assets/figma-logo.png", alt: "Logo company 5" },
    { src: "src/assets/webflow-logo.png", alt: "Logo company 6" },
    { src: "src/assets/zapier-logo.png", alt: "Logo company 7" },
    { src: "src/assets/botpress-logo.png", alt: "Logo company 7" },
    { src: "src/assets/make-logo.png", alt: "Logo company 7" },
    { src: "src/assets/framer-logo.png", alt: "Logo company 7" },
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
