import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    const mouseMoveHandler = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot && cursorOutline) {
        cursorDot.style.opacity = "1";
        cursorOutline.style.opacity = "1";

        cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

        cursorOutline.animate(
          {
            transform: `translate3d(${posX}px, ${posY}px, 0)`,
          },
          {
            duration: 500,
            fill: "forwards",
          }
        );
      }
    };

    const mouseLeaveHandler = () => {
      if (cursorDot && cursorOutline) {
        cursorDot.style.opacity = "0";
        cursorOutline.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    document.body.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      document.body.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot"></div>
      <div ref={cursorOutlineRef} className="cursor-outline"></div>
    </>
  );
}
