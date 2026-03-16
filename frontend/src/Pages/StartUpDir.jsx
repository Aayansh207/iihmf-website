import React from "react";
import "./CSS/StartUpDir.css";
import Navbar from "../Components/Navbar/Navbar";
import banner from "../Components/Assets/startup-banner.jpg";
import StartUpContainer from "../Components/StartUpContainer/StartUpContainer";
import Darjie_logo from "../Components/Assets/darjie.jpg";
import ic_logo from "../Components/Assets/ie.jpg";
import saboroso_logo from "../Components/Assets/soboroso.jpg";
import Footer from "../Components/Footer/Footer";
import gaming_eco_logo from "../Components/Assets/ge.jpg";
import shipizens_logo from "../Components/Assets/shipizens.jpg";
import ghs_logo from "../Components/Assets/ghs.jpg"
import cashcry_logo from "../Components/Assets/cashcry.jpg"
import cw_logo from "../Components/Assets/cw.jpg"
import sl9 from "../Components/Assets/sl9.jpg"
import sl10 from '../Components/Assets/Xub.jpg'

const StartUpDir = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <div className="startup-dir-container">
      <StartUpContainer
          head="Henix Rehab Private Limited"
          founder_name="Mr. Sajal Kumar Babu Degala, Ms. Priyanka Kumari, Ms. Kriti Gupta, Mr. Suresh Aligi"
          core_area="IoMT, Medical Devices and Services"
          img={sl9}
          desc="We are an innovative healthcare technology startup focused on revolutionizing patient care through advanced AI and IoT technologies. Based in India, Henix Rehab is dedicated to enhancing the efficiency and effectiveness of health monitoring and Electronic Health Record (EHR) management systems. By seamlessly integrating health monitoring devices with EHR systems, their platform ensures real-time data analysis and secure data transmission, improving decision-making in healthcare and reducing overall costs. The company's mission is to bridge the critical gaps in current healthcare technologies, thereby improving patient outcomes and facilitating proactive healthcare measures. Henix Rehab's comprehensive solutions are tailored to meet the needs of hospitals, clinics, and home healthcare providers, ensuring accessibility and quality care across various healthcare settings."
          link="https://henixrehab.com/"
        />
        <StartUpContainer
          head="Inaequalis Consulting Pvt. Ltd."
          founder_name="Ms. Snigdhaa Ritesh, Mr. Ritesh Saxena"
          core_area="Femtech"
          areas="Big Data,AI,Crime Data Analytics,IoT B2G,B2C"
          img={ic_logo}
          desc="We are an award-winning Social Startup (Women Safety & Empowerment). We have developed an Innovative Women Safety Solution (using AI, Big Data & IoT Technologies) for Women Helplines and the Women populace. We have been awarded twice by the Govt. of Uttar Pradesh in UP STARTUP CONCLAVE 2019 and STARTUP SAMVAAD 2022. We have also been the Finalist for the KAVACH23 Cyber Security Hackathon by MHA and represented UP solely. Besides this we were also amongst the Top-10 Finalist of the SHRI SHAKTI contest by UN WOMEN & MY GOV 2022. We have also received appreciation from Mr. Amitabh Kant on Twitter and the Hon’ble Governor Shrimati Anandi Ben Patel during an in-person meeting.

        Working towards SDG- 5 we aim to create an environment free from discrimination and violence for our womenfolk."
        />
        <StartUpContainer
          head="Saboroso Food Private Limited"
          founder_name="Mrs. Kanchan Singh, Ms. Aditi Singh"
          areas="Food Tech, IoT, B2C, Waste Management"
          img={saboroso_logo}
          desc="Saboroso is a smart food kiosk leveraging modern technology for efficient order management, inventory control, and waste reduction, offering a seamless, eco-friendly dining experience with innovative, tech-driven solutions."
        />
        <StartUpContainer
          head="Gaming Ecosystem Pvt. Ltd."
          founder_name="Mr. Aayog Yadav, Mr. Shivam Rai, Mr. Vipin Yadav"
          areas=" Gaming, 3D, AI, Research, XR"
          img={gaming_eco_logo}
          desc="At Gaming Ecosystem, we're pioneering deep technology innovations to enhance the gaming and XR experience, making immersive and interactive entertainment more seamless and accessible."
          link="HTTPS://GamingEcosystem.in"
        />
        <StartUpContainer
          head="Duotet Private Limited"
          founder_name="Mr. Rishabh Singh, Mr. Arvind Singh"
          areas="Computer vision, Machine learning, AI"
          img={Darjie_logo}
          desc="Revolutionizing bespoke fashion with AI and computer vision, offering affordable, custom-made party wear for middle-class consumers. Experience personalized designs, perfect fits, and cutting-edge technology with Darjie."
        />
        <StartUpContainer
          head="Shipizens Transportation Pvt. Ltd."
          founder_name="Mr. Rishabh Singh, Mr. Arvind Singh"
          core_area="Computer vision, Machine learning, AI"
          img={shipizens_logo}
          desc="Shipizens, certified by Startup India and StartinUP, bridges the transport gap for small businesses
        and individuals. Our mission is to create a robust transport network ensuring safe, timely
        shipments while reducing costs. We provide reliable shipping with real-time tracking, on-time
        delivery, and dedicated support. By implementing AI algorithms and IoT-enabled safety features
        like collision detection, driver fatigue monitoring, and vehicle immobilization, we enhance
        transportation safety and significantly improve the client experience.
        "
          link="https://shipizens.com/"
        />
        <StartUpContainer
          head="GeoHunt Solutions Pvt. Ltd."
          founder_name="Dr. Dinesh Kumar Azad, Mrs. Usha Kumari "
          core_area="GIS, AI and Machine Learning"
          desc="GeoHunt Solutions Pvt. Ltd. is a start-up company run by certified professionals that gives the services and solutions through Geographical Information System (GIS), Remote Sensing, Global Positioning System (GPS), Photogrammetry, LiDAR, Internet of Things (IoT), Internet of Medical Things (IoMT), Artificial Intelligence (AI), Machine Learning (ML), Maps, Data Science, Architectures, UAV Drone, Software Development, DevOps, Website Development, Mobile Application Development, APIs (viz, Restful API), Survey (i.e., Ground, Terrestrial, Aireal) and other designing and map making techniques.
