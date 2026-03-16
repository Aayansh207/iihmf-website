import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProfileCard from "../Components/ProfileCard";
import SectionHeading from "../Components/SectionHeading";
import d1 from "../Components/Assets/team1.jpg";
import d2 from "../Components/Assets/team-2.jpg";
import d3 from "../Components/Assets/team-3.jpg";
import d4 from "../Components/Assets/team-4.jpg";
import d5 from "../Components/Assets/team-5.jpg";
import d6 from "../Components/Assets/team-6.jpg";

const director = {
  img: d1,
  name: "Prof. R.S.Verma",
  desc: "Dr. Rama Shanker Verma, Director at MNNIT, is a renowned biotechnologist with extensive academic and research achievements.",
  faculty_profile: "http://www.mnnit.ac.in/index.php/institute/437-profile-prof-rs-verma",
  email: "director@mnnit.ac.in",
  gscholar: "https://scholar.google.co.in/citations?user=LrxrULcAAAAJ&hl=en",
};

const boardMembers = [
  { img: d2, name: "Prof. R.P.Tewari", desc: "Dr. Ravi Prakash Tewari, MNNIT Allahabad Professor, specializes in biomechanics, robotics, and biomaterials research.", faculty_profile: "http://mnnit.ac.in/profile/rptewari", email: "rptewari@mnnit.ac.in" },
  { img: d3, name: "Prof. Ramesh Pandey", desc: "Prof. Ramesh Pandey, MNNIT Professor, specializes in structural analysis and composite structures with extensive teaching experience.", faculty_profile: "http://mnnit.ac.in/profile/ramesh", email: "ramesh@mnnit.ac.in", gscholar: "https://scholar.google.co.in/citations?hl=en&user=ApZfLYAAAAAJ" },
  { img: d5, name: "Prof. Basant Kumar", desc: "Prof. Basant Kumar, MNNIT Professor, specializes in digital communication and biomedical signal processing with extensive teaching experience.", faculty_profile: "http://mnnit.ac.in/profile/singhbasant", email: "singhbasant@mnnit.ac.in", gscholar: "https://scholar.google.co.in/citations?hl=en&user=JQHgzL0AAAAJ", linkedin: "https://www.linkedin.com/in/basant-kumar-9808476b/" },
  { img: d4, name: "Prof. Animesh Kumar Ojha", desc: "Prof. Animesh Kumar, MNNIT Professor, specializes in experimental and theoretical condensed matter physics with extensive research experience.", faculty_profile: "http://mnnit.ac.in/profile/animesh", email: "animesh@mnnit.ac.in", gscholar: "https://scholar.google.co.in/citations?hl=en&user=SaWuUsMAAAAJ" },
  { img: d6, name: "Dr. Anubhav Rawat", desc: "Dr. Anubhav Rawat, MNNIT Assistant Professor, specializes in fluid mechanics and multiphase flows with extensive teaching experience.", faculty_profile: "http://mnnit.ac.in/profile/anubhav-r", email: "anubhav-r@mnnit.ac.in", gscholar: "https://scholar.google.co.in/citations?user=svrbtdcAAAAJ&hl=en&oi=ao", linkedin: "https://www.linkedin.com/in/dr-anubhav-rawat-73ab84a7/" },
];

const BoardPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Board of Directors</h1>
          <p className="mt-3 text-white/70 text-lg">Leadership driving innovation at IIHMF</p>
        </div>
      </section>

      {/* Director MNNIT */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <SectionHeading title="Director" highlight="MNNIT" />
          <div className="max-w-sm mx-auto">
            <ProfileCard {...director} />
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeading title="Board" highlight="Members" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {boardMembers.map((member, i) => (
              <ProfileCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BoardPage;
