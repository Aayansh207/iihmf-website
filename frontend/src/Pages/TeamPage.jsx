import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProfileCard from "../Components/ProfileCard";
import SectionHeading from "../Components/SectionHeading";
import ram from "../Components/Assets/ram.jpg";
import man from "../Components/Assets/man.jpg";
import suraj from "../Components/Assets/suraj.jpg";
import Sakshi from "../Components/Assets/sakshi.jpg";

const teamMembers = [
  { img: ram, name: "Dr. Ram Kumar Mishra (CEO-Incharge)", desc: "12+ years in corporate services, expert in PSUs and private sector, multiple academic qualifications.", linkedin: "https://www.linkedin.com/in/dr-ram-kumar-mishra-884b1996/" },
  { img: man, name: "CS Pradeep Singh (Manager)", desc: "Commerce postgraduate, ICSI associate member, and Company Secretary with 4+ years of corporate law experience.", email: "pradeepdhatacs@gmail.com" },
  { img: suraj, name: "Suraj Tiwari (Accountant)", desc: "B.Com, MBA, CA(Inter)", email: "tisuraj91@gmail.com" },
  { img: Sakshi, name: "Sakshi (Office Assistant)", desc: "B.sc completed, M.sc under process", email: "sharmasakshi02514@gmail.com" },
];

const TeamPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Our Team</h1>
          <p className="mt-3 text-white/70 text-lg">The people behind IIHMF's success</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Team" highlight="Members" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, i) => (
              <ProfileCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
