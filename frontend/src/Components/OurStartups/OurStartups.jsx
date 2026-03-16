// import React from "react";
// import "./OurStartups.css";
// import { useInView } from "react-intersection-observer";
// import sl1 from "../Assets/cw.jpg";
// import sl2 from "../Assets/cashcry.jpg";
// import sl3 from "../Assets/darjie.jpg";
// import sl4 from "../Assets/ge.jpg";
// import sl5 from "../Assets/shipizens.jpg";
// import sl6 from "../Assets/ie.jpg";
// import sl7 from "../Assets/ghs.jpg";
// import sl8 from "../Assets/soboroso.jpg";
// import sl9 from "../Assets/sl9.jpg";

// const OurStartups = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div className="our-startups" ref={ref}>
//       <div
//         className={`our-startup-head ${
//           inView ? "animate-our-startup-head" : ""
//         }`}
//       >
//         <h1>
//           Our <span>StartUps</span>
//         </h1>
//       </div>
//       <div className="startup-carousel-r1">
//         <div className={`startup-logo ${inView ? "animate-logo" : ""}`}>
//           <img src={sl1} alt="Startup 1" />
//         </div>
//         <div className={`startup-logo ${inView ? "animate-logo" : ""}`}>
//           <img src={sl2} alt="Startup 2" />
//         </div>
//         <div className={`startup-logo ${inView ? "animate-logo" : ""}`}>
//           <img src={sl3} alt="Startup 3" />
//         </div>
//         <div className={`startup-logo ${inView ? "animate-logo" : ""}`}>
//           <img src={sl4} alt="Startup 4" />
//         </div>
//       </div>
//       <div className="startup-carousel-r2">
//         <div className={`startup-logo ${inView ? "animate-logo" : ""}`}>
//           <img src={sl5} alt="Startup 5" />
//         </div>
//         <div className={`startup-logo ${inView ? "animate-logo" : ""}`}>
//           <img src={sl6} alt="Startup 6" />
//         </div>
//         <div className={`startup-logo ${inView ? "animate-logo" : ""}`}>
//           <img src={sl7} alt="Startup 7" />
//         </div>
//         <div className={`startup-logo ${inView ? "animate-logo" : ""}`}>
//           <img src={sl8} alt="Startup 8" />
//         </div>
//         <div className={`startup-logo ${inView ? "animate-logo" : ""}`}>
//           <img src={sl9} alt="Startup 9" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurStartups;
import React from "react";
import PropTypes from "prop-types";
import "./OurStartups.css";
import { useInView } from "react-intersection-observer";

const OurStartups = ({ images, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="our-startups" ref={ref}>
      <div
        className={`our-startup-head ${
          inView ? "animate-our-startup-head" : ""
        }`}
      >
        <h1>
          Our <span>{text}</span>
        </h1>
      </div>
      <div className="startup-carousel-r1">
        {images.slice(0, 5).map((image, index) => (
          <div key={index} className={`startup-logo ${inView ? "animate-logo" : ""}`}>
            <a href={image.link}><img src={image.src} alt={image.alt} /></a>
          </div>
        ))}
      </div>
      <div className="startup-carousel-r2">
        {images.slice(5).map((image, index) => (
          <div key={index} className={`startup-logo ${inView ? "animate-logo" : ""}`}>
             <a href={image.link}><img src={image.src} alt={image.alt} /></a>
          </div>
        ))}
      </div>
    </div>
  );
};

OurStartups.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  text: PropTypes.string.isRequired,
};

export default OurStartups;
