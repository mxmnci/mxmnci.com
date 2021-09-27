import React, { useState } from "react";
import classNames from "../util/classnames";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = (props) => {
  const {
    backgroundColor,
    logo,
    title,
    description,
    badges,
    link,
    githubLink
  } = props;

  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
      target="_blank"
      className="flex-1 bg-white rounded-md shadow border transform duration-200 hover:scale-101 hover:shadow-lg overflow-hidden"
    >
      <div
        style={{ backgroundColor }}
        className="h-32 rounded-t-md flex items-center justify-center text-white"
      >
        {logo}
      </div>
      <div className="p-4 overflow-hidden">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <div className="flex flex-wrap mt-3 -mx-1">
          {badges &&
            badges.map((badge) => {
              const color = badge.color.toLowerCase();
              switch (color) {
                case "red":
                  return (
                    <span
                      className={classNames("badge", `bg-red-100 text-red-800`)}
                    >
                      {badge.title}
                    </span>
                  );
                case "green":
                  return (
                    <span
                      className={classNames(
                        "badge",
                        `bg-green-100 text-green-800`
                      )}
                    >
                      {badge.title}
                    </span>
                  );
                case "blue":
                  return (
                    <span
                      className={classNames(
                        "badge",
                        `bg-blue-100 text-blue-800`
                      )}
                    >
                      {badge.title}
                    </span>
                  );
                case "yellow":
                  return (
                    <span
                      className={classNames(
                        "badge",
                        `bg-yellow-100 text-yellow-800`
                      )}
                    >
                      {badge.title}
                    </span>
                  );
                case "gray":
                  return (
                    <span
                      className={classNames(
                        "badge",
                        `bg-gray-100 text-gray-800`
                      )}
                    >
                      {badge.title}
                    </span>
                  );
                case "pink":
                  return (
                    <span
                      className={classNames(
                        "badge",
                        `bg-pink-100 text-pink-800`
                      )}
                    >
                      {badge.title}
                    </span>
                  );
                case "purple":
                  return (
                    <span
                      className={classNames(
                        "badge",
                        `bg-purple-100 text-purple-800`
                      )}
                    >
                      {badge.title}
                    </span>
                  );
                default:
                  return (
                    <span
                      className={classNames(
                        "badge",
                        `bg-gray-100 text-gray-800`
                      )}
                    >
                      {badge.title}
                    </span>
                  );
              }
            })}
        </div>
        <motion.div
          initial="hidden"
          animate={showButtons ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              top: 10
            },
            hidden: { opacity: 0, top: -10 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute flex flex-row justify-end items-center space-x-3 pt-2 w-full pr-8 pb-4 text-white"
        >
          <a href={githubLink} target="_blank">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href={link} target="_blank">
            <HiOutlineExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
