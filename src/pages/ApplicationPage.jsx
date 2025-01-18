import React from "react";
import { motion } from "framer-motion";
import { admissionsInfo, images } from "../data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

export default function ApplicationPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="APPLICATION FORM"
        subtext="Start your journey with Seku I Sheriff School—where academic excellence and personal growth pave the way to success."
        bgImage={images.image4}
      />

      <div className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Application Form
        </h1>
        <form className="space-y-6">
          {/* Personal Information */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="dob" className="block font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className="block font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          {/* Academic Information */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">
              Academic Information
            </h2>
            <div className="mt-4">
              <label htmlFor="currentSchool" className="block font-medium">
                Current School Name
              </label>
              <input
                type="text"
                id="currentSchool"
                className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
                placeholder="Enter school name"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="gradeLevel" className="block font-medium">
                Current Grade Level
              </label>
              <select
                id="gradeLevel"
                className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
                required
              >
                <option value="">Select grade level</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
              </select>
            </div>
          </div>

          {/* Parent/Guardian Information */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">
              Parent/Guardian Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="guardianName" className="block font-medium">
                  Guardian's Name
                </label>
                <input
                  type="text"
                  id="guardianName"
                  className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
                  placeholder="Enter guardian's name"
                  required
                />
              </div>
              <div>
                <label htmlFor="guardianPhone" className="block font-medium">
                  Guardian's Phone Number
                </label>
                <input
                  type="tel"
                  id="guardianPhone"
                  className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
                  placeholder="Enter guardian's phone number"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="guardianEmail" className="block font-medium">
                Guardian's Email
              </label>
              <input
                type="email"
                id="guardianEmail"
                className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
                placeholder="Enter guardian's email"
                required
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">
              Additional Information
            </h2>
            <label htmlFor="notes" className="block font-medium">
              Additional Notes or Comments
            </label>
            <textarea
              id="notes"
              rows="4"
              className="w-full border px-4 py-2 rounded-md focus:outline-blue-500"
              placeholder="Include any additional information you think is relevant."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
