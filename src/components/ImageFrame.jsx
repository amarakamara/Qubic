import React from "react";

const ImageFrame = ({ imageSrc, altText }) => {
  return (
    <div className="flex justify-center items-center my-10 w-full h-full ">
      <div className="relative p-2 border rounded-md shadow-sm">
        <div className="border rounded-md w-full">
          <img
            src={imageSrc}
            alt={altText}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageFrame;
