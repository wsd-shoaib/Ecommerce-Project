import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    const { name, email, phone, address } = formData;

    if (!name || !email || !phone || !address) {
      setError("❌ Please fill in all the required fields.");
      return;
    }

    // সব ইনফরমেশন ঠিক থাকলে
    setError(""); // এরর মেসেজ মুছে ফেলি
    alert("✅ Your order has been placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="checkout-grid">
          {/* Left: Billing & Payment */}
          <div className="checkout-left">
            <h3>Billing Information</h3>
            <form className="billing-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </form>

            <h3>Payment Method</h3>
            <div className="payment-methods">
              <label>
                <input type="radio" name="payment" defaultChecked />
                Cash on Delivery
              </label>
              <label>
                <input type="radio" name="payment" />
                Credit/Debit Card
              </label>
              <label>
                <input type="radio" name="payment" />
                Bkash/Nagad
              </label>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="checkout-right">
            <h3>Order Summary</h3>
            <div className="summary-list">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <hr />
            <div className="summary-total">
              <strong>Total:</strong>
              <strong>${totalPrice}</strong>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
