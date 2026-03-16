import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroCarousel from "../Components/HeroCarousel";
import SectionHeading from "../Components/SectionHeading";
import LogoCarousel from "../Components/LogoCarousel";

// Startup images
import sl1 from "../Components/Assets/cw.jpg";
import sl2 from "../Components/Assets/cashcry.jpg";
import sl3 from "../Components/Assets/darjie.jpg";
import sl4 from "../Components/Assets/ge.jpg";
import sl5 from "../Components/Assets/shipizens.jpg";
import sl6 from "../Components/Assets/ie.jpg";
import sl7 from "../Components/Assets/ghs.jpg";
import sl8 from "../Components/Assets/soboroso.jpg";
import sl9 from "../Components/Assets/sl9.jpg";
import sl10 from "../Components/Assets/Xub.jpg";
import pis1 from "../Components/Assets/pis1.jpg";
import pis2 from "../Components/Assets/pis2.jpg";
import pis3 from "../Components/Assets/pis3.jpg";
import pis4 from "../Components/Assets/pis4.png";
import pis5 from "../Components/Assets/pis5.jpg";
import pis6 from "../Components/Assets/pis6.jpg";
import pis7 from "../Components/Assets/pis7.jpg";
import pis8 from "../Components/Assets/pis8.jpg";
import pis9 from "../Components/Assets/pis9.jpg";

// Event images
import udbhav_img from "../Components/Assets/3.png";
import ted_img from "../Components/Assets/ted.jpg";
import ren_img from "../Components/Assets/ren.jpg";

// Focus area icons
import { FiCpu, FiActivity, FiTruck, FiShield, FiZap, FiGlobe } from "react-icons/fi";

const startupImages = [
  { src: sl1, alt: "CoolieWale", link: "https://www.cooliewale.in/" },
  { src: sl2, alt: "CashCry", link: "https://www.cashcry.com/" },
  { src: sl3, alt: "Darjie" },
  { src: sl4, alt: "Gaming Ecosystem", link: "https://gamingecosystem.in/" },
  { src: sl5, alt: "Shipizens", link: "https://shipizens.com/" },
  { src: sl6, alt: "Inaequalis Consulting" },
  { src: sl7, alt: "GeoHunt Solutions" },
  { src: sl8, alt: "Saboroso" },
  { src: sl9, alt: "Henix Rehab", link: "https://henixrehab.com/" },
  { src: sl10, alt: "Xuberant Solutions" },
];

const preIncubatedImages = [
  { src: pis1, alt: "Pre-Incubated 1" },
  { src: pis2, alt: "Pre-Incubated 2" },
  { src: pis3, alt: "Pre-Incubated 3" },
  { src: pis4, alt: "Pre-Incubated 4" },
  { src: pis5, alt: "Pre-Incubated 5" },
  { src: pis6, alt: "Pre-Incubated 6" },
  { src: pis7, alt: "Pre-Incubated 7" },
  { src: pis8, alt: "Pre-Incubated 8" },
  { src: pis9, alt: "Pre-Incubated 9" },
];

const focusAreas = [
  { icon: FiCpu, title: "AI & IoT", desc: "Artificial Intelligence, Machine Learning, and Internet of Things solutions" },
  { icon: FiActivity, title: "Healthcare & MedTech", desc: "Medical devices, health monitoring, and biotechnology innovations" },
  { icon: FiTruck, title: "Transport & Logistics", desc: "Smart transportation, supply chain, and logistics technology" },
  { icon: FiShield, title: "Safety & Security", desc: "Women safety, cyber security, and surveillance solutions" },
  { icon: FiZap, title: "Clean Energy", desc: "Solar power, green energy, and sustainable technology" },
  { icon: FiGlobe, title: "E-Commerce & FinTech", desc: "Digital commerce, payments, and financial technology" },
];

const events = [
  { img: udbhav_img, title: "Udbhav - Youth Summit", desc: "November 24-26, 2023 · MNNIT Allahabad", link: "/events" },
  { img: ted_img, title: "TEDxMNNIT 2023", desc: "November 19, 2023 · Exploring Uncharted Waters", link: "/events" },
  { img: ren_img, title: "Renaissance 2024 - E-Summit", desc: "January 15, 2024 · MNNIT Allahabad", link: "/events" },
];

const AnimatedSection = ({ children, className = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Learn more" highlight="About Us" subtitle="Fostering innovation and entrepreneurship at MNNIT" />
          <AnimatedSection>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-gray-600 leading-relaxed text-center">
                The Innovation and Incubation Hub MNNIT Foundation (IIHMF) at Motilal Nehru National Institute of Technology Allahabad fosters innovation and entrepreneurship by providing mentorship, networking, funding, and business resources. It bridges academia and industry, driving technological advancements and economic growth, and empowers entrepreneurs, nurturing a vibrant startup ecosystem on campus and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed text-center">
                IIHMF is also a recognised inclusive Technology Business Incubator (i-TBI) and facilitating the start-up inline with the NIDHI i-TBI guidelines of the Department of Science and Technology (DST).
              </p>
              <p className="text-gray-600 leading-relaxed text-center">
                It is also a recognised incubator of Uttar Pradesh Electronic Corporation Ltd. (UPLC) under StartinUP scheme of the Government of Uttar Pradesh and facilitating the StartUps, inline with the startup policy.
              </p>
              <div className="text-center pt-4">
                <Link to="/about" className="btn-primary">
                  Read More →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="section-container">
          <SectionHeading title="Our" highlight="Events" subtitle="Flagship events driving innovation and collaboration" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {events.map((event, i) => (
              <AnimatedSection key={i} className={`animation-delay-${i * 200}`}>
                <Link to={event.link} className="block group">
                  <div className="card card-hover overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img src={event.img} alt={event.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display font-bold text-white text-lg">{event.title}</h3>
                        <p className="text-white/80 text-sm mt-1">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Incubated Startups Carousel */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Our" highlight="Startups" subtitle="Companies incubated at IIHMF" />
          <LogoCarousel images={startupImages} text="Startups" />
        </div>
      </section>

      {/* Pre-Incubated Startups */}
      <section className="py-10 bg-gray-50">
        <div className="section-container">
          <SectionHeading title="Pre-Incubated" highlight="Startups" />
          <LogoCarousel images={preIncubatedImages} text="Pre-Incubated" />
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Our Focus" highlight="Areas" subtitle="Key domains driving our innovation ecosystem" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, i) => (
              <AnimatedSection key={i}>
                <div className="card p-6 text-center group hover:bg-primary-500 transition-colors duration-300 cursor-default">
                  <div className="w-14 h-14 rounded-xl bg-accent-50 text-accent-500 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <area.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary-500 mb-2 group-hover:text-white transition-colors">{area.title}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">{area.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
