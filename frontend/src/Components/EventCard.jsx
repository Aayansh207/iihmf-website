import React from "react";

const EventCard = ({ image, title, date, description, link }) => {
  return (
    <div className="card card-hover overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {date && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {date}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-primary-500 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors"
          >
            Learn More →
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
