// AwardCard.js
import React, { useState, useEffect, useRef } from 'react';
import './AwardCard.css';
import { IoCaretBackCircleOutline, IoCaretForwardCircleOutline } from 'react-icons/io5';

const AwardCard = ({ award }) => {
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
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % award.images.length),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, award.images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? award.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % award.images.length);
  };

  return (
    <div className="award-card">
      <div className="award-details">
        <h2>{award.title}</h2>
        <p>{award.content}</p>
      </div>
      <div className="award-carousel-wrapper">
        <div className="award-carousel-back-btn" onClick={goToPrevious}>
          <IoCaretBackCircleOutline size={30} color="#000" />
        </div>
        <div className="award-carousel-next-btn" onClick={goToNext}>
          <IoCaretForwardCircleOutline size={30} color="#000" />
        </div>
        <div className="award-carousel-items" style={{ transform: `translateX(${-currentIndex * 200}px)` }}>
          {award.images.map((img, index) => (
            <div className="award-carousel-item" key={index}>
              <img src={img} alt={`Award ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
