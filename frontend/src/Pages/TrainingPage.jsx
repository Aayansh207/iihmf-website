import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SectionHeading from "../Components/SectionHeading";
import { FiBarChart2, FiCpu, FiHardDrive, FiZap, FiArrowRight } from "react-icons/fi";

const programs = [
  {
    icon: FiBarChart2,
    title: "Business Growth Strategy",
    desc: "Learn proven strategies to scale your business, from market analysis and competitive positioning to financial planning and growth hacking. This program equips entrepreneurs with the tools and frameworks needed to transform their startup into a sustainable, high-growth enterprise.",
    features: ["Market Analysis & Positioning", "Financial Planning", "Growth Hacking Techniques", "Business Model Innovation"],
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: FiCpu,
    title: "Artificial Intelligence & Machine Learning",
    desc: "Dive deep into the world of AI and ML with hands-on training covering neural networks, deep learning, natural language processing, and computer vision. Build real-world projects and gain the skills to develop intelligent solutions for complex problems.",
    features: ["Neural Networks & Deep Learning", "Natural Language Processing", "Computer Vision", "Real-world AI Applications"],
    color: "from-accent-500 to-accent-600",
  },
  {
    icon: FiHardDrive,
    title: "IoT & Embedded Systems",
    desc: "Master the Internet of Things ecosystem from sensor integration to cloud connectivity. Learn to design, prototype, and deploy IoT solutions using industry-standard hardware and software platforms for smart cities, healthcare, agriculture, and more.",
    features: ["Sensor Integration", "Cloud Connectivity & Platforms", "Edge Computing", "Smart Solutions Development"],
    color: "from-gold-400 to-gold-500",
  },
  {
    icon: FiZap,
    title: "Nano Materials",
    desc: "Explore the fascinating world of nanoscience and nanotechnology. Understand the synthesis, characterization, and applications of nanomaterials across energy, healthcare, electronics, and environmental science. Bridge academic research with practical industry applications.",
    features: ["Nanomaterial Synthesis", "Characterization Techniques", "Energy Applications", "Biomedical Applications"],
    color: "from-purple-500 to-purple-600",
  },
];

const AnimatedCard = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const TrainingPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-br from-accent-500 to-accent-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white animate-float" />
          <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-white animate-float animation-delay-400" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white animate-float animation-delay-800" />
        </div>
        <div className="section-container text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Training & Internships</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Industry-ready programs designed to bridge the gap between academic knowledge and practical expertise
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Our" highlight="Programs" subtitle="Choose from our specialized training programs" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, i) => (
              <AnimatedCard key={i} delay={i * 150}>
                <div className="card overflow-hidden group h-full">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${program.color} p-6 flex items-center gap-4`}>
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">{program.title}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-5">{program.desc}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Key Topics</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {program.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors group-hover:translate-x-1 transition-transform">
                      Learn More <FiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="section-container text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Join our training programs and take the first step towards building your career in cutting-edge technology.</p>
          <a href="mailto:iihmf2022@gmail.com" className="btn-accent text-lg px-8 py-4">
            Contact Us to Enroll →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingPage;
