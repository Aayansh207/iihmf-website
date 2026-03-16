import React from "react";
import { useInView } from "react-intersection-observer";

const SectionHeading = ({ title, highlight, subtitle, center = true, light = false }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className={`mb-10 lg:mb-14 ${center ? "text-center" : ""} ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold ${light ? "text-white" : "text-gray-900"}`}>
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 ${center ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
