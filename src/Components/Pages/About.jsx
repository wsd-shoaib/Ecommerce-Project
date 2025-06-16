import React from "react";
import "./About.css";
import Newsletter from "./Home/Newsletter";
import BrandLogos from "./BrandLogos";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-image">
          <img src="./images.jpg" alt="About Us" />
        </div>
        <div className="about-text">
          <h2 className="section-title">Who We Are</h2>
          <p>
            Welcome to <strong>Shop House</strong> — your one-stop destination
            for all things fashion, tech, home essentials, and more! We bring
            you the latest trends and quality products at the best prices.
          </p>
          <p>
            With our dedicated customer support, fast delivery, and secure
            payment system, we ensure your shopping journey is smooth and
            satisfying. Thank you for being a part of our family!
          </p>
        </div>
      </div>
      <BrandLogos />
      <Newsletter />
    </section>
  );
};

export default About;
