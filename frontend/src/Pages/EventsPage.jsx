import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SectionHeading from "../Components/SectionHeading";

// Event images
import udbhav_img from "../Components/Assets/3.png";
import ted_img from "../Components/Assets/ted.jpg";
import ren_img from "../Components/Assets/ren.jpg";

// Udbhav gallery
import u1 from "../Components/UdbhavImages/u1.jpg";
import u2 from "../Components/UdbhavImages/u2.jpg";
import u3 from "../Components/UdbhavImages/u3.jpg";
import u7 from "../Components/UdbhavImages/u7.jpg";
import u8 from "../Components/UdbhavImages/u8.jpg";
import u9 from "../Components/UdbhavImages/u9.jpg";
import u11 from "../Components/UdbhavImages/u11.jpg";
import u13 from "../Components/UdbhavImages/u13.jpg";
import u14 from "../Components/UdbhavImages/u14.jpg";
import u15 from "../Components/UdbhavImages/u15.jpg";
import u16 from "../Components/UdbhavImages/u16.jpg";

// TEDx gallery
import t1 from "../Components/tedImages/t1.jpg";
import t2 from "../Components/tedImages/t2.jpg";
import t3 from "../Components/tedImages/t3.jpg";
import t4 from "../Components/tedImages/t4.jpg";
import t5 from "../Components/tedImages/t5.jpg";
import t6 from "../Components/tedImages/t6.jpg";
import t7 from "../Components/tedImages/t7.jpg";
import t8 from "../Components/tedImages/t8.jpg";
import t9 from "../Components/tedImages/t9.jpg";
import t10 from "../Components/tedImages/t10.jpg";

// Renaissance gallery
import r1 from "../Components/renImages/r1.jpg";
import r2 from "../Components/renImages/r2.jpg";
import r3 from "../Components/renImages/r3.jpg";
import r4 from "../Components/renImages/r4.jpg";
import r5 from "../Components/renImages/r5.jpg";
import r6 from "../Components/renImages/r6.JPG";
import r7 from "../Components/renImages/r7.JPG";
import r8 from "../Components/renImages/r8.JPG";
import r9 from "../Components/renImages/r9.JPG";
import r10 from "../Components/renImages/r10.JPG";
import r11 from "../Components/renImages/r11.JPG";
import r12 from "../Components/renImages/r12.JPG";

// Other events
import tbi_b from "../Components/Assets/tbi_b.png";
import jnv from "../Components/Assets/jnv.jpg";
import cof1 from "../Components/Assets/2july.jpeg";
import cof2 from "../Components/Assets/cof2.JPG";
import cof3 from "../Components/Assets/cof3.jpeg";
import cof5 from "../Components/Assets/cof5.jpg";
import cof01 from "../Components/Assets/cof01.jpg";

const majorEvents = [
  {
    name: "Udbhav - Youth Summit",
    date: "November 24-26, 2023",
    img: udbhav_img,
    link: "https://udbhavmnnit.in/",
    desc: "Udbhav - Youth Summit, held from November 24-26, 2023, at MNNIT Allahabad, showcased young talent and fostered innovation. Organized by the Institute Innovation Council (IIC) under MHRD in collaboration with Innovation & Incubation Hub MNNIT Foundation (IIHMF), Prayagraj. The summit united academia, venture capitalists, and entrepreneurs. Participants engaged in workshops, panel discussions, and competitions, inspiring creativity and entrepreneurship.",
    gallery: [u16, u14, u3, u7, u8, u9, u11, u13, u2, u15, u1],
  },
  {
    name: "TEDxMNNIT 2023",
    date: "November 19, 2023",
    img: ted_img,
    link: "https://tedxmnnit.com/",
    desc: "TEDxMNNIT 2023, themed \"Exploring Uncharted Waters,\" ignited change on November 19th at Motilal Nehru National Institute of Technology Allahabad. Highlights included Geetika Mehta's shift to social impact, Lt. Cdr Pravin Tulpule's journey as \"Happy Uncle,\" Anshul Rustaggi's ZionVerse metaverse, and insights from Vijender Chauhan and Dr. Mohit Dayal Gupta. Organized in collaboration with IIHMF and E-Cell MNNIT.",
    gallery: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10],
  },
  {
    name: "Renaissance 2024 - E-Summit",
    date: "January 15, 2024",
    img: ren_img,
    link: "https://e-cellmnnit.netlify.app/",
    desc: "The E-Summit Renaissance-2024, held on January 15th at MNNIT Allahabad, was a flagship event aimed at fostering entrepreneurship and innovation. The summit brought together investors, entrepreneurs, and venture capitalists. Key events included B-Plan pitches, E-Talks featuring insights from industry leaders, panel discussions, a Mock IPL Auction, and the Game of Stocks.",
    gallery: [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12],
  },
];

