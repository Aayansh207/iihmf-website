import React, { useState, useEffect, useRef, useCallback } from "react";
import ban11 from "./Assets/ban11.jpg";
import tbi_b from "./Assets/tbi_b.png";
import c2 from "./Assets/c2.jpeg";
import c3 from "./Assets/c3.jpeg";
import udh from "./Assets/udh.jpg";

const slides = [
  { img: ban11, title: "We", highlight: "Incubate", subtitle: "Next generation technological response to global challenges" },
  { img: c2, title: "We", highlight: "Innovate", subtitle: "Creating a vibrant startup ecosystem" },
  { img: c3, title: "We", highlight: "Empower", subtitle: "Connecting entrepreneurs with mentors and resources" },
  { img: udh, title: "We", highlight: "Transform", subtitle: "Ideas into successful ventures" },
  { img: tbi_b, title: "We", highlight: "Collaborate", subtitle: "Industry and academia working together" },
];

const WORDS = ["Incubate", "Innovate", "Empower", "Transform", "Collaborate"];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const touchStartX = useRef(null);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentWord = WORDS[wordIdx];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % WORDS.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIdx]);

  const goTo = useCallback((i) => setIndex((i + slides.length) % slides.length), []);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 40) {
      if (delta < 0) setIndex((i) => (i + 1) % slides.length);
      else setIndex((i) => (i - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={s.img}
            alt={s.title}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
      ))}

      {/* Text overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
            We{" "}
            <span className="text-accent-300">
              {displayText}
              <span className="animate-typing-cursor text-accent-300">|</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
            {slides[index].subtitle}
          </p>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "w-8 h-2.5 bg-accent-400"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 60" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,60 L0,20 Q720,0 1440,20 L1440,60 Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default HeroCarousel;
