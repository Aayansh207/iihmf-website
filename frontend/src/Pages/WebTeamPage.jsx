import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const WebTeamPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Web Team</h1>
          <p className="mt-3 text-white/70 text-lg">The team behind this website</p>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="section-container text-center">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            This website was designed and developed by the Web Team at IIHMF,
            MNNIT Allahabad. We're passionate about creating beautiful digital
            experiences that showcase innovation.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WebTeamPage;
