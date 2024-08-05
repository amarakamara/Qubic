import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function MobileNavbar(props) {
  const { setShowNav, setShowQuote } = props;

  const handleOpenQuote = () => {
    setShowQuote(true);
  };
  const handleClick = () => {
    setShowNav(false);
  };

  return (
    <div className="top-0 right-0 w-full h-screen min-h-screen bg-white bg-opacity-95 p-[20px] z-50 overflow-hidden fixed">
      <div className="w-full flex justify-end">
        <button className="" onClick={handleClick}>
          close
        </button>
      </div>
      <nav className="w-full h-full flex flex-col justify-center items-center">
        <ul className="mobilenav w-1/2 flex flex-col">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#story">Our Story</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">Our Work</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li onClick={handleOpenQuote}>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="flex w-1/2 h-auto justify-center gap-5 mt-10">
          <li>
            <Facebook />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Linkedin />
          </li>
          <li>
            <Instagram />
          </li>
        </ul>
      </nav>
    </div>
  );
}
