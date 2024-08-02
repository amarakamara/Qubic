import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ServicesContent from "./ServicesContent.jsx";

export default function Services(props) {
  const { setShowQuote } = props;
  const serviceRef = useRef(null);

  const scrollYProgress = useScroll({
    target: serviceRef,
    offset: ["start end", "end end"],
  }).scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [60, 0]);

  const services = [
    {
      title: "CREATIVE WEB DESIGN",
      content:
        "We craft exceptional digital experiences through strategic design solutions, combining creativity, technical expertise, and a deep understanding of your unique needs.",
      bullets: [
        "User-Centered Design",
        " Visual Excellence",
        "UX Optimization",
        "Responsive Design",
        "Branding & Identity",
      ],
    },
    {
      title: "WEB DEVELOPMENT",
      content:
        "We build robust and scalable digital solutions through cutting-edge web development, combining technical expertise, innovation, and a deep understanding of your unique needs.",
      bullets: [
        "Front-end Development",
        "Back-end Development",
        "CMS Integration",
        "E-commerce Solutions",
        "Quality Assurance",
      ],
    },
    {
      title: "AI CHATBOT & AUTOMATION",
      content:
        "We build robust and scalable automation solutions, combining AI expertise, innovation, and a deep understanding of your unique needs.",
      bullets: [
        "AI Chatbot Development",
        "Workflow Automation",
        "Botpres Solutions",
        "Zapier and Make.com Integrations",
        "Automation Strategy",
      ],
    },
  ];

  return (
    <motion.section
      id="services"
      ref={serviceRef}
      transition={{
        staggerChildren: 0.25,
      }}
      className="section relative w-full overflow-clip flex flex-col"
    >
      <SectionTitle
        style={{ opacity, y }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        mb="mb-10"
        name="SERVICES"
      />
      <motion.div
        style={{ opacity, y }}
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className=" w-full flex justify-center items-center lg:px-20 mb-10"
      >
        <motion.p className="px-4 lg:px-20 text-center">
          We offers a comprehensive suite of digital services to elevate your
          brand's online presence and drive success. It’s all about you. What
          you want? And What your brand should reflect.
        </motion.p>
      </motion.div>
      <motion.div
        style={{ opacity, y }}
        transition={{
          delay: 0.7,
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4"
      >
        {services.map((item, index) => (
          <ServicesContent
            key={index}
            title={item.title}
            content={item.content}
            bullets={item.bullets}
            setShowQuote={setShowQuote}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
