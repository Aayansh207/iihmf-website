import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SectionHeading from "../Components/SectionHeading";
import { FiUsers, FiGlobe, FiAward, FiBookOpen } from "react-icons/fi";
import cof01 from "../Components/Assets/cof01.jpg";

const collaborations = [
  { icon: FiGlobe, title: "NIEF, University of Allahabad", desc: "IIHMF of MNNIT and NIEF of the University of Allahabad have signed a Memorandum of Understanding (MOU) for mutual support towards the development of entrepreneurship and the startup ecosystem.", img: cof01 },
  { icon: FiAward, title: "DST - NIDHI i-TBI", desc: "IIHMF is a recognised inclusive Technology Business Incubator (i-TBI) facilitating the startups inline with the NIDHI i-TBI guidelines of the Department of Science and Technology (DST)." },
  { icon: FiBookOpen, title: "StartinUP - Govt of UP", desc: "Recognised incubator of Uttar Pradesh Electronic Corporation Ltd. (UPLC) under StartinUP scheme of the Government of Uttar Pradesh, facilitating the StartUps inline with the startup policy." },
  { icon: FiUsers, title: "Industry Partners", desc: "We collaborate with leading industry partners, venture capitalists, and academic institutions to provide comprehensive support to our incubated startups." },
];

const CollaborationPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Collaborations</h1>
          <p className="mt-3 text-white/70 text-lg">Strategic partnerships driving innovation</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Our" highlight="Partners" subtitle="Building a strong network of support" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {collaborations.map((c, i) => (
              <div key={i} className="card p-6 group hover:bg-primary-500 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-500 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-primary-500 mb-2 group-hover:text-white transition-colors">{c.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CollaborationPage;
