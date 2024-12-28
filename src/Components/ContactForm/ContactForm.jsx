import React from 'react';
import './ContactForm.css';
import clockIcon from "../../Assets/Images/UI/Icons/clock_icon.png";
import locationIcon from "../../Assets/Images/UI/Icons/location_icon.png";
import phoneIcon from "../../Assets/Images/UI/Icons/phone_icon.png";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-info">
        <div className="contact-item">
          <span className="icon"> <img src={locationIcon}/></span>
          <div>
            <h4>Address</h4>
            <p>224 Rua Dos Irmaos Roby,<br />Maputo 1110, Mozambique</p>
          </div>
        </div>
        <div className="contact-item">
          <span className="icon"> <img src={phoneIcon}/></span>
          <div>
            <h4>Phone</h4>
            <p>Mobile: +258 85 879 9377<br />Hotline: +258 86 069 5853</p>
          </div>
        </div>
        <div className="contact-item">
          <span className="icon"> <img src={clockIcon}/></span>
          <div>
            <h4>Working Time</h4>
            <p>Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" placeholder="Abc" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Abc@def.com" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="This is an optional" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Hi! I’d like to ask about"></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
