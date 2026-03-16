import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './FocusedAreas.css';
import iomt from '../Assets/iomt.png';
import aihc from '../Assets/aihc.png';
import mh from '../Assets/mh.png';
import printer from '../Assets/3dp.png';
import diagnosis from '../Assets/diagnosis.png';
import biof from '../Assets/biof.png';
import arvr from '../Assets/arvr.jpg';
import fin from '../Assets/fin.png';
import agri from '../Assets/agri.png';
import soc from '../Assets/soc.jpg';
import was from '../Assets/was.jpg';
import robo from '../Assets/robo.jpg';
import edt from '../Assets/edt.png';
import ecom from '../Assets/ecom.png';
import clean from '../Assets/clean.jpg';
import wear from '../Assets/wear.png'

const FocusedAreas = () => {
  const { ref: focusedAreasRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const cardsRef = useRef([]);

  return (
    <div className='focused-areas' ref={focusedAreasRef}>
      <div className={`focused-areas-head ${animate ? 'scale-up-head' : ''}`}>
        <h1>FOCUSED AREAS</h1>
      </div>
      <div className="focused-areas-cards">
        {[
          {
            title: "IoT/IoMT",
            img: iomt,  // Replace with actual image source
            description: "The Internet of Things (IoT) and Internet of Medical Things (IoMT) refer to the network of interconnected devices that collect and exchange data. IoT covers a broad range of applications from smart homes to industrial automation, while IoMT specifically focuses on healthcare, enabling remote monitoring and patient management."
          },
          {
            title: "AI/ML",
            img: aihc,  // Replace with actual image source
            description: "Artificial Intelligence (AI) and Machine Learning (ML) involve the development of algorithms and systems that can perform tasks requiring human intelligence. These technologies are used in various applications, including natural language processing, image recognition, predictive analytics, and autonomous systems."
          },
          {
            title: "Bio-fluidics",
            img: biof,
            description: "Bio-fluidics is the study and manipulation of fluids and their properties in biological systems, with applications in fields such as biotechnology and medical diagnostics."
          },
          {
            title: "Wearable Implants",
            img: wear,
            description: "Wearable implants are implantable medical devices that can be worn on or inside the body to monitor, track, or treat various health conditions."
          },
          {
            title: "Mobile Health (mHealth)",
            img: mh,
            description: "Mobile health (mHealth) refers to the use of mobile devices and wireless technologies to support healthcare delivery and health outcomes."
          },
          {
            title: "3D Printing",
            img: printer,
            description: "3D printing is a manufacturing process that creates three-dimensional objects by layering materials on top of each other based on a digital model, with applications in fields such as healthcare, engineering, and architecture."
          },
          {
            title: "3D Imaging, AR, VR",
            img: arvr,
            description: "3D imaging, augmented reality (AR), and virtual reality (VR) technologies create immersive, interactive experiences that enable users to visualize and interact with three-dimensional digital objects or environments, with applications in fields such as gaming, entertainment, education, and healthcare."
          },
          {
            title: "Computer Aided Diagnostics (CAD)",
            img: diagnosis,
            description: "Computer-aided diagnostics (CAD) involves the use of computer algorithms and machine learning techniques to support medical professionals in the interpretation of diagnostic imaging and other medical data for improved accuracy and efficiency."
          },
          {
            title: "Financial Technology (Fintech)",
            img: fin,
            description: "Financial technology (Fintech) encompasses a wide range of innovations and technological advancements aimed at improving and automating the delivery and use of financial services. This includes online banking, mobile payment apps, cryptocurrencies, and more, making financial services more accessible and efficient."
          },
          {
            title: "Agricultural Technology (Agritech)",
            img: agri,  // Replace with actual image source
            description: "Agricultural technology (Agritech) involves the use of advanced technologies to improve the efficiency and output of agricultural practices. This includes the use of drones for crop monitoring, precision farming techniques, automated irrigation systems, and genetically modified crops to enhance productivity and sustainability."
          },
          {
            title: "Social Technology (Sociotech)",
            img: soc,  // Replace with actual image source
            description: "Social technology (Sociotech) refers to the use of technology to enhance social interactions and address societal challenges. This can include social media platforms, online collaboration tools, and technologies designed to support community building, mental health, and social well-being."
          },

          {
            title: "Waste Management",
            img: was,  // Replace with actual image source
            description: "Waste management involves the collection, transportation, processing, and disposal of waste materials. It aims to reduce the adverse effects of waste on the environment and human health. This field encompasses various strategies, including recycling, composting, and sustainable waste disposal methods, to ensure effective and eco-friendly waste management."
          }

          ,
          {
            title: "Robotics",
            img: robo,  // Replace with actual image source
            description: "Robotics involves the design, construction, operation, and use of robots to perform tasks traditionally done by humans. This technology is used in manufacturing, healthcare, space exploration, and many other fields."
          },
          {
            title: "Ed Tech",
            img: edt,  // Replace with actual image source
            description: "Educational Technology (Ed Tech) encompasses various tools and platforms designed to enhance teaching and learning experiences. It includes online learning, interactive software, virtual classrooms, and other digital resources aimed at improving educational outcomes."
          },
          {
            title: "E-commerce",
            img: ecom,  // Replace with actual image source
            description: "E-commerce refers to the buying and selling of goods and services over the internet. This industry covers a range of online transactions, from retail shopping to online auctions, and includes both B2B and B2C operations."
          },
          {
            title: "Clean and Green Energy",
            img: clean,  // Replace with actual image source
            description: "Clean and green energy focuses on using renewable and sustainable energy sources to reduce environmental impact. This field includes technologies and practices that harness energy from natural resources such as sunlight, wind, and water, aiming to minimize carbon emissions and promote a healthier planet."
          }


        ].map((item, index) => (
          <div
            className={`focused-areas-card ${animate ? 'scale-up' : ''}`}
            ref={el => cardsRef.current[index] = el}
            key={index}
            style={{ transitionDelay: `${index * 0.3}s` }}
          >
            <div className="f-area-icon">
              <img src={item.img} alt='' />
            </div>
            <div className="f-area-head">
              <p>{item.title}</p>
            </div>
            <div className="f-area-desc">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FocusedAreas;
