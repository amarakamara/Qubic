import React, { useState } from "react";
import Button from "./Button";

export default function WorkContent(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-96 lg:w-1/2 border border-[0.5] p-4 overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${props.image})` }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show && (
          <div className="w-full h-full bg-black bg-opacity-90 flex justify-center items-center text-white">
            <div className="flex flex-col text-center items-center gap-4">
              <h1 className="font-bold text-white">{props.title}</h1>
              <p className="text-white">{props.description}</p>
              <Button
                borderColor="border-white"
                name="Preview"
                width="w-52"
                height="h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
