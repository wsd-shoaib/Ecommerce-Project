import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import "./Shop.css";
import BrandLogos from "../BrandLogos";

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch("/ProductData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        const items = data.products || [];
        setProducts(items);
        setFilteredProducts(items);
        const uniqueCategories = [
          "All",
          ...new Set(items.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error loading products");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sortType === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, sortType, products]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    if (!isAuthenticated) return navigate("/signin");
    addToCart(product);
  };

  const handleBuyNow = (e, product) => {
    e.stopPropagation();
    if (!isAuthenticated) return navigate("/signin");
    addToCart(product);
    navigate("/cart");
  };

  if (loading) return <div className="shop-loading">Loading products...</div>;
  if (error) return <div className="shop-error">{error}</div>;

  return (
    <div className="shop-container">
      <div className="filter-controls">
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "active" : ""}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="search-sort-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {currentItems.length === 0 ? (
        <div className="shop-empty">No products found.</div>
      ) : (
        <div className="product-grid">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="img-wrapper">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <div className="btn-group">
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="add-cart-btn"
                >
                  Add to Cart
                </button>
                <button
                  onClick={(e) => handleBuyNow(e, product)}
                  className="buy-now-btn"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <BrandLogos />
    </div>
  );
};

export default Shop;
