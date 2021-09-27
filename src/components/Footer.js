import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-white w-full mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-4xl mx-auto py-10">
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <div className="flex-1">
            <h3 className="text-lg font-bold leading-8">About this site</h3>
            <p className="text-gray-600">
              Welcome to my personal website! I'm Max, an aspiring Full-Stack
              Web Developer from Sacramento, California. I enjoy working with
              React and Node.js.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold leading-8">Social profiles</h3>
            <ul className="text-gray-600">
              <li key={1}>
                <a
                  href="https://github.com/maxmonciardini"
                  target="_blank"
                  className="flex items-center space-x-2"
                >
                  <FiGithub />
                  <p>View my Github profile</p>
                </a>
              </li>
              <li key={2}>
                <a
                  href="https://www.linkedin.com/in/max-monciardini-8153b4190"
                  target="_blank"
                  className="flex items-center space-x-2"
                >
                  <AiOutlineLinkedin />
                  <p>Connect with me on LinkedIn</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
