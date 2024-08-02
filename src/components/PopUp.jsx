import React, { useState } from "react";
import { CircleCheckBig, X } from "lucide-react";

export default function PopUp(props) {
  const [sent, setSent] = useState(false);

  if (props.message === "Message sent") {
    setSent(true);
  }
  return (
    <div className="w-auto h-auto bg-black text-white py-2 px-6 fixed top-20 right-10 z-50 rounded">
      <p className="font-thin whitespace-nowrap flex gap-1">
        Message sent{sent ? <CircleCheckBig /> : <X />}
      </p>
    </div>
  );
}
