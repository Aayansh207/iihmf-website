import React from "react";
import { FiExternalLink } from "react-icons/fi";

const StartupCard = ({ head, founder_name, core_area, areas, desc, img, link }) => {
  return (
    <div className="card card-hover flex flex-col md:flex-row overflow-hidden">
      {/* Logo */}
      <div className="md:w-48 lg:w-56 flex-shrink-0 bg-gray-50 flex items-center justify-center p-6">
        <img src={img} alt={head} className="w-full h-32 md:h-full object-contain" />
      </div>
      {/* Content */}
      <div className="flex-1 p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display font-bold text-xl text-primary-500">{head}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center text-accent-500 hover:bg-accent-500 hover:text-white transition-colors"
              title="Visit website"
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        <div className="space-y-1 mb-3">
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Founders:</span>{" "}
            <span className="text-gray-600">{founder_name}</span>
          </p>
          {core_area && (
            <p className="text-sm">
              <span className="font-semibold text-gray-700">Core Area:</span>{" "}
              <span className="text-gray-600">{core_area}</span>
            </p>
          )}
          {areas && (
            <p className="text-sm">
              <span className="font-semibold text-gray-700">Areas:</span>{" "}
              <span className="text-gray-600">{areas}</span>
            </p>
          )}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{desc}</p>
      </div>
    </div>
  );
};

export default StartupCard;
