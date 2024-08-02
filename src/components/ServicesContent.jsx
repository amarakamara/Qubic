import React from "react";
import Button from "./Button";
export default function ServicesContent(props) {
  const { setShowQuote } = props;

  const handleOpenQuote = () => {
    setShowQuote(true);
  };
  return (
    <div className="w-full flex flex-col md:flex-row lg:flex-row border-[0.5px] border-black">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-black text-white flex items-center text-center p-6">
        <h2 className="text-[2.2rem] lg:text-[3.5rem] font-black">
          {props.title}
        </h2>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 text-black px-4 py-6 text-justify">
        <p>{props.content}</p>
        <ul className="mt-4 p-4 service-bullet">
          {props.bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Button
          onClick={handleOpenQuote}
          borderColor="border-black"
          name="Learn More"
          width="w-auto"
          height="h-auto"
        />
      </div>
    </div>
  );
}
