import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SectionHeading from "../Components/SectionHeading";
import { FiSend, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const steps = [
  { title: "Submit Application", desc: "Fill out the online incubation application form with your startup details and business plan." },
  { title: "Preliminary Screening", desc: "Our evaluation committee reviews all applications based on innovation, feasibility, and market potential." },
  { title: "Pitch Presentation", desc: "Shortlisted teams present their ideas to the Board of Directors and industry mentors." },
  { title: "Selection & Onboarding", desc: "Selected startups receive offer letters and begin the onboarding process with dedicated support." },
];

const benefits = [
  "Office space and co-working infrastructure",
  "Mentorship from industry experts and academia",
  "Access to MNNIT labs and research facilities",
  "Networking with investors and VCs",
  "Financial support under DST NIDHI guidelines",
  "Legal, IPR, and compliance support",
  "Access to workshops, hackathons, and events",
  "StartinUP scheme benefits and recognition",
];

const ApplyIncubationPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative py-20 bg-gradient-to-br from-accent-500 to-accent-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Apply for Incubation</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Turn your innovative idea into a successful venture with IIHMF's comprehensive incubation support
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSev7gWFtCHbexbBw28l7F3x_8qwM5GwFIE55w7nK9csJJgeJw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-accent-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            <FiSend className="w-5 h-5" /> Apply Now
          </a>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Application" highlight="Process" subtitle="Simple steps to join our incubation program" />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="card p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary-500 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="section-container">
          <SectionHeading title="Why" highlight="IIHMF?" subtitle="What you get when you join our incubation program" />
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-3">
                <FiCheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Ready to Begin?</h2>
          <p className="text-gray-600 mb-6">Submit your application today and take the first step towards building your dream startup.</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSev7gWFtCHbexbBw28l7F3x_8qwM5GwFIE55w7nK9csJJgeJw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-lg px-8 py-4"
          >
            Apply for Incubation <FiArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ApplyIncubationPage;
