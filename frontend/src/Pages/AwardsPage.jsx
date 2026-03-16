import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AwardCard from "../Components/AwardCard";
import SectionHeading from "../Components/SectionHeading";
import av1 from "../Components/Assets/av1.jpg";
import av2 from "../Components/Assets/av2.jpg";
import av3 from "../Components/Assets/av3.jpg";
import rh1 from "../Components/Assets/rh1.jpg";
import rl3 from "../Components/Assets/rl3.jpg";
import eh2 from "../Components/Assets/eh2.jpg";

const awards = [
  {
    title: "RailHeath Achievements and Recognitions",
    content: "We are RailHeath, a startup providing health facilities during train journeys. We ranked in the top 10 out of 1000 teams in Cisco and NASSCOM Foundation's thingQbator Cohort 6.0, receiving ₹5 lakhs in funding. We also secured 2nd place in MNNIT's Cohort 1.0 and the top 10 in IIT Roorkee's Ideastrom event.",
    images: [rl3, rh1, eh2],
  },
  {
    title: "Avicen Achievements",
    content: "We are Avicen AI, dedicated to empowering businesses with cutting-edge AI agents. Founded by Aditya Singh and Anushka Gupta, we have achieved significant recognition, securing first place in the B-Plan (Renaissance 2024), Pitchers (Aavishkar 2024), and Navachar (Aavishkar 2024) competitions. Additionally, we are two-time finalists in IIM Bangalore's prestigious business plan competitions. We proudly serve over 7 clients, delivering exceptional AI solutions.",
    images: [av1, av2, av3],
  },
];

const AwardsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-br from-gold-400 to-gold-600">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Awards & Achievements</h1>
          <p className="mt-3 text-white/80 text-lg">Celebrating excellence in innovation</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Our" highlight="Awards" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {awards.map((award, i) => (
              <AwardCard key={i} award={award} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AwardsPage;
