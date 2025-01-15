import React, { useState, useEffect, Suspense } from "react";
import Navbar from "../components/Navbar.jsx";
import MobileNavbar from "../components/MobileNavbar.jsx";
import "../App.scss";
import LoadingSpinner from "../components/LoadingSpinner";

const Story = React.lazy(() => import("../components/Story.jsx"));
const Process = React.lazy(() => import("../components/Process.jsx"));
const Services = React.lazy(() => import("../components/Services.jsx"));
const YourWhy = React.lazy(() => import("../components/YourWhy"));
const CaseStudy = React.lazy(() => import("../components/CaseStudy"));
const CTA = React.lazy(() => import("../components/CTA"));
const Hero = React.lazy(() => import("../components/Hero"));
const Tools = React.lazy(() => import("../components/Tools"));
const Team = React.lazy(() => import("../components/Team"));
const Contact = React.lazy(() => import("../components/Contact"));
const Footer = React.lazy(() => import("../components/Footer"));
const Calendar = React.lazy(() => import("../components/Calendar"));
const PopUp = React.lazy(() => import("../components/PopUp"));
const QuoteForm = React.lazy(() => import("../components/QuoteForm"));
const Cursor = React.lazy(() => import("../components/Cursor"));

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
        <Suspense fallback={<LoadingSpinner />}>
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
          <Hero setShowQuote={setShowQuote} setShowCalendar={setShowCalendar} />
          <Story />
          <Services setShowQuote={setShowQuote} />
          <YourWhy />
          <Process />
          {/* Optional Components */}
          {/* <Work /> */}
          {/* <Testimonial /> */}
          <CaseStudy />
          <CTA setShowQuote={setShowQuote} />
          <Team />
          <Tools />
          <Contact
            setShowPopUp={setShowPopUp}
            setPopUpMessage={setPopUpMessage}
          />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
