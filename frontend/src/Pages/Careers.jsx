import React from 'react'
import './CSS/Careers.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { MdFiberNew } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";

const Careers = () => {
  return (
    <div className='careers'>
      <Navbar />
      <div className="careers-head">
        <h1>Careers/Jobs</h1>
      </div>
      <div className="career-notifications">
      <a href='http://www.mnnit.ac.in/tbi/notifications/IIHMF-TBI%20Advertisement%2010.06.2024-Pub.pdf' target='_blank'><p><TfiAnnouncement /> Advertisement No. TBI/MNNIT/RECT/02, dated 10/06/2024, regarding various position in Innovation and Incubation Hub MNNIT Foundation.. <MdFiberNew size={24}/></p></a>
        <a href='http://www.mnnit.ac.in/tbi/notifications/Advertisement_TBI.pdf' target='_blank'><p><TfiAnnouncement /> Advertisement No. TBI/MNNIT/08/01, dated 16/08/2023, is hereby notified that the last date of submission of applications is extended till 15/09/2023. </p></a>
        <a href='http://www.mnnit.ac.in/tbi/notifications/Advertisement_TBI.pdf' target='_blank'><p><TfiAnnouncement /> Advertisement No. TBI/MNNIT/08/01, dated 16 August, 2023 regarding various position in Innovation and Incubation Hub MNNIT Foundation. </p></a> 
      </div>
      <Footer />
    </div>
  )
}

export default Careers
