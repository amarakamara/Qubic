import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { schoolInfo, studentCouncilMembers, images } from "../data";
import PageHeader from "../components/PageHeader";

function StudentCouncilPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <PageHeader
        title="STUDENT COUNCIL"
        subtext="Meet the leaders of tomorrow—our student council embodies responsibility, teamwork, and a commitment to making a difference within the Seku I Sheriff School community."
        bgImage={images.image4}
      />

      <div className="mt-20">
        <motion.h1
          className="text-3xl lg:text-4xl font-bold mb-8 text-blue-600 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Student Council - The {schoolInfo.rulingPartyName}
        </motion.h1>

        <motion.p
          className="text-lg mb-10 text-center px-4 lg:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Student Council plays a vital role in fostering leadership,
          promoting student engagement, and organizing school events. Meet the
          dedicated students who represent the voice of our student body:
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 px-6 lg:px-8 md:px-6 py-20">
          {studentCouncilMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-48 object-contain"
              />
              <div className="p-6 bg-blue-600 text-white">
                <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                <h3 className="text-lg mb-2">{member.position}</h3>
                <p>{member.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section
          className=" text-center bg-blue-50 px-6 lg:px-8 md:px-6 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center px-4 lg:px-20">Get Involved</h2>
          <p className="text-lg">
            Interested in joining the Student Council? Elections are held at the
            beginning of each academic year. Keep an eye out for announcements
            and speak with your class advisor for more information on how to run
            for a position.
          </p>
        </motion.section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default StudentCouncilPage;
