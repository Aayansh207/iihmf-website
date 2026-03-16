import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SectionHeading from "../Components/SectionHeading";
import { FiTool, FiMail, FiActivity } from "react-icons/fi";
import { TfiAnnouncement } from "react-icons/tfi";

const CareersPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Careers / Jobs</h1>
          <p className="mt-3 text-white/70 text-lg">Join our team and make a difference</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Current" highlight="Openings" />
          <div className="max-w-3xl mx-auto space-y-4">
            <a
              href="http://www.mnnit.ac.in/tbi/notifications/IIHMF-TBI%20Advertisement%2010.06.2024-Pub.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-start gap-4 hover:border-accent-200 border-2 border-transparent transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-50 text-accent-500 flex items-center justify-center flex-shrink-0">
                <TfiAnnouncement className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-700 font-medium">
                  Advertisement No. TBI/MNNIT/RECT/02, dated 10/06/2024 — Various positions in Innovation and Incubation Hub MNNIT Foundation.
                </p>
                <span className="inline-block mt-2 px-2.5 py-0.5 bg-red-50 text-red-500 text-xs font-bold rounded-full">NEW</span>
              </div>
            </a>
            <a
              href="http://www.mnnit.ac.in/tbi/notifications/Advertisement_TBI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-start gap-4 hover:border-accent-200 border-2 border-transparent transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0">
                <TfiAnnouncement className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-600">
                  Advertisement No. TBI/MNNIT/08/01, dated 16/08/2023 — Last date of submission extended till 15/09/2023.
                </p>
              </div>
            </a>
            <a
              href="http://www.mnnit.ac.in/tbi/notifications/Advertisement_TBI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-start gap-4 hover:border-accent-200 border-2 border-transparent transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0">
                <TfiAnnouncement className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-600">
                  Advertisement No. TBI/MNNIT/08/01, dated 16 August, 2023 — Various positions in Innovation and Incubation Hub MNNIT Foundation.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CareersPage;
