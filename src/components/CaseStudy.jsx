import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ImageFrame from "./ImageFrame";
import CaseStudyImage from "../assets/case-image.png";

export default function CaseStudy() {
  const caseStudyRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const scrollYProgress = useScroll({
    target: caseStudyRef,
    offset: ["start end", "end end"],
  }).scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [60, 0]);

  return (
    <motion.section
      ref={caseStudyRef}
      id="case-study"
      className="section my-20 px-6 w-full h-auto min-h-screen overflow-clip flex flex-col relative"
    >
      <SectionTitle
        style={{ opacity, y }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        mb="mb-10"
        name="CASE STUDY"
      />

      <div className="flex flex-col lg:flex-row justify-between py-14 lg:py-24">
        <motion.div
          style={{ opacity, y }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full lg:w-1/2 text-center flex flex-row justify-center items-center"
        >
          <ImageFrame imageSrc={CaseStudyImage} altText="AI solution image" />
        </motion.div>

        <motion.div
          style={{ opacity, y }}
          transition={{
            delay: 0.7,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="w-full lg:w-1/2 flex flex-col gap-6 justify-center px-0 lg:px-20 items-center"
        >
          <p className="font-bold text-3xl text-center lg:text-justify">
            AI-Powered Receptionist for Dental Clinics
          </p>

          <div className="text-lg px-4 lg:px-0 flex flex-col gap-4">
            <p>
              <strong>The Challenge:</strong> Dental clinics face challenges in
              managing appointment bookings, rescheduling, and addressing
              patient inquiries efficiently. These issues often result in
              delayed responses, operational inefficiencies, and dissatisfied
              patients.
            </p>
            <p>
              <strong>Our Solution:</strong> We developed a state-of-the-art AI
              receptionist capable of handling these tasks seamlessly. By
              automating bookings, cancellations, and reminders, while also
              addressing common patient questions, this solution provides
              round-the-clock support to enhance clinic operations and improve
              the patient experience.
            </p>
            {!isOpen && (
              <p className="text-gray-500">
                Learn how our AI innovation revolutionized efficiency and
                patient satisfaction...
              </p>
            )}
          </div>

          {isOpen && (
            <div className="text-lg px-4 lg:px-0 flex flex-col gap-4">
              <p>
                <strong>Details:</strong> The AI receptionist operates around
                the clock, delivering:
              </p>
              <ul className="list-disc list-inside">
                <li>Efficient appointment scheduling and rescheduling.</li>
                <li>Automated reminders sent via calls and SMS.</li>
                <li>
                  Responses to frequently asked questions, saving staff time.
                </li>
                <li>Real-time updates on clinic availability for patients.</li>
              </ul>
              <p>
                <strong>Results:</strong> Following its deployment, the clinic
                experienced measurable success:
              </p>
              <ul className="list-disc list-inside">
                <li>A 35% reduction in appointment booking errors.</li>
                <li>Patient response times improved by 50%.</li>
                <li>
                  Staff workload significantly reduced, enabling focus on core
                  tasks.
                </li>
                <li>Customer satisfaction scores increased by 20%.</li>
              </ul>
              <p>
                This innovative AI solution set a new benchmark for clinic
                efficiency and patient care, driving lasting improvements in
                operations and satisfaction levels.
              </p>
            </div>
          )}

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
            transition={{
              bounceDamping: 10,
              bounceStiffness: 800,
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="self-start bg-transparent border border-black rounded-sm ml-4 lg:ml-0 py-2 px-6"
          >
            {isOpen ? "Collapse Details" : "View Details"}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
