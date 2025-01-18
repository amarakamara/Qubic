import React, { useState } from "react";
import { Link } from "react-router-dom";
import { schoolInfo, navItems } from "../data";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className=" py-4 px-6 lg:px-8 md:px-6">
        <div className="flex justify-between items-center space-x-8">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/assets/sis-logo.jpeg"
              alt="Seku I Sheriff School Logo"
              className="w-12 h-auto"
            />
            <span className="text-2xl font-bold">{schoolInfo.name}</span>
          </Link>
          <ul className="hidden md:flex space-x-2 items-center">
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.name} className="relative group">
                  <span className="hover:text-blue-200 cursor-pointer flex items-center">
                    {item.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  <ul className="absolute left-0 top-full bg-white text-blue-600 shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    {item.dropdown.map((subItem) => (
                      <li
                        key={subItem.name}
                        className="px-4 py-2 hover:bg-blue-100"
                      >
                        <Link to={subItem.path} className="block text-nowrap">
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-blue-200 px-2 py-1 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link
                to="/admissions"
                className="bg-white text-blue-600 px-6 py-2 ml-6 rounded-md font-bold hover:bg-blue-100 transition"
              >
                Apply Now
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden block text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.name}>
                  <span className="font-bold flex items-center">
                    {item.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  <ul className="mt-2 pl-4 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className="block text-blue-200 hover:text-blue-100"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block text-blue-200 hover:text-blue-100"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link
                to="/admissions"
                className="block bg-white text-blue-600 px-6 py-2 rounded-md font-bold hover:bg-blue-100 transition"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
