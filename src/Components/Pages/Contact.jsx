import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-info">
          <img
            src="./images-removebg-preview.png"
            alt="Company Logo"
            className="contact-logo"
          />
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you. Reach out to us anytime!</p>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Lakshmipur Sadar, Bangladesh</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <span>+880 1810 624998</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>wsdshoaib433298@gmail.com</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <h3>Send Us a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
          {submitted && (
            <p className="success-message">Thanks! We’ll contact you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
