import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Onboard from "./pages/Onboard";
import ThankYou from "./pages/ThankYou";
import Page404 from "./pages/404";
import MeetingBooked from "./pages/MeetingBooked";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/onboarding" element={<Onboard />} />
      <Route path="/submitted" element={<ThankYou />} />
      <Route path="/*" element={<Page404 />} />
      <Route path="/booked" element={<MeetingBooked />} />
    </Routes>
  );
}
