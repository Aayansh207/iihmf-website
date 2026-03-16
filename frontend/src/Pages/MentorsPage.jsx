import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProfileCard from "../Components/ProfileCard";
import SectionHeading from "../Components/SectionHeading";
import m1 from "../Components/Assets/m1.jpeg";
import con1 from "../Components/Assets/con1.jpeg";
import con2 from "../Components/Assets/con2.jpeg";
import con3 from "../Components/Assets/con3.jpeg";
import con4 from "../Components/Assets/con4.jpg";

const mentors = [
  { img: m1, name: "Chintan Oza", desc: "Founder of Anantam Ecosystems, helping startups with strategy, fundraising, and growth to IPO or acquisition.", linkedin: "https://www.linkedin.com/in/chintanoza/" },
];

const consultants = [
  { img: con1, name: "Arvind Verma", desc: "CEO of Vehiclecare, leading a team to deliver quality car service solutions and mentoring tech startups.", linkedin: "https://www.linkedin.com/in/arvindvehiclecare/" },
  { img: con2, name: "Vishal Kumar Gaur", desc: "Vishal Kumar Gaur, Assistant Professor at MNNIT Allahabad, specializes in power electronics, control systems, and electrical machines.", faculty_profile: "http://mnnit.ac.in/profile/vkgaur", email: "vkgaur@mnnit.ac.in" },
  { img: con3, name: "Ambak Kumar Rai", desc: "Ambak Kumar Rai, Associate Professor at MNNIT Allahabad, excels in biotechnology and holds diverse administrative roles.", faculty_profile: "http://www.mnnit.ac.in/profile/previewr.php?id=1466", email: "ambakrai@mnnit.ac.in" },
  { img: con4, name: "Dr. J.C. Atwal", desc: "Assistant Professor at MNNIT Allahabad, excels in mechanical engineering with expertise in tribology and computational design.", faculty_profile: "http://mnnit.ac.in/profile/jcatwal", email: "jcatwal@mnnit.ac.in" },
];

const MentorsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Our Mentors</h1>
          <p className="mt-3 text-white/70 text-lg">Guiding the next generation of innovators</p>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <SectionHeading title="Our" highlight="Mentors" />
          <div className="max-w-sm mx-auto">
            {mentors.map((m, i) => <ProfileCard key={i} {...m} />)}
          </div>
        </div>
      </section>

      {/* Consultants */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeading title="Our" highlight="Consultants" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {consultants.map((c, i) => <ProfileCard key={i} {...c} />)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentorsPage;
