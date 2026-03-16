import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import './CSS/RegistrationPage.css'
const RegistrationPage = () => {
  return (
    <div>
      <Navbar />
      <div className="reg-container">
      <div className="reg-head"><h1>Registration Process</h1></div>
    
        <div className="reg-btn">
        <a href="https://www.mca.gov.in/" target='_blank'><button>Company Registration</button></a>
         <a href="https://startinup.up.gov.in/" target='_blank'> <button>STARTIN UP Registration</button></a>   
         <a href="https://www.startupindia.gov.in/" target='_blank'> <button>STARTUP INDIA Registration</button></a>       
         {/* <a href="https://www.youtube.com/watch?v=4OhHzV_PgGM" target='_blank'> <button>Registration Guidance</button></a> */}
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDKN6p7wCyyE-ImDYDbXJLZoQ4bTXBtF2Hb0YjtappPA0UrA/viewform?usp=sf_link" target='_blank'><button>Apply for Incubation</button></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RegistrationPage
