import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="item-details">
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="item-actions">
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <h3>Total Price: ${totalPrice}</h3>
            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
