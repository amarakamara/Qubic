import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import Story from "../components/Story.jsx";
import Process from "../components/Process.jsx";
import Services from "../components/Services.jsx";
import MobileNavbar from "../components/MobileNavbar.jsx";
import ChooseUs from "../components/ChooseUs";
import Work from "../components/Work";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Marquee from "../components/Marquee";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import PopUp from "../components/PopUp";
import QuoteForm from "../components/QuoteForm";
import Cursor from "../components/Cursor";
import "../App.scss";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    if (showPopUp) {
      const timer = setTimeout(() => {
        setShowPopUp(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showPopUp]);

  return (
    <>
      <Navbar
        setShowQuote={setShowQuote}
        setShowNav={setShowNav}
        setShowCalendar={setShowCalendar}
      />
      <div className="w-screen h-full relative overflow-x-hidden overflow-y-scroll no-scrollbar">
        <Cursor />
        {showQuote && (
          <QuoteForm
            setShowPopUp={setShowPopUp}
            setPopUpMessage={setPopUpMessage}
            setShowQuote={setShowQuote}
          />
        )}
        {showPopUp && <PopUp message={popUpMessage} />}
        {showCalendar && <Calendar setShowCalendar={setShowCalendar} />}
        {showNav && (
          <MobileNavbar setShowQuote={setShowQuote} setShowNav={setShowNav} />
        )}
        <Hero />
        <Marquee />
        <Story />
        <Services setShowQuote={setShowQuote} />
        <ChooseUs />
        <Process />
        <CTA setShowQuote={setShowQuote} />
        <Work />
        <Testimonial />
        <Tools />
        <Contact
          setShowPopUp={setShowPopUp}
          setPopUpMessage={setPopUpMessage}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
