import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import udbhav_img from '../Components/Assets/3.png'
import EventHero from '../Components/EventHero/EventHero'
import EventGallery from '../Components/EventGallery/EventGallery'
import u1 from '../Components/UdbhavImages/u1.jpg'
import u2 from '../Components/UdbhavImages/u2.jpg'
import u3 from '../Components/UdbhavImages/u3.jpg'

import u7 from '../Components/UdbhavImages/u7.jpg'
import u8 from '../Components/UdbhavImages/u8.jpg'
import u9 from '../Components/UdbhavImages/u9.jpg'

import u11 from '../Components/UdbhavImages/u11.jpg'

import u13 from '../Components/UdbhavImages/u13.jpg'
import u14 from '../Components/UdbhavImages/u14.jpg'
import u15 from '../Components/UdbhavImages/u15.jpg'
import u16 from '../Components/UdbhavImages/u16.jpg'


const Udbhav = () => {
    const desc=`
Udbhav - Youth Summit, held from November 24-26, 2023, at MNNIT Allahabad, showcased young talent and fostered innovation. Organized by the Institute Innovation Council (IIC) under MHRD in collaboration with Innovtion & Incubation Hub MNNIT Foundation (IIHMF), Prayagraj. The summit united academia, venture capitalists, and entrepreneurs. Participants engaged in workshops, panel discussions, and competitions, inspiring creativity and entrepreneurship. The event also featured filmmaking sessions, enhancing creative expression. Udbhav served as a dynamic hub for learning, networking, and growth.`

    const images = [u16,u14,u3,u7,u8,u9,u11,u13,u2,u15,u1];

  return (
    <div className='udbhav'>
        <Navbar />
        <EventHero event_name="Udbhav" img={udbhav_img} desc={desc} link="https://udbhavmnnit.in/" />
        <EventGallery images={images} />
        <Footer />
    </div>
  )
}

export default Udbhav
