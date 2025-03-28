// EmailSender.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./EmailSender.css"

const EmailSender = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      emailjs
        .send(
          process.env.REACT_APP_EMAIL_SERVICE_ID, 
          process.env.REACT_APP_EMAIL_TEMPLATE_ID, 
          formData, 
          process.env.REACT_APP_EMAIL_USER_ID
        )
        .then((response) => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch((error) => {
          setErrorMessage("Failed to send message. Please try again.");
        });
    } else {
      setErrorMessage("Please fill in all required fields.");
    }
  };

  return (
    <div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Abc"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Abc@def.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="This is optional"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Hi! I’d like to ask about"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailSender;
