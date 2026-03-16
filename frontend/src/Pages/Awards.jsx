import React from 'react';
import './CSS/Awards.css';
import AwardCard from '../Components/AwardCard/AwardCard';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import av1 from '../Components/Assets/av1.jpg'
import av2 from '../Components/Assets/av2.jpg'
import av3 from '../Components/Assets/av3.jpg'
import rh1 from '../Components/Assets/rh1.jpg'
import rl3 from '../Components/Assets/rl3.jpg'
import rh3 from '../Components/Assets/rl3.jpg'
import eh2 from '../Components/Assets/eh2.jpg'
const Awards = () => {
  const awards = [
    {
      title: `RailHeath Achievements and Recognitions`,
      content: `We are RailHeath, a startup providing health facilities during train journeys. We ranked in the top 10 out of 1000 teams in Cisco and NASSCOM Foundation's thingQbator Cohort 6.0, receiving ₹5 lakhs in funding. We also secured 2nd place in MNNIT's Cohort 1.0 and the top 10 in IIT Roorkee's Ideastrom event.`,
      images: [rl3, rh1, eh2]
    },
    {
      title: `Avicen Achievements `,
      content: `We are Avicen AI, dedicated to empowering businesses with cutting-edge AI agents. Founded by Aditya Singh and Anushka Gupta, we have achieved significant recognition, securing first place in the B-Plan (Renaissance 2024), Pitchers (Aavishkar 2024), and Navachar (Aavishkar 2024) competitions. Additionally, we are two-time finalists in IIM Bangalore's prestigious business plan competitions. We proudly serve over 7 clients, delivering exceptional AI solutions.`,
      images: [av1, av2, av3]
    }
    // Add more awards as needed
  ];

  return (
    <div className="awards">
      <Navbar/>
      <div className="awards-page">
        <div className="awards-head"><h1>Awards</h1></div>
     
      <div className="awards-container">
        {awards.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Awards;
