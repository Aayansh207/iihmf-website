import React, { useState } from "react";

const AwardCard = ({ award }) => {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <div className="card card-hover overflow-hidden">
      {/* Image Gallery */}
      <div className="relative">
        <img
          src={award.images[selectedImg]}
          alt={award.title}
          className="w-full h-64 sm:h-72 object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Thumbnail strip */}
        {award.images.length > 1 && (
          <div className="absolute bottom-3 left-3 right-3 flex gap-2">
            {award.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(i)}
                className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                  i === selectedImg ? "border-accent-400 shadow-lg" : "border-white/50 opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-primary-500 mb-3">{award.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{award.content}</p>
      </div>
    </div>
  );
};

export default AwardCard;
