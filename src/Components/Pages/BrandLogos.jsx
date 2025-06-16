// BrandLogos.jsx
import React from "react";
import "./BrandLogos.css";

const brands = [
  {
    name: "Akij",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL7gM9bpuwOZECka3BXfR1UxLPTv0gA4XGMFEdp5fiRKy4OqORVPWY_cM2y3Ce0ZYj5s&usqp=CAU",
    link: "https://www.akij.net/",
  },
  {
    name: "Bashundhara",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZjviUDptiVQI7qIDOrDIoFvV0Z0wW9gs7g&s",
    link: "https://www.bashundharagroup.com/",
  },
  {
    name: "Daraz",
    logo: "https://static.youthop.com/uploads/sites/2/2021/10/daraz_logo_color.png",
    link: "https://www.daraz.com.bd/",
  },
  {
    name: "Samsung",
    logo: "https://images.seeklogo.com/logo-png/12/2/samsung-logo-png_seeklogo-122017.png",
    link: "https://www.samsung.com/us/",
  },
];

const BrandLogos = () => (
  <section className="brand-logos">
    <h2 className="brand-title">Our Trusted Brands</h2>
    <div className="brand-container">
      {brands.map((b) => (
        <a
          key={b.name}
          href={b.link}
          target="_blank"
          rel="noopener noreferrer"
          className="brand-item"
          title={b.name}
        >
          <img src={b.logo} alt={b.name} />
        </a>
      ))}
    </div>
  </section>
);

export default BrandLogos;
