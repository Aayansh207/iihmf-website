import React from "react";
import { FiMail, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";

const ProfileCard = ({ img, name, desc, email, linkedin, gscholar, faculty_profile }) => {
  return (
    <div className="group card card-hover p-0">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Social icons overlay */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {email && (
            <a href={`mailto:${email}`} className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-primary-500 hover:bg-accent-500 hover:text-white transition-colors" title="Email">
              <FiMail className="w-4 h-4" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-primary-500 hover:bg-accent-500 hover:text-white transition-colors" title="LinkedIn">
              <FiLinkedin className="w-4 h-4" />
            </a>
          )}
          {gscholar && (
            <a href={gscholar} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-primary-500 hover:bg-accent-500 hover:text-white transition-colors" title="Google Scholar">
              <SiGooglescholar className="w-4 h-4" />
            </a>
          )}
          {faculty_profile && (
            <a href={faculty_profile} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-primary-500 hover:bg-accent-500 hover:text-white transition-colors" title="Faculty Profile">
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-primary-500 text-lg mb-1">{name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{desc}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
