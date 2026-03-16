import React from "react";
import "./ProfileCard.css";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const ProfileCard = (props) => {
  return (
    <div class="profile-card">
      <div class="profile-pic">
        <img src={props.img} alt="" />
      </div>
      <div class="bottom">
        <div class="content">
          <span class="name">{props.name}</span>
          <span class="about-me">
           {props.desc}
          </span>
        </div>
        <div class="bottom-bottom">
          <div class="social-links-container">
            <div className="g-scholar-icon">
              <a href={props.gscholar}><FaGoogleScholar color="#3c3c3c" /></a>
            </div>
            <div className="linked-in-icon">
            <a href={props.linkedin}><FaLinkedin color="#3c3c3c" /></a>
            </div>
            <div className="mail-icon">
              <a href={`mailto:${props.email}`}>
                <MdOutlineEmail size={24} color="#3c3c3c" />
              </a>
            </div>{" "}
          </div>
          <a href={props.faculty_profile} target="_blank">
            <button class="button">View Profile</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
