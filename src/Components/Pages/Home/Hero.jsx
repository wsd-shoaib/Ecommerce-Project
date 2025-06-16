import { useEffect, useState, useContext } from "react";
import "./Hero.css";
import banner1 from "../../../assets/Banner1.png";
import banner2 from "../../../assets/Banner2.png";
import banner3 from "../../../assets/Banner3.png";
import { ThemeContext } from "../../Context/ThemeContext";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const slides = [
  {
    image: banner1,
    title: "Discover Your Style",
    description: "Shop the latest trends in fashion, electronics, and more!",
  },
  {
    image: banner2,
    title: "Upgrade Your Tech",
    description: "Find the best deals on electronics and gadgets!",
  },
  {
    image: banner3,
    title: "Home & Living",
    description: "Make your space beautiful and functional!",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate(); // ✅ Hook for navigation

  useEffect(() => {
    const interval = setInterval(() => {
      slideToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slideToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleShopNow = () => {
    navigate("/shop"); // ✅ Navigate to shop page
  };

  return (
    <div className={`hero-section ${darkMode ? "dark" : ""}`}>
      <button
        className="side-arrow left-arrow"
        aria-label="Previous Slide"
        onClick={slideToPrev}
      >
        <FaAngleLeft />
      </button>

      <div className="hero-content">
        <h1>{slides[currentIndex].title}</h1>
        <p>{slides[currentIndex].description}</p>
        <button className="hero-btn" onClick={handleShopNow}>
          Shop Now
        </button>

        <div className="dots-container">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(idx)}
            />
          ))}
        </div>
      </div>

      <button
        className="side-arrow right-arrow"
        aria-label="Next Slide"
        onClick={slideToNext}
      >
        <FaAngleRight />
      </button>

      <div className="hero-image-container">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="hero-image"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Hero;
