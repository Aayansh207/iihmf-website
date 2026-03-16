import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SectionHeading from "../Components/SectionHeading";
import { FiMonitor, FiWifi, FiCoffee, FiBook, FiServer, FiUsers } from "react-icons/fi";

const facilities = [
  { icon: FiMonitor, title: "Co-Working Space", desc: "Modern, fully furnished co-working spaces with high-speed internet, ergonomic furniture, and a collaborative atmosphere for startups." },
  { icon: FiWifi, title: "High-Speed Internet", desc: "Dedicated high-speed internet connectivity to ensure seamless operations for all incubated startups." },
  { icon: FiServer, title: "Lab & Prototyping", desc: "Access to state-of-the-art laboratories and prototyping facilities at MNNIT for hardware and software development." },
  { icon: FiBook, title: "Library & Resources", desc: "Access to MNNIT's extensive library, research databases, and online resources for market research and product development." },
  { icon: FiCoffee, title: "Conference Rooms", desc: "Fully equipped conference and meeting rooms for client meetings, team discussions, and investor presentations." },
  { icon: FiUsers, title: "Mentorship & Networking", desc: "Regular mentorship sessions, workshops, and networking events with industry experts and successful entrepreneurs." },
];

const FacilitiesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Facilities</h1>
          <p className="mt-3 text-white/70 text-lg">World-class infrastructure for innovation</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Our" highlight="Facilities" subtitle="Everything you need to build the next big thing" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facilities.map((f, i) => (
              <div key={i} className="card p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-accent-50 text-accent-500 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary-500 mb-3">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
