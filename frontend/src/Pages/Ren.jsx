import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import EventHero from '../Components/EventHero/EventHero'
import ren_img from '../Components/Assets/ren.jpg'
import EventGallery from '../Components/EventGallery/EventGallery'
import r1 from '../Components/renImages/r1.jpg'
import r2 from '../Components/renImages/r2.jpg'
import r3 from '../Components/renImages/r3.jpg'
import r4 from '../Components/renImages/r4.jpg'
import r5 from '../Components/renImages/r5.jpg'
import r6 from '../Components/renImages/r6.JPG'
import r7 from '../Components/renImages/r7.JPG'
import r8 from '../Components/renImages/r8.JPG'
import r9 from '../Components/renImages/r9.JPG'
import r10 from'../Components/renImages/r10.JPG'
import r11 from '../Components/renImages/r11.JPG'
import r12 from '../Components/renImages/r12.JPG'
import r13 from '../Components/renImages/r13.JPG'
import r14 from '../Components/renImages/r14.JPG'
import r15 from '../Components/renImages/r15.JPG'
import r16 from '../Components/renImages/r16.JPG'
import r18 from '../Components/renImages/r18.JPG'

const Ren = () => {
    const desc =  `The E-Summit Renaissance-2024, held on January 15th at MNNIT Allahabad, was a flagship event aimed at fostering entrepreneurship and innovation. The summit, organized by the Institute Innovation Council (IIC) under MHRD and in collaboration with the Innovation and Incubation Hub MNNIT Foundation (IIHMF), brought together investors, entrepreneurs, and venture capitalists. Key events included B-Plan pitches where aspiring entrepreneurs presented their ideas for funding and mentorship, E-Talks featuring insights from industry leaders, engaging panel discussions, a Mock IPL Auction, and the Game of Stocks, which offered participants a hands-on experience in stock market fundamentals. The event provided a dynamic platform for networking, learning, and growth.`
    const images=[r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r18]
  return (
    <div className='ren'>
      <Navbar />
      <EventHero event_name="Renaissance" img={ren_img} desc={desc} link="https://e-cellmnnit.netlify.app/" />
      <EventGallery images={images} />
      <Footer />
    </div>
  )
}

export default Ren
