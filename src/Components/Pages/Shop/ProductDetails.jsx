import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { AuthContext } from "../../Context/AuthContext";
import "./ProductDetails.css";
import BrandLogos from "../BrandLogos";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch("/ProductData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find((p) => p.id === parseInt(id));
        setProduct(found);
        setSimilarProducts(
          data.products.filter(
            (item) => item.category === found.category && item.id !== found.id
          )
        );
        setQuantity(1);
      });
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate("/signin"); // এখানে /signin ইউজ করলাম
      return;
    }
    const productWithQty = { ...product, quantity };
    addToCart(productWithQty);
  };

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      navigate("/signin"); // এখানে /signin ইউজ করলাম
      return;
    }
    const productWithQty = { ...product, quantity };
    addToCart(productWithQty);
    navigate("/cart");
  };

  return (
    <div className="product-details">
      <div className="details">
        <div className="image-wrapper">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price.toFixed(2)}</h3>

          <div className="quantity-selector">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>

          <div className="btn-group">
            <button className="add-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-now-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <h3 className="similar-title">You May Also Like</h3>
      <div className="similar-products">
        {similarProducts.map((item) => (
          <div className="similar-card" key={item.id}>
            <Link to={`/product/${item.id}`} className="similar-link">
              <img src={item.thumbnail} alt={item.title} />
              <h4>{item.title}</h4>
              <p>${item.price.toFixed(2)}</p>
            </Link>
            <button
              className="similar-add-btn"
              onClick={() => {
                if (!isAuthenticated) {
                  navigate("/signin"); // এখানে ও /signin ইউজ করলাম
                  return;
                }
                addToCart({ ...item, quantity: 1 });
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <BrandLogos />
    </div>
  );
};

export default ProductDetails;
