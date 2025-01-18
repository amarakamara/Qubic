import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { schoolInfo, images } from "../data";
import PageHeader from "../components/PageHeader";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <PageHeader
        title="CONTACT US"
        subtext="We'd love to hear from you! Whether you have questions, feedback, or inquiries, get in touch with us and become a part of the Seku I Sheriff School community."
        bgImage={images.image4}
      />

      <div className="pt-20">
        <div className="grid md:grid-cols-2 gap-8 px-6 lg:px-8 md:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Get in Touch
            </h2>
            <p className="mb-4">
              We'd love to hear from you. Please feel free to contact us with
              any questions or inquiries.
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Address:</strong> {schoolInfo.address}
              </li>
              <li>
                <strong>Phone:</strong> {schoolInfo.phone}
              </li>
              <li>
                <strong>Email:</strong> {schoolInfo.email}
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href={schoolInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600"
                >
                  Facebook
                </a>
                <a
                  href={schoolInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600"
                >
                  Twitter
                </a>
                <a
                  href={schoolInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border rounded"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 bg-blue-50 px-6 lg:px-8 md:px-6 py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-600 text-center mb-10">
            Visit Us
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15891.85752669!2d-10.8!3d6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0a0000000000%3A0x0!2sMonrovia%2C%20Liberia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{
                border: 0,
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              allowFullScreen=""
              loading="lazy"
              title="Seku I Sheriff School Location"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default ContactPage;
