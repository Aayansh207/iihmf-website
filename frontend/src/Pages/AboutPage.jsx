import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SectionHeading from "../Components/SectionHeading";
import visionImg from "../Components/Assets/vision.jpg";
import missionImg from "../Components/Assets/mission1.jpg";
import asb1 from "../Components/Assets/asb11.jpeg";
import asb2 from "../Components/UdbhavImages/u16.jpg";
import asb3 from "../Components/Assets/asb3.jpg";
import asb4 from "../Components/Assets/asb44.jpeg";

const missionStatements = [
  "To create a state of art infrastructure to facilitate and nurture the innovative ideas to turn into a viable and commercialised product or service.",
  "To provide and facilitate technical, financial, legal, IPR related assistance to the entrepreneurs and startups.",
  "To pave the ways towards fostering entrepreneurship by way of industry and academia collaboration.",
  "To create a vibrant startup ecosystem by way of networking between the entrepreneurs, academic institutions, financial institutions and other stakeholders.",
];

const bannerImages = [asb1, asb2, asb3, asb4];

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [typedTexts, setTypedTexts] = useState(missionStatements.map(() => ""));
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (missionInView && !isTyping) {
      setIsTyping(true);
      missionStatements.forEach((statement, i) => {
        let index = 0;
        const typingInterval = setInterval(() => {
          setTypedTexts((prev) => {
            const newTexts = [...prev];
            if (index < statement.length) {
              newTexts[i] = newTexts[i] + statement[index];
              index++;
            } else {
              clearInterval(typingInterval);
            }
            return newTexts;
          });
        }, 15);
      });
    }
  }, [missionInView, isTyping]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
          {bannerImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-primary-500/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white animate-fade-in-up">
            About Us
          </h1>
        </div>
      </section>

      {/* About Text */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p className="text-gray-600 leading-relaxed text-lg">
              The Innovation and Incubation Hub MNNIT Foundation (IIHMF) at Motilal Nehru National Institute of Technology Allahabad fosters innovation and entrepreneurship by providing mentorship, networking, funding, and business resources. It bridges academia and industry, driving technological advancements and economic growth, and empowers entrepreneurs, nurturing a vibrant startup ecosystem on campus and beyond.
            </p>
            <p className="text-gray-600 leading-relaxed">
              IIHMF is also a recognised inclusive Technology Business Incubator (i-TBI) and facilitating the start-up inline with the NIDHI i-TBI guidelines of the Department of Science and Technology (DST).
            </p>
            <p className="text-gray-600 leading-relaxed">
              It is also a recognised incubator of Uttar Pradesh Electronic Corporation Ltd. (UPLC) under StartinUP scheme of the Government of Uttar Pradesh and facilitating the StartUps, inline with the startup policy.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 lg:py-24 bg-gray-50" ref={visionRef}>
        <div className="section-container">
          <SectionHeading title="Our" highlight="Vision" />
          <div className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ${visionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-2 text-accent-300 opacity-50"><ImQuotesLeft size={40} /></div>
              <div className="absolute -bottom-4 -right-2 text-accent-300 opacity-50"><ImQuotesRight size={40} /></div>
              <p className="text-gray-700 leading-relaxed text-lg px-8 py-4 italic">
                To create and facilitate a culture of creativity, innovation and entrepreneurship by way of creating a state of art infrastructure driven with innovative ideas and emerging technologies to generate employment opportunities, ensuring inclusive growth and sustainable development.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={visionImg} alt="Vision" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24" ref={missionRef}>
        <div className="section-container">
          <SectionHeading title="Our" highlight="Mission" />
          <div className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start transition-all duration-700 ${missionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
              <img src={missionImg} alt="Mission" className="w-full h-72 object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-display font-bold text-xl text-primary-500 mb-6">Mission Statements:</h3>
              <div className="space-y-4">
                {missionStatements.map((stmt, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {typedTexts[index]}
                      {typedTexts[index].length < stmt.length && <span className="animate-typing-cursor text-accent-500">|</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
