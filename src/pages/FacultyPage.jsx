import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { facultyMembers, images } from "../data";
import PageHeader from "../components/PageHeader";

function FacultyPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <PageHeader
        title="OUR FACULTY"
        subtext="Our faculty members are dedicated professionals who inspire, challenge, and support our students to become leaders of tomorrow."
        bgImage={images.image4}
      />

      {/* Faculty Section */}
      <div className="mt-20">
        <motion.h1
          className="text-3xl lg:text-4xl font-bold mb-8 text-blue-600 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Dedicated Faculty
        </motion.h1>

        <motion.p
          className="text-lg mb-10 text-center px-4 lg:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Seku I Sheriff School, we pride ourselves on our exceptional
          faculty members who nurture the potential of every student, guiding
          them toward success.
        </motion.p>

        {/* Faculty Member Cards */}
        <div className="grid md:grid-cols-3 gap-8 px-6 lg:px-8 md:px-6 py-20">
          {facultyMembers.map((member, index) => (
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
                <p>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FacultyPage;