const otherEvents = [
  { url: cof01, description: "IIHMF of MNNIT and NIEF of the University of Allahabad have signed a Memorandum of Understanding (MOU) for mutual support towards the development of entrepreneurship and the startup ecosystem.", date: "11 July 2024" },
  { url: cof1, description: "Prof. Arun K. Thittai's session at IIHMF focused on AI in medical equipment development.", date: "2 July 2024" },
  { url: cof2, description: "Mr. Abhishek Tiwari from KPMG discussed various modes of financial assistance to the Incubator and Startups.", date: "7 June 2024" },
  { url: cof3, description: "On World Environment Day, June 5, IIHMF celebrated by planting trees.", date: "5 June 2024" },
  { url: tbi_b, description: "IITs and NITs support startups to realize Viksit Bharat 2047. Prof. Rajiv Prakash of IIT Bhilai shared insights on innovation at IIHMF, MNNIT Prayagraj, focusing on FinTech, AgriTech, and IoT.", date: "30 May 2024" },
  { url: jnv, description: 'InnovateMed Insights: A journey through bench to beside excellence with Dr. Jitendra N Verma.', date: "4 February 2024" },
  { url: cof5, description: "Innodrive 2024, pioneering the future of mobility with BS VI Technology.", date: "31 January 2024" },
];

const EventsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeEvent, setActiveEvent] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white animate-fade-in-up">Events</h1>
          <p className="mt-3 text-white/70 text-lg">Where innovation meets collaboration</p>
        </div>
      </section>

      {/* Major Events */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <SectionHeading title="Flagship" highlight="Events" />

          {/* Event Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {majorEvents.map((e, i) => (
              <button
                key={i}
                onClick={() => { setActiveEvent(i); setShowGallery(false); }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeEvent === i
                    ? "bg-accent-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {e.name}
              </button>
            ))}
          </div>

          {/* Active Event */}
          <div className="max-w-5xl mx-auto">
            <div className="card overflow-hidden">
              <div className="relative">
                <img src={majorEvents[activeEvent].img} alt={majorEvents[activeEvent].name} className="w-full h-64 sm:h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full mb-2">{majorEvents[activeEvent].date}</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">{majorEvents[activeEvent].name}</h2>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-gray-600 leading-relaxed">{majorEvents[activeEvent].desc}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {majorEvents[activeEvent].link && (
                    <a href={majorEvents[activeEvent].link} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                      Visit Website →
                    </a>
                  )}
                  <button onClick={() => setShowGallery(!showGallery)} className="btn-outline text-sm">
                    {showGallery ? "Hide Gallery" : "View Gallery"} ({majorEvents[activeEvent].gallery.length} photos)
                  </button>
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            {showGallery && (
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 animate-fade-in">
                {majorEvents[activeEvent].gallery.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <img src={img} alt="" className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Events/News */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="section-container">
          <SectionHeading title="Events &" highlight="News" subtitle="Latest happenings at IIHMF" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherEvents.map((event, i) => (
              <div key={i} className="card card-hover overflow-hidden">
                <img src={event.url} alt="" className="w-full h-48 object-cover" />
                <div className="p-5">
                  {event.date && (
                    <span className="inline-block px-2.5 py-1 bg-accent-50 text-accent-600 text-xs font-semibold rounded-full mb-3">{event.date}</span>
                  )}
                  <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;
