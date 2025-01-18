import React from "react";
import { Link } from "react-router-dom";
import { schoolInfo, navItems } from "../data";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{schoolInfo.name}</h3>
            <p>{schoolInfo.address}</p>
            <p>Phone: {schoolInfo.phone}</p>
            <p>Email: {schoolInfo.email}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-blue-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href={schoolInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                Facebook
              </a>
              <a
                href={schoolInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                Twitter
              </a>
              <a
                href={schoolInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} {schoolInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
