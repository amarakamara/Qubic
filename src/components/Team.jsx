import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import TeamMember1 from "../assets/team-member1.jpg";
import TeamMember2 from "../assets/team-member2.jpg";
import HeroImage from "../assets/hero-image.png";

const teamMembers = [
  {
    name: "Amara A. Kamara",
    position: "Co-Founder",
    image: TeamMember1,
    instagram: "https://www.instagram.com/johndoe",
  },
  {
    name: "Shahad K",
    position: "Co-Founder",
    image: TeamMember2,
    instagram: "https://www.instagram.com/janesmith",
  },
];

export default function TeamSection() {
  const teamRef = useRef(null);

  const scrollYProgress = useScroll({
    target: teamRef,
    offset: ["start end", "end end"],
  }).scrollYProgress;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 0.4], [100, 0]);

  return (
    <motion.section
      ref={teamRef}
      className="section relative my-20 px-6 w-full min-h-screen overflow-hidden flex flex-col"
    >
      <SectionTitle
        style={{ opacity, y }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        mb="mb-10"
        name="MEET THE TEAM"
      />

      <div className=" w-full flex flex-col lg:flex-row justify-center items-center">
        <motion.div
          style={{ opacity, y }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full md:w-full lg:w-1/4 h-full relative top-0 left-0  flex justify-center items-center lg:justify-start lg:items-start  lg:relative lg:top-auto lg:left-auto"
        >
          <img
            src={HeroImage}
            alt="AI Powered Service"
            className="lg:w-[40rem] lg:h-[40rem] object-cover lg:object-none opacity-20 lg:opacity-100 relative left-0"
          />
        </motion.div>

        <div className="w-full md:w-full lg:w-3/4 h-full flex flex-col lg:flex-row gap-5 justify-between p-5">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              style={{ opacity, y }}
              transition={{
                delay: 0.6 + index * 0.2,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="relative w-full lg:w-[45%] border border-black rounded-md overflow-hidden p-4"
            >
              <div
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(100%)",
                  height: "350px",
                }}
                className="w-full h-full rounded-md transition-all duration-500"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-black">{member.name}</h3>
                <p className="text-xl">{member.position}</p>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-champagne hover:text-gray-200 transition-colors duration-300 flex items-center mt-2"
                >
                  <FaInstagram className="mr-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
