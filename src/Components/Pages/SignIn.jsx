import React, { useContext, useState } from "react";
import "./SignIn.css";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import BrandLogos from "./BrandLogos";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim() || !phone.trim()) {
      alert("Please enter both email and phone number.");
      return;
    }
    login({ email, phone });
    navigate("/");
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-inner">
        <div className="signin-card">
          <h2>Sign In</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
