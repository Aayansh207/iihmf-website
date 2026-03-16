import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { EventBlog } from '../Components/EventBlog/EventBlog'
import tbi_b from '../Components/Assets/tbi_b.png'
import jnv from "../Components/Assets/jnv.jpg"
import cof1 from "../Components/Assets/2july.jpeg"
import cof2 from "../Components/Assets/cof2.JPG"
import cof3 from "../Components/Assets/cof3.jpeg"
import cof4 from "../Components/Assets/cof4.jpeg"
import cof5 from "../Components/Assets/cof5.jpg"
import cof01 from '../Components/Assets/cof01.jpg'
import cof001 from '../Components/Assets/cof001.jpg'
import con6 from "../Components/Assets/con6.jpg"
import agree from "../Components/Assets/agree.JPG"
import con7 from "../Components/Assets/con7.jpeg"
import con11 from "../Components/Assets/con11.jpg"
import con12 from "../Components/Assets/con12.jpg"
import con13 from "../Components/Assets/con13.jpg"
import con15 from "../Components/Assets/con15.jpeg"
import con14 from "../Components/Assets/con14.jpg"



  const OtherEvents = () => {
    
    // Define your events array here
    const events = [
      {
        url: cof01,
        description: `IIHMF of MNNIT and NIEF of the University of Allahabad have signed a Memorandum of Understanding (MOU) for mutual support towards the development of entrepreneurship and the startup ecosystem.  `,
        date: `11 july 2024`
      },
      {
        url: cof1,
        description: ` Prof. Arun K. Thittai's session at IIHMF focused on AI in medical equipment development.`,
        date: `2 july 2024`
      },{
        url: cof2,
        description: ` Mr. Abhishek Tiwari from KPMG discussed various modes of financial assistance to the Incubator and Startups`,
        date: `7 June 2024`
      },{
        url: cof3,
        description: `On World Environment Day, June 5, IIHMF celebrated by planting trees.`,
        date: `5 June 2024`
      },
      {
        url: tbi_b,
        description:`IITs and NITs support startups to realize Viksit Bharat 2047. Prof. Rajiv Prakash of IIT Bhilai shared insights on innovation at IIHMF, MNNIT Prayagraj, focusing on FinTech, AgriTech, and IoT.`,
        date: `30 May 2024`
      },
      {
        url: jnv,
        description: 'InnovateMed Insights: A journey through bench to beside excellence with Dr. Jitendra N Verma”',
        date: `4 February 2024`
      },
      {
        url: cof5,
        description: 'Innodrive 2024, pioneering the future of mobility with BS VI Technology.',
        date: `31 January 2024 `
      }
    ];
    console.log("g",tbi_b)
  return (

    <div className='other-events'>
      <Navbar />
      <EventBlog events={events}  />
      <Footer />
    </div>
  )
}

export default OtherEvents
