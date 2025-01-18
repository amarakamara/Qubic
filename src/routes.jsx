import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import BlogPage from "./pages/BlogPage";
import BlogContentPage from "./pages/BlogContentPage";
import FacultyPage from "./pages/FacultyPage";
import StudentCouncilPage from "./pages/StudentCouncilPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import ApplicationPage from "./pages/ApplicationPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogContentPage />} />{" "}
      <Route path="/faculty" element={<FacultyPage />} />
      <Route path="/student-council" element={<StudentCouncilPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/application" element={<ApplicationPage />} />
    </Routes>
  );
}
