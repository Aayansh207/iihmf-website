import React, { useState, useEffect, useRef } from "react";
import "./ASCarousel.css";
import is1 from "../Assets/is1.jpg";
import is3 from "../Assets/is3.jpg";
import is4 from "../Assets/is4.jpg";
import is5 from "../Assets/is5.jpg";
import is6 from "../Assets/is6.jpg";


import { IoCaretBackCircleOutline, IoCaretForwardCircleOutline } from "react-icons/io5";

const images = [is1, is3, is4, is5,is6,is1, is3, is4, is5,is6];

const ASCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="as-carousel">
      <div className="as-content">
        <div className="as-head"><h1>Facilities</h1></div>
        <div className="as-desc">
          <p>The IIHMF Incubation Centre prioritizes providing a well-rounded infrastructure to support our entrepreneurs. Here's a priority-wise breakdown of our facilities:</p>
          <ul>
            <li>
              Co-working Spaces and Individual Cabins: Our top priority is offering comfortable and flexible working environments, including private cabins for focused work and collaborative co-working spaces to foster community interaction.
            </li>
            <li>
              Conference Room: Essential for team meetings and client interactions, our well-equipped conference room is designed to facilitate effective communication and collaboration.
            </li>
            <li>
              Computers and Printers: High-quality workstations including computers and printers are readily available to ensure smooth and efficient daily operations.
            </li>
            <li>
              Seminars and Workshops: We regularly host seminars and workshops to provide valuable learning opportunities, networking, and skill development for our startup members.
            </li>
          </ul>
          <p>Our focus is on creating a productive and supportive environment to help you succeed.</p>
        </div>
        {/* <div className="as-extra-facilities">
          <h2>Additional Facilities</h2>
          <ul>
            <li>Additional meeting rooms for small group discussions.</li>
            <li>Access to kitchen with refreshments.</li>
          </ul>
        </div> */}
      </div>
      <div className="as-carousel-wrapper">
        <div className="as-carousel-back-btn" onClick={goToPrevious}>
          <IoCaretBackCircleOutline size={50} color="#fff" />
        </div>
        <div className="as-carousel-next-btn" onClick={goToNext}>
          <IoCaretForwardCircleOutline size={50} color="#fff" />
        </div>
        <div className="as-carousel-items" style={{ transform: `translateX(${-currentIndex * 420}px)` }}>
          {images.map((img, index) => (
            <div className={`as-carousel-item ${index === currentIndex + 1? 'active' : ''}`} key={index}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ASCarousel;
