import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  console.log('InView:', inView);  // Debugging line to check if inView is triggered

  return (
    <div className='about' ref={ref}>
      <div className={`about-head ${inView ? 'animate-head' : ''}`}>
        <h1>Learn more <Link to='/aboutus'><span>About us</span></Link></h1>
      </div>
      <div className={`about-desc ${inView ? 'animate-desc' : ''}`}>
        <p>The Innovation and Incubation Hub MNNIT Foundation (IIHMF) at Motilal Nehru National Institute of Technology Allahabad fosters innovation and entrepreneurship by providing mentorship, networking, funding, and business resources. It bridges academia and industry, driving technological advancements and economic growth, and empowers entrepreneurs, nurturing a vibrant startup ecosystem on campus and beyond.</p>
        <p>(IIHMF) is also a recognised inclusive Technology Business Incubator (i-TBI) and facilitating  the start-up inline with the NIDHI i-TBI guidelines of the Deparment of Science and Technology (DST).  </p>
        <p> It is also a recognised incubator of  Uttar Pradesh Electronic Corporation Ltd. (UPLC) under StartinUP  scheme of the Government of Uttar Pradesh and facilitating the StartUps, inline with the startUp policy.
        </p>
      </div>
    </div>
  );
}

export default About;
