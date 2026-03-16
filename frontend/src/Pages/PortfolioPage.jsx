import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import StartupCard from "../Components/StartupCard";

// Incubated startup logos
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

// Pre-incubated
import pis5 from "../Components/Assets/pis5.jpg";
import pis7 from "../Components/Assets/pis7.jpg";
import pis8 from "../Components/Assets/pis8.jpg";

const incubated = [
  { head: "Henix Rehab Private Limited", founder_name: "Mr. Sajal Kumar Babu Degala, Ms. Priyanka Kumari, Ms. Kriti Gupta, Mr. Suresh Aligi", core_area: "IoMT, Medical Devices and Services", img: sl9, desc: "We are an innovative healthcare technology startup focused on revolutionizing patient care through advanced AI and IoT technologies. Based in India, Henix Rehab is dedicated to enhancing the efficiency and effectiveness of health monitoring and Electronic Health Record (EHR) management systems.", link: "https://henixrehab.com/" },
  { head: "Inaequalis Consulting Pvt. Ltd.", founder_name: "Ms. Snigdhaa Ritesh, Mr. Ritesh Saxena", core_area: "Femtech", areas: "Big Data, AI, Crime Data Analytics, IoT B2G, B2C", img: sl6, desc: "We are an award-winning Social Startup (Women Safety & Empowerment). We have developed an Innovative Women Safety Solution using AI, Big Data & IoT Technologies for Women Helplines." },
  { head: "Saboroso Food Private Limited", founder_name: "Mrs. Kanchan Singh, Ms. Aditi Singh", areas: "Food Tech, IoT, B2C, Waste Management", img: sl8, desc: "Saboroso is a smart food kiosk leveraging modern technology for efficient order management, inventory control, and waste reduction." },
  { head: "Gaming Ecosystem Pvt. Ltd.", founder_name: "Mr. Aayog Yadav, Mr. Shivam Rai, Mr. Vipin Yadav", areas: "Gaming, 3D, AI, Research, XR", img: sl4, desc: "At Gaming Ecosystem, we're pioneering deep technology innovations to enhance the gaming and XR experience.", link: "https://gamingecosystem.in/" },
  { head: "Duotet Private Limited", founder_name: "Mr. Rishabh Singh, Mr. Arvind Singh", areas: "Computer vision, Machine learning, AI", img: sl3, desc: "Revolutionizing bespoke fashion with AI and computer vision, offering affordable, custom-made party wear." },
  { head: "Shipizens Transportation Pvt. Ltd.", founder_name: "Mr. Rishabh Singh, Mr. Arvind Singh", core_area: "Computer vision, Machine learning, AI", img: sl5, desc: "Shipizens bridges the transport gap for small businesses and individuals with reliable shipping, real-time tracking, and AI-driven safety.", link: "https://shipizens.com/" },
  { head: "GeoHunt Solutions Pvt. Ltd.", founder_name: "Dr. Dinesh Kumar Azad, Mrs. Usha Kumari", core_area: "GIS, AI and Machine Learning", img: sl7, desc: "GeoHunt Solutions gives services and solutions through GIS, Remote Sensing, GPS, Photogrammetry, LiDAR, IoT, AI, ML, and more." },
  { head: "CashCry", founder_name: "Mr. Bhanu Pratap Singh", core_area: "E-Commerce, Retail, Fintech & Wealthtech", img: sl2, desc: "CashCry is a cashback and rewards platform designed to maximize savings for consumers while providing significant value to partner merchants.", link: "https://www.cashcry.com/" },
  { head: "CoolieWale", founder_name: "Mr. Utsav Gupta", core_area: "Travel, Tourism Transportation & Logistics", img: sl1, desc: "CoolieWale is a pioneering startup in the Railway Industry, specializing in digitalizing the relationship between coolies and passengers.", link: "https://www.cooliewale.in/" },
  { head: "Xuberant Solutions Pvt Ltd", founder_name: "Manav Mishra & Pratyush Kumar", core_area: "Solar PV Power Based Systems", img: sl10, desc: "We are trying to solve the problems of farmers by selling the yield from their farms in dried form, increasing shelf life and profits." },
];

const preIncubated = [
  { head: "Lipopest", founder_name: "Dr. Sangeeta Negi and Utpreksha Thapliyal", core_area: "Sustainable Technology", img: pis8, desc: "The startup aims to develop a cutting-edge biopesticide that outperforms traditional chemical pesticides and adheres to environmental sustainability." },
  { head: "GAJARI BRISK", founder_name: "Gaurav Bhakat, Ishita Jain", core_area: "Automotive Sector, Green Energy, Sustainability", img: pis5, desc: "Our startup focuses on a Hybrid Auto-Rickshaw with dual electric and CNG powertrains, aiming to revolutionize the industry." },
  { head: "TimeTable", founder_name: "Shreyas M. Sherekar", areas: "Subscription System", img: pis7, desc: "Creating a timetable using artificial intelligence." },
];

const PortfolioPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [tab, setTab] = useState("incubated");

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Portfolio</h1>
          <p className="mt-3 text-white/70 text-lg">Our startups driving innovation across industries</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="section-container">
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setTab("incubated")}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  tab === "incubated" ? "bg-white text-primary-500 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Incubated Startups ({incubated.length})
              </button>
              <button
                onClick={() => setTab("pre-incubated")}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  tab === "pre-incubated" ? "bg-white text-primary-500 shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Pre-Incubated ({preIncubated.length})
              </button>
            </div>
          </div>

          {/* Startup Cards */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {(tab === "incubated" ? incubated : preIncubated).map((startup, i) => (
              <StartupCard key={i} {...startup} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
