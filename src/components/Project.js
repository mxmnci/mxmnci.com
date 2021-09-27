import React, { useState } from "react";
import classNames from "../util/classnames";
import { motion } from "framer-motion";

const Project = (props) => {
  const { backgroundColor, logo, title, description, badges, link } = props;

  const [showButtons, setShowButtons] = useState(false);

  return (
    <a
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
      href={link}
      target="_blank"
      className="flex-1 bg-white rounded-md shadow border transform duration-200 hover:scale-101 hover:shadow-lg overflow-hidden"
    >
      <motion.div
        style={{ backgroundColor }}
        className="rounded-t-md flex items-center justify-center text-white"
        initial="open"
        animate={showButtons ? "open" : "closed"}
        variants={{
          open: { opacity: 0, height: 0 },
          closed: { opacity: 1, height: 128, transition: { delay: 0.3 } }
        }}
        transition={{ duration: 0.3 }}
      >
        {logo}
      </motion.div>
      <div className="p-4 overflow-hidden relative h-full">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <div className="flex flex-wrap mt-3 -mx-1">
          {badges &&
            badges.map((badge) => {
              const color = badge.color.toLowerCase();
              return (
                <span
                  className={classNames(
                    "badge",
                    `bg-${color}-100 text-${color}-800`
                  )}
                >
                  {badge.title}
                </span>
              );
            })}
        </div>
        <motion.div
          initial="hidden"
          animate={showButtons ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.3 }
            },
            hidden: { translateY: 50, opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 flex items-end space-x-3 pt-2 w-full pr-8 pb-4"
        >
          <a
            href=""
            className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View on GitHub
          </a>
          <a
            href=""
            className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View Project
          </a>
        </motion.div>
      </div>
    </a>
  );
};

export default Project;
