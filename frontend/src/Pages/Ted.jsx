import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ted_img from '../Components/Assets/ted.jpg'
import EventHero from '../Components/EventHero/EventHero'
import EventGallery from '../Components/EventGallery/EventGallery'
import t1 from '../Components/tedImages/t1.jpg'
import t2 from '../Components/tedImages/t2.jpg'
import t3 from '../Components/tedImages/t3.jpg'
import t4 from '../Components/tedImages/t4.jpg'
import t5 from '../Components/tedImages/t5.jpg'
import t6 from '../Components/tedImages/t6.jpg'
import t7 from '../Components/tedImages/t7.jpg'
import t8 from '../Components/tedImages/t8.jpg'
import t9 from '../Components/tedImages/t9.jpg'
import t10 from '../Components/tedImages/t10.jpg'

const Ted = () => {
    const desc=` TEDxMNNIT 2023, themed "Exploring Uncharted Waters," ignited change on November 19th at Motilal Nehru National Institute of Technology Allahabad. Highlights included Geetika Mehta’s shift to social impact, Lt. Cdr Pravin Tulpule's journey as "Happy Uncle," Anshul Rustaggi's ZionVerse metaverse, and insights from Vijender Chauhan and Dr. Mohit Dayal Gupta. Organized in collaboration with Innovation and Incubation Hub MNNIT Foundation (IIHMF) and E-Cell MNNIT, the event inspired resilience, empathy, and innovation, urging attendees to embrace the unknown.`
    const images =[t1,t2,t3,t4,t5,t6,t7,t8,t9,t10]
  return (
    <div className='ted'>
        <Navbar />
        <EventHero  event_name="TEDx MNNIT" img={ted_img} desc={desc} link="https://tedxmnnit.com/"  />
        <EventGallery images={images} />
        <Footer />
      
    </div>
  )
}

export default Ted
