import React, { Component } from "react";

import "./About.css";
import ProfilePicture from "../assets/Profile-picture.svg";
import AboutMeImg from "../assets/loving-boy.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import GmailIcon from "../assets/gmail.svg";

import MyTechStack from "../component/MyTechStack/MyTechStack";

export default class About extends Component {
  render() {
    return (
      <div className="about-page-container">
        <div className="about-page-left-section">
          <img src={ProfilePicture} alt="Profile img" className="profile-img" />
          <div className="about-me-title">
            <h1>About me</h1>
            <img src={AboutMeImg} alt="Profile img" />
          </div>
          <p className="about-me-text slide-in-bottom">
            I am a highly motivated and ambitious student who is currently
            working towards a bachelor's degree in Computer Science. I've been
            around computers and machines since a very young age, and with time
            I've developed a deep passion towards computing and electronics.
            Since leaving my home country and coming to college, I've decided to
            start my journey into the professional world in order to sharpen my
            skills and develop new ones. Nonetheless, I also consider myself a
            sports and gym lover, I make sure that mind has healthy and strong
            body to rest within.
          </p>
        </div>
        <div className="about-page-right-section">
          <MyTechStack />
          <h1 className="about-page-contact-me">Contact me</h1>
          <div className="about-page-contact-icons fade-in">
            <a href="https://www.linkedin.com/in/sami-amsaf/">
            <img
              src={LinkedInIcon}
              alt="Linkedin icon"
              className="about-page-linkedin-icon"
              href="https://www.linkedin.com/in/sami-amsaf/"
            /> </a>
            <a href="mailto:samiamsaf1902@gmail.com">
            <img
              src={GmailIcon}
              alt="Gmail icon"
              className="about-page-gmail-icon"
            />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
