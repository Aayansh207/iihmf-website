import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FiFileText, FiCheckCircle } from "react-icons/fi";

const policiesData = {
  incubation: {
    title: "Startups / Incubation Policy",
    subtitle: "Guidelines for startup incubation at IIHMF",
    sections: [
      { heading: "Eligibility Criteria", items: ["Innovative technology-based startups", "Startups aligned with IIHMF focus areas", "Startups registered or willing to register under Indian laws", "Early-stage to growth-stage startups"] },
      { heading: "Selection Process", items: ["Online application submission", "Preliminary screening by evaluation committee", "Presentation and pitching session", "Final selection by Board of Directors"] },
      { heading: "Support Provided", items: ["Office space and infrastructure", "Mentorship and technical guidance", "Networking and investor connect", "Access to MNNIT labs and resources", "Financial assistance under DST NIDHI guidelines"] },
      { heading: "Duration", items: ["Pre-incubation: Up to 6 months", "Incubation: Up to 3 years", "Extension based on performance review"] },
    ],
  },
  leave: {
    title: "Leave Policy",
    subtitle: "Leave guidelines for IIHMF staff and incubatees",
    sections: [
      { heading: "Types of Leave", items: ["Casual Leave (CL)", "Earned Leave (EL)", "Sick Leave (SL)", "Maternity/Paternity Leave"] },
      { heading: "Application Process", items: ["Submit leave application through designated portal", "Prior approval required for planned leaves", "Emergency leaves to be communicated within 24 hours"] },
      { heading: "General Guidelines", items: ["Maintain minimum attendance requirements", "Leave balance updated quarterly", "Unused leaves as per policy norms"] },
    ],
  },
  attendance: {
    title: "Attendance Policy",
    subtitle: "Attendance guidelines for IIHMF operations",
    sections: [
      { heading: "Working Hours", items: ["Standard working hours: 9:30 AM to 5:30 PM", "Flexible timings for incubatees with prior approval", "Core hours: 10:00 AM to 4:00 PM"] },
      { heading: "Attendance Requirements", items: ["Biometric/digital attendance mandatory", "Minimum 75% attendance required per month", "Weekly progress reports for incubated startups"] },
      { heading: "Non-Compliance", items: ["Warning notice after 3 consecutive unauthorised absences", "Review by management committee", "Terms as per individual agreements"] },
    ],
  },
};

const PoliciesPage = () => {
  const { type } = useParams();
  const policy = policiesData[type] || policiesData.incubation;

  useEffect(() => { window.scrollTo(0, 0); }, [type]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">{policy.title}</h1>
          <p className="mt-3 text-white/70 text-lg">{policy.subtitle}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-8">
            {policy.sections.map((section, i) => (
              <div key={i} className="card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent-50 text-accent-500 flex items-center justify-center">
                    <FiFileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary-500">{section.heading}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PoliciesPage;
