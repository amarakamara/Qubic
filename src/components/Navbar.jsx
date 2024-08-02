import React, { useState, useEffect } from "react";
import BlackLogo from "../assets/blacklogo.png";
import { Menu } from "lucide-react";
import Button from "./Button";

export default function Navbar(props) {
  const { setShowNav, setShowCalendar, setShowQuote } = props;
  const [navbar, setNavbar] = useState(false);

  const handleOpenNav = () => {
    setShowNav(true);
  };

  const handleOpenQuote = () => {
    setShowQuote(true);
  };

  const handleOpenCalendar = () => {
    setShowCalendar(true);
  };

  return (
    <div className="w-full h-18 navbar py-4 px-2 sticky top-0 z-40 bg-glossy">
      <nav className="w-full h-full flex flex-row justify-center items-center">
        <div className="w-full flex justify-between h-auto">
          <div className="w-auto">
            <img className="w-40" src={BlackLogo} alt="logo" />
          </div>
          <ul className="w-auto items-center font-light hidden lg:flex md:flex">
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
            <li onClick={handleOpenCalendar} className="ml-2">
              <Button
                borderColor="border-black"
                name="Book A Call"
                width="w-auto"
                height="h-auto"
              />
            </li>
          </ul>
        </div>
        <button onClick={handleOpenNav} className="block lg:hidden md:hidden">
          <Menu />
        </button>
      </nav>
    </div>
  );
}
