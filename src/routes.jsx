import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Onboard from "./pages/Onboard";
import Giveaway from "./pages/Giveaway";
import ThankYou from "./pages/ThankYou";
import MeetingBooked from "./pages/MeetingBooked";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/onboard" element={<Onboard />} />
      <Route path="/submitted" element={<ThankYou />} />
      <Route path="/giveaway" element={<Giveaway />} />
      <Route path="/booked" element={<MeetingBooked />} />
    </Routes>
  );
}
