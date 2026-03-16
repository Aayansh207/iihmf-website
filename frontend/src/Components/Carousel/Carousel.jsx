import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";
import ban11 from '../Assets/ban11.jpg';
import tbi_b from '../Assets/tbi_b.png';
import c2 from '../Assets/c2.jpeg';
import c3 from '../Assets/c3.jpeg';
import udh from '../Assets/udh.jpg'
import cohort from '../Assets/cohort-4-0-1.jpg'

const slides = [
  { img: cohort, title: 'Fostering Innovations', subtitle: '' },
  { img: ban11, title: 'Fostering Innovations', subtitle: '' },
  { img: c2, title: 'UDBHAV', subtitle: 'Youth summit' },
  { img: c3, title: 'TEDx', subtitle: '' },
  { img: udh, title: 'Udbhav', subtitle: '' },
  { img: tbi_b, title: 'Fostering Innovations', subtitle: '' },
];

const Carousel = ({ autoplay = true, interval = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!autoplay || paused || reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [autoplay, paused, interval]);

  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next(); else prev();
    }
  };

  return (
    <div
      className="custom-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Homepage slideshow"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') prev(); else if (e.key === 'ArrowRight') next(); }}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {slides.map((s, i) => (
          <div className={`slide ${i === index ? 'active' : ''}`} key={i}>
            <img src={s.img} alt={s.title} draggable={false} />
            <div className="overlay" />
            <div className="caption">
              <h2>{s.title}</h2>
              {s.subtitle && <p>{s.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="sr-only" aria-live="polite">{`${index + 1} of ${slides.length}: ${slides[index].title}`}</div>

      <button className="arrow arrow-prev" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="arrow arrow-next" onClick={next} aria-label="Next slide">›</button>

      <div className="indicators">
        {slides.map((_, i) => (
          <button key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => goTo(i)} aria-current={i === index} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
