import React, { useState, useEffect } from "react";
import "./CSS/AboutUsPage.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import asbanner from "../Components/Assets/asbanner2.jpg";
import About from "../Components/About/About";
import visionImg from "../Components/Assets/vision.jpg";
import missionImg from "../Components/Assets/mission1.jpg";
import { useInView } from 'react-intersection-observer';
import asb1 from '../Components/Assets/asb11.jpeg'
import asb2 from '../Components/UdbhavImages/u16.jpg'
import asb3 from '../Components/Assets/asb3.jpg'
import asb4 from '../Components/Assets/asb44.jpeg'
import ASCarousel from "../Components/ASCarousel/ASCarousel";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";


const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { ref: visionHeadRef, inView: visionHeadInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: visionDescRef, inView: visionDescInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: missionHeadRef, inView: missionHeadInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: missionBottomRef, inView: missionBottomInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: aboutUsRef, inView: aboutUsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const missionStatements = [
    "To create a state of art infrastructure to facilitate and nurture the innovative ideas to turn into a viable and commercialised product or service.",
    "To provide and facilitate technical, financial, legal, IPR related assistance to the entrepreneurs and startups.",
    "To pave the ways towards fostering entrepreneurship by way of industry and academia collaboration.",
    "To create a vibrant startup ecosystem by way of networking between the entrepreneurs, academic institutions, financial institutions and other stakeholders."
  ];

  const [typedTexts, setTypedTexts] = useState(missionStatements.map(() => ""));
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (missionBottomInView && !isTyping) {
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
        }, 20);
      });
    }
  }, [missionBottomInView, isTyping, missionStatements]);

  return (
    <div className="aboutus-page">
      <Navbar />
      <div className="as-banner" ref={aboutUsRef}>
        <h1 className={`${aboutUsInView ? 'animate-as':''}`}>About Us</h1>
        <div className="as-banner-fade">
         
        </div>
        <div className="as-banner-img">
          <img className="as-banner-img1" src={asb1} alt="" />
        </div>
        <div className="as-banner-img">
          <img src={asb2} alt="" />
        </div>
        <div className="as-banner-img">
          <img src={asb3} alt="" />
        </div>
        <div className="as-banner-img">
          <img className="as-banner-img2" src={asb4} alt="" />
        </div>
      </div>
      <About />
      <hr />
      <div className="vision" ref={visionHeadRef}>
        <div className={`vision-head ${visionHeadInView ? 'animate-vision-head' : ''}`}>
          <h1>
            Our <span>Vision</span>
          </h1>
        </div>
        <div className={`vision-desc ${visionDescInView ? 'animate-vision-desc' : ''}`} ref={visionDescRef}>
          <div className='vision-left'>
            <div className="left-quote"><ImQuotesLeft size={30}/></div>
            <div className="right-quote"><ImQuotesRight size={30}/></div>
            <p>
              To create and facilitate a culture of creativity, innovation and
              entrepreneurship by way of creating a state of art infrastructure
              driven with innovative ideas and emerging technologies to generate
              employment opportunities, ensuring inclusive growth and
              sustainable development.
            </p>
          </div>
          <div className={`vision-right ${visionDescInView ? 'animate-vision-desc' : ''}`}>
            <img src={visionImg} alt="Vision" />
          </div>
        </div>
      </div>
      <hr />
      <div className="mission">
        <div className={`mission-head ${missionHeadInView ? 'animate-mission-head' : ''}`} ref={missionHeadRef}>
          <h1>Our <span>Mission</span></h1>
        </div>
        <div className={`mission-bottom ${missionBottomInView ? 'animate-mission-bottom' : ''}`} ref={missionBottomRef}>
          <div className="mission-left">
            <img src={missionImg} alt="Mission" />
          </div>
          <div className="mission-right">
            <div className="mission-right-head">
              <h3>Mission Statements:</h3>
            </div>
            <div className="mission-right-container">
              {missionStatements.map((stmt, index) => (
                <div key={index} className="mission-stmt">
                  <p>{typedTexts[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <ASCarousel />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
