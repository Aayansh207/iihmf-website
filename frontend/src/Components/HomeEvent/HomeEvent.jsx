import { Link } from 'react-router-dom'
import "./HomeEvent.css"

export default function HomeEvent() {
  return (
    <div className="main-div">
       <div className="event-text-div">
        <h1 className="event-heading">Upcoming Event</h1>
       </div>

       <a href='cohort_notification.pdf' className="event-desc-div" aria-label="Go to events page">
        <div className="notification-content">
          <div className="notification-title">Cohort 4.0 - Call For Startup (Ignition Grant Upto ₹10 Lakhs)</div>
          <button className="check-btn">Check</button>
        </div>
       </a>

    </div>
  )
}