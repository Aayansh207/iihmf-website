import React from "react";

const LogoCarousel = ({ images, text }) => {
  // Double the images for seamless infinite scroll
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden py-6">
      <div className="flex animate-marquee hover:[animation-play-state:paused]" style={{ width: `${doubled.length * 160}px` }}>
        {doubled.map((item, i) => (
          <a
            key={i}
            href={item.link || "#"}
            target={item.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex-shrink-0 w-32 h-20 mx-4 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center justify-center hover:shadow-md hover:border-accent-200 transition-all duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