The Company uses emerging technologies deployed in Rural, Urban, and Hilly areas for a variety of purposes, including assessment, planning, and mapping of Land Use, Land Cover, Land Record, and Landscape; Infrastructure, Natural Resources, Demography, and Ecosystems; Roads, Watersheds, and Drainage; Transportation and Utility Distribution Networks of Oil, Gas, Water, Electric, and Solar Power; Market Analysis, Visual Impact Analysis, Facility Management, Tax Assessment, and Real Estate Analysis."
          img={ghs_logo}
        />
        <StartUpContainer
          head="CashCry"
          founder_name="Mr. Bhanu Pratap Singh"
          core_area="E-Commerce, Retail, Fintech & Wealthtech
B2B2C, AI, ML, Affiliate Marketing & E-Gift card"
          desc="CashCry is a cashback and rewards platform designed to maximize savings for consumers while providing significant value to partner merchants. Our platform seamlessly integrates with both online and offline shopping experiences, offering personalized cashback offers and discounts from over 500 trusted brands and retailers. Users can effortlessly access deals on our mobile app or web portal, saving money on every purchase. In addition to consumer benefits, CashCry offers valuable solutions for businesses. We provide premium listing services, custom ERP solutions, and comprehensive CRM tools for offline businesses, helping them engage customers more effectively and optimize their operations. By partnering with CashCry, merchants can boost their visibility, drive sales, and build customer loyalty. Since launch, CashCry has achieved remarkable growth, with significant funding and strategic mentorship from reputable institutions. Our mission is to revolutionize shopping experiences, making it cost-effective and rewarding for consumers while empowering businesses to thrive in a competitive market. Henceforth, we plan to leverage advanced AI and machine learning algorithms, providing tailored shopping recommendations based on user preferences and purchasing behavior. This will not only enhance user satisfaction but also boost repeat purchases. Our AI-driven fraud detection shall ensure secure transactions, safeguarding both users and merchants."
          link="https://www.cashcry.com/"
          img={cashcry_logo}
        />
        <StartUpContainer
          head="CoolieWale"
          founder_name="Mr. Utsav Gupta"
          core_area="Travel , Tourism Transportation & Logistics"
          desc="CoolieWale is a pioneering startup in the Railway Industry, specializing in digitalizing the relationship between coolies and
passengers.We aim to deliver premium services to
Passengers.Its goal is to leverage advanced tech, providing
seamless solutions for both passengers and service providers.
"
          link="https://www.cooliewale.in"
          img={cw_logo}
        />
        <StartUpContainer
          head="Xuberant Solutions Pvt Ltd "
          founder_name="Manav Mishra & Pratyush Kumar "
          core_area="Solar PV Power Based Systems "
          desc="We are trying to solve the problems of farmers by selling the yield from their farms in dried form, dried fruits and vegetables have less issue of contamination and also are easy to transport and the self life increases enormously. Which will ultimately result in better profits for farmers."
          img={sl10}
        />
      </div>
      <Footer />
    </div>
  );
};

export default StartUpDir;
