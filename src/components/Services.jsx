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
      title: "AI VOICE AGENTS",
      content:
        "Revolutionize customer interactions with AI-powered voice agents that:",
      bullets: [
        "Ensure 24/7 availability for your business",
        "Handle inbound and outbound calls efficiently",
        "Automate appointment booking, reminders, and follow-ups",
        "Provide personalized customer interactions",
        "Customizable to suit your business needs",
      ],
    },
    {
      title: "AI CHATBOTS",
      content: "Provide instant responses to customers, even after hours",
      bullets: [
        "Automate FAQs about services and pricing",
        "Collect customer details for follow-up scheduling",
        "Integrates seamlessly with your website or social media",
        "Instant Customer Support",
        "Customizable Chatbot Solutions",
      ],
    },
    {
      title: "CONSULTATION",
      content: "Not sure where to start with AI? Let us guide you",
      bullets: [
        "Identify the best automation opportunities for your business",
        "Plan tailored AI workflows to maximize efficiency",
        "AI Strategy Development",
        "Business Process Optimization",
        "Custom AI Workflows",
        "Performance & ROI Analysis",
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
      className="section relative w-full overflow-clip flex flex-col my-20"
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
        className="w-full flex justify-center items-center lg:px-20 mb-10"
      >
        <motion.p className="px-4 lg:px-20 text-center">
          Our AI-powered solutions are designed to tackle real challenges faced
          by service-based businesses. From automating bookings to handling
          customer inquiries, our services save you time and boost operational
          efficiency.
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
