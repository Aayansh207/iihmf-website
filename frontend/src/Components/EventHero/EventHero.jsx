import React from "react";
import "./EventHero.css";
import { FaAngleRight } from "react-icons/fa6";

const EventHero = (props) => {
  return (
    <div className="event-hero">
      <div className="event-hero-left">
        <div className="event-hero-left-head">
          <h4>Flagship Event </h4>
          <h1> About {props.event_name}</h1>
        </div>
        <div className="event-hero-left-desc">
          <p>
          {props.desc}
          </p>
        </div>
        <div>
          <a className="know-more-btn" href={props.link} target="_blank">
            <span className="circle">
                <div className="arrow">
                <FaAngleRight color="#fff" size={24}/>
                </div>
            </span>
            <span className="button-text">KNOW MORE</span>
          </a>
        </div>
      </div>
      <div className="event-hero-right">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

export default EventHero;
