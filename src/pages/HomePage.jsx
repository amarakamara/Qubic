import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  heroContent,
  aboutSnippet,
  blogPosts,
  testimonials,
  images,
} from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/Hero";
import AboutSnippetSection from "../components/sections/AboutSnippetSection";
import BlogSnippetSection from "../components/sections/BlogSnippetSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSnippetSection />
      <BlogSnippetSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
