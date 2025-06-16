import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed Email:", email);
      alert("Thanks for subscribing!");
      setEmail("");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates on offers, products, and more.</p>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
