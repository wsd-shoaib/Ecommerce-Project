import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./Components/Context/ThemeContext";
import CartProvider from "./Components/Context/CartContext";
import AuthProvider from "./Components/Context/AuthContext";
import Nav from "./Components/Navbar/Nav";
import Home from "./Components/Pages/Home/Home";
import Shop from "./Components/Pages/Shop/Shop";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Cart from "./Components/Pages/Cart";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Components/Pages/Shop/ProductDetails";
import SignIn from "./Components/Pages/SignIn";
import Checkout from "./Components/Pages/Checkout";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
