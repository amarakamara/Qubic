import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { admissionsInfo, images } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ApplicationProcess from "../components/sections/ApplicationProcess";

function AdmissionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <PageHeader
        title="ADMISSIONS"
        subtext="Join Seku I Sheriff School and become part of a community dedicated to academic excellence, character development, and personal growth. Apply today to begin your journey towards success."
        bgImage={images.image4}
      />
      <div className="">
        <ApplicationProcess />
        <motion.section
          className="flex flex-col-reverse lg:flex-row text-center lg:text-left gap-8 px-6 lg:px-8 md:px-6 py-20 bg-blue-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="">
            <h2 className="text-blue-600 text-2xl font-semibold mb-4">
              Schedule a Visit
            </h2>
            <p className="text-lg mb-4">
              Experience Seku I Sheriff School firsthand by visiting our campus!
              A tour offers the chance to explore our modern facilities, meet
              faculty, and see our vibrant student life in action.
            </p>
            <p className="text-lg flex flex-col">
              To schedule your visit, with the following contact info:
              <a
                href="mailto:admissions@sekuisheriffschool.com"
                className="text-blue-600 underline inline-block  items-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                admissions@sekuisheriffschool.com
              </a>{" "}
              <a
                href="tel:+231123456789"
                className="text-blue-600 underline inline-block  items-center"
              >
                <i className="fas fa-phone mr-2"></i>
                +231 123 456 789
              </a>
              <span className="my-2">We look forward to welcoming you!</span>
            </p>
          </div>
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-blue-600 text-2xl font-semibold mb-4">
                Tuition and Fees
              </h2>
              <p className="text-lg">{admissionsInfo.tuition}</p>
            </div>

            <div>
              <h2 className="text-blue-600 text-2xl font-semibold mb-4">
                Application Deadlines
              </h2>
              <p className="text-lg">{admissionsInfo.deadlines}</p>
            </div>
          </div>
        </motion.section>

        <motion.div
          className="py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-2xl lg:text-4xl font-bold text-blue-600">
            Join Seku I Sheriff today.
          </p>
          <p className="text-2xl lg:text-4xl mb-8 font-bold text-blue-600">
            Start your application now!
          </p>
          <a
            href="/application"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300"
          >
            Start Your Application
          </a>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default AdmissionsPage;
