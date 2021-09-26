import React from "react";
import classNames from "../util/classnames";

const Project = (props) => {
  const { backgroundColor, logo, title, description, badges, link } = props;
  return (
    <a
      href={link}
      target="_blank"
      className="flex-1 bg-white rounded-md shadow border transform duration-200 hover:scale-101 hover:shadow-lg"
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
          {badges.map((badge) => {
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
      </div>
    </a>
  );
};

export default Project;
