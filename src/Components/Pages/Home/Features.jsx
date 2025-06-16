import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { AuthContext } from "../../Context/AuthContext";
import "./Features.css";

const Features = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/ProductData.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.products.filter(
          (product) => product.rating >= 4.5
        );
        setPopularProducts(filtered);
      })
      .catch((err) => {
        console.error("Error loading product data:", err);
      });
  }, []);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/signin");
      return;
    }
    addToCart({ ...product, quantity: 1 });
  };

  const handleBuyNow = (e, product) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/signin");
      return;
    }
    addToCart({ ...product, quantity: 1 });
    navigate("/cart");
  };

  return (
    <section className="features-section">
      <div className="features-title">
        <h2>Most Popular Picks</h2>
        <p>Top-selling products chosen by our customers</p>
      </div>

      <div className="features-grid">
        {popularProducts.length > 0 ? (
          popularProducts.map((product) => (
            <div className="feature-item" key={product.id}>
              <Link to={`/product/${product.id}`} className="feature-link">
                <div className="img-wrapper">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.description.slice(0, 60)}...</p>
              </Link>
              <div className="feature-buttons">
                <button
                  className="add-cart-btn"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>
                <button
                  className="buy-btn"
                  onClick={(e) => handleBuyNow(e, product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="loading-text">Loading popular products...</p>
        )}
      </div>
    </section>
  );
};

export default Features;
